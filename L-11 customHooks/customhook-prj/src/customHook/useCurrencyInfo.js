import { useEffect, useState } from "react";

let url = `https://cdn.jsdelivr.net/gh/
fawazahmed0/currency-api@1/
latest/currencies/${currency}.json`;

function useCurrencyInfo(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/
    fawazahmed0/currency-api@1/
    latest/currencies/${currency}.json`)
      .then((response) => response.json())
      .then((response) => setdata(response[currency]));

    console.log(data);
  }, [currency]);


return data


}

export default useCurrencyInfo
