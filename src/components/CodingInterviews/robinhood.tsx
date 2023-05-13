import React from "react";
import { fetchData } from "../../api";

type ResponseType = {
  data: string | null;
  isLoading: boolean;
};

const useFetchData = (): ResponseType => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [chartData, setChartData] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const rdata: string = await fetchData();
      setChartData(rdata);
      setIsLoading(false);
    };

    getData();
  }, []);

  return {
    data: chartData,
    isLoading,
  };
};

const withLoaderPractice = (Element) => {
  return function (props) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [chartData, setChartData] = React.useState(true);

    React.useEffect(() => {
      const fetchDatas = async () => {
        const data = await fetchData();
        setChartData(data);
        setIsLoading(false);
      };

      fetchDatas();
    });

    if (isLoading) return <div>Loading...</div>;

    return <Element {...props} data={chartData} />;
  };
};

const withLoader = (Element: React.ComponentType<AppProps>) => {
  return (props: AppProps): JSX.Element => {
    const response = useFetchData();

    // const [isLoading, setIsLoading] = React.useState<boolean>(false);
    // const [chartData, setChartData] = React.useState<string>("");

    // React.useEffect(() => {
    //   const getData = async () => {
    //     setIsLoading(true);
    //     const rdata: string = await fetchData();
    //     setChartData(rdata);
    //     setIsLoading(false);
    //   };

    //   getData();
    // }, []);

    // if (isLoading) return <div>Loading</div>;

    if (response.isLoading) return <div>Loading</div>;

    return <Element {...props} data={response.data} />;
  };
};

// export const Robinhood = () => {
//   const response = useFetchData();

//   const getCandleSticks = (duration: number, str: string) => {
//     const series = str.split(",");

//     let i = 0;
//     let startPrice = null;
//     let max = 0;
//     let min = 9999999;
//     const result = [];

//     while (i < series.length) {
//       let currentPrice = Number(series[i].split(":")[1]);
//       let timeStamp = Number(series[i].split(":")[0]);

//       if (startPrice === null) {
//         startPrice = currentPrice;
//         max = Number(currentPrice);
//         min = Number(currentPrice);
//       }

//       max = Math.max(currentPrice, max);
//       min = Math.min(currentPrice, min);

//       if ((i + 1) % duration === 0) {
//         result.push({
//           timeStamp,
//           startPrice,
//           endPrice: currentPrice,
//           max,
//           min,
//         });
//         startPrice = null;
//       }

//       i++;
//     }

//     return result;
//   };

//   if (response.isLoading) {
//     return <div>Loading</div>;
//   }
//   const result = response.data && getCandleSticks(3, response.data);
//   return (
//     <div>
//       {result &&
//         result.map((item) => {
//           const color =
//             Number(item.endPrice) - Number(item.startPrice) > 0
//               ? "green"
//               : "red";
//           return <div style={{ color }}>{JSON.stringify(item)}</div>;
//         })}
//     </div>
//   );
// };

const getCandleSticks = (duration: number, str: string) => {
  const series = str.split(",");

  let i = 0;
  let startPrice = null;
  let max = 0;
  let min = 9999999;
  const result = [];

  while (i < series.length) {
    let currentPrice = Number(series[i].split(":")[1]);
    let timeStamp = Number(series[i].split(":")[0]);

    if (startPrice === null) {
      startPrice = currentPrice;
      max = Number(currentPrice);
      min = Number(currentPrice);
    }

    max = Math.max(currentPrice, max);
    min = Math.min(currentPrice, min);

    if ((i + 1) % duration === 0) {
      result.push({
        timeStamp,
        startPrice,
        endPrice: currentPrice,
        max,
        min,
      });
      startPrice = null;
    }

    i++;
  }

  return result;
};

interface AppProps {
  data: string;
}

const RobinhoodApp = ({ data }: AppProps): JSX.Element => {
  const result = getCandleSticks(3, data);
  return (
    <div>
      {result &&
        result.map((item) => {
          const color =
            Number(item.endPrice) - Number(item.startPrice) > 0
              ? "green"
              : "red";
          return <div style={{ color }}>{JSON.stringify(item)}</div>;
        })}
    </div>
  );
};

export default withLoaderPractice(RobinhoodApp);
