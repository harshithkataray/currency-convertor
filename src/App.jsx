import React, { useState } from "react";
import useCurrencyInto from "./hook/useCurrencyInto";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [conv, setConv] = useState(0);
  const curr = useCurrencyInto(from);
  const option = Object.keys(curr || {});
  const convert = () => {
    setConv(amount * curr[to].value);
    console.log(conv);
  };

  return (
    <div
      className="flex flex-col h-screen w-full justify-center items-center"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-1/3 h-1/2 flex flex-col justify-center items-center bg-white/30 backdrop-blur-md">
        <InputBox
          label="from"
          amount={amount}
          currencyOptions={option}
          onCurrentChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmount={(val) => setAmount(val)}
        />

        <InputBox
          label="to"
          amount={conv}
          currencyOptions={option}
          onCurrentChange={(currency) => setTo(currency)}
          selectCurrency={to}
        />
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md 
             transition duration-100 ease-in-out 
             hover:bg-blue-700 active:scale-95 shadow-md"
          onClick={(e) => convert()}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default App;
