"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Pricing() {
  const [crypto, setCrypto] = useState("USDC");
  const [amount, setAmount] = useState(200);
  const [fees, setFees] = useState(2);
  const [balance, setBalance] = useState(198);

  const handleAmountChange = (event) => {
    const newAmount = Number(event.target.value);
    const newFees = Number((newAmount * 0.01).toFixed(2));
    const newBalance = newAmount - newFees;

    setAmount(newAmount);
    setFees(newFees);
    setBalance(newBalance);
  };

  return (
    <section className="py-20 bg-[#111827] relative" id="pricing">
      <div className="container py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 items-center">
          <div className="flex flex-col gap-3 text-white">
            <h2 className="text-4xl font-semibold">Simple, Fair Pricing</h2>
            <div className="space-y-4 mt-4">
              <p>StreamPay only makes money when your business does.</p>
              <p>
                StreamPay fee 1.0% + Solana transaction fee on every transaction capped at $10.
              </p>
            </div>
          </div>
          <div className="pricing_box py-4 px-3 text-[#F1F3F5] rounded-lg">
            <div className="py-4 px-4">
              <form className="flex flex-col gap-4">
                <div>
                  <label className="font-bolder mb-3" htmlFor="c_pay">
                    Customers payment amount:
                  </label>
                  <div className="bg-white border border-gray-300 focus:border-gray-400 rounded-md flex items-center h-12 mt-2 px-3">
                    <select
                      className="px-3 py-2 bg-[#111827]/10 text-gray-700 rounded-full focus:border-none focus:outline-none  focus:ring-none text-sm"
                      value={crypto}
                      onChange={(event) => setCrypto(event.target.value)}
                    >
                      <option value="USDC">USDC</option>
                    </select>
                    <input
                      id="c_pay"
                      type="number"
                      className="block w-full h-12 px-4 py-2 text-gray-700 focus:border-none focus:outline-none focus:ring-none bg-transparent"
                      name="c_pay"
                      autoComplete="off"
                      pattern="[0-9]*"
                      value={amount}
                      onChange={handleAmountChange}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="w-full md:w-1/2">
                    <label className="font-bolder mb-3" htmlFor="y_get">
                      The amount you receive is:
                    </label>
                    <div className="bg-white border border-gray-300 focus:border-gray-400 rounded-md px-4 py-2 flex items-center h-12 mt-2">
                      <span className="text-gray-700">{crypto}</span>
                      <input
                        id="y_get"
                        type="text"
                        readOnly
                        value={balance.toFixed(2)}
                        className="block w-full h-12 px-4 text-gray-700 bg-transparent focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                        name="y_get"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="font-bolder mb-3" htmlFor="s_fees">
                      StreamPay fee rate: 1.0%
                    </label>
                    <div className="bg-white border border-gray-300 focus:border-gray-400 rounded-md px-4 py-2 flex items-center h-12 mt-2">
                      <span className="text-gray-700">{crypto}</span>
                      <input
                        id="s_fees"
                        type="text"
                        readOnly
                        value={fees.toFixed(2)}
                        className="block w-full h-12 px-4 text-gray-700 bg-transparent focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                        name="s_fees"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Image
        src=""
        width={120}
        height={120}
        alt=""
        className="absolute left-10 bottom-15 object-contain pointer-events-none w-auto h-auto"
      />
    </section>
  );
}
