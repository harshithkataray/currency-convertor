import React from "react";
import { FaSortAmountDown } from "react-icons/fa";

export const InputBox = ({
  label,
  amount,
  onAmount,
  onCurrentChange,
  currencyOptions = [],
  selectCurrency = "USD",
}) => {
  return (
    <div className=" border-4 border-gray-300 p-6 rounded-xl shadow-md flex flex-col gap-4 px-3 py-3">
      <label className="text-lg font-bold ">{label}</label>

      <div className="flex items-center gap-4">
        <div className="w-1/2">
          <label className="block text-sm  mb-1">Amount </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => {
              const val = e.target.value;
              if (val === "") {
                onAmount("");
              } else {
                const num = Number(val);
                if (!isNaN(num)) {
                  onAmount(num);
                }
              }
            }}
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm  mb-1">Currency</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectCurrency}
            onChange={(e) => onCurrentChange && onCurrentChange(e.target.value)}
          >
            {currencyOptions.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default InputBox;
