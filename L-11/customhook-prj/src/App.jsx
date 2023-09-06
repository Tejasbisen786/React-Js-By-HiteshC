import React from "react";
import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./customHook/useCurrencyInfo";

const App = () => {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setfrom(to);
    setto(from);

    setconvertedAmount(amount);
    setamount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  const BackgroundImage =
    "https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <>
    
   
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChnage={(currency) => setamount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChnage={(currency) => setto(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toLocaleUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
