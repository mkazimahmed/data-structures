import axios from "axios";

export default async function fetchPrice(currency: string) {
  const response = await axios.get<{ data: { rates: Record<string, number> } }>(
    `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
  );
  return response.data.data.rates["USD"];
}
