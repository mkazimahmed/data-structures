import * as React from "react";
import "./styles.css";
import fetchPrice from "../../api/alchemy";
import { sensitiveHeaders } from "http2";

const CurrencyInput = ({ onAddCurrency }) => {
  const [currency, setCurrency] = React.useState("");

  const handleOnChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleButtonClick = async () => {
    const data = await fetchPrice(currency);
    console.log(data);
    const currencyData = {
      name: currency,
      value: data,
    };

    onAddCurrency(currencyData);
    setCurrency("");
  };

  return (
    <div className="CurrencyInput">
      <input type="text" value={currency} onChange={handleOnChange} />{" "}
      <button className="btn" onClick={handleButtonClick}>
        Add Currency{" "}
      </button>{" "}
    </div>
  );
};

const CurrencyTile = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="CurrencyTile">
      <div className="CurrencyTile--name">{name}</div>
      <div className="CurrencyTile--value"> {`$${value}`}</div>
    </div>
  );
};

export default function App() {
  const [currencies, setCurrencies] = React.useState([]);

  const handleAddCurrency = (currency: string) => {
    setCurrencies([...currencies, currency]);
  };

  return (
    <div className="App">
      <CurrencyInput onAddCurrency={handleAddCurrency} />
      <div className="CurrencyContainer">
        {currencies.map((c) => {
          return <CurrencyTile name={c.name} value={c.value} />;
        })}
      </div>
    </div>
  );
}
