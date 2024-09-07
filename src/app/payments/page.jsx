"use client"

import Link from "next/link";
import React from "react";
import Button from "../Button";

function Payments() {
  const currentBalance = 0.0;

  const paymentHistory = [
    {
      date: "2023-06-01",
      description: "Dog walking service - May",
      amount: "$150.00",
      type: "debit",
    },
    {
      date: "2023-06-15",
      description: "Payment received",
      amount: "$150.00",
      type: "credit",
    },
    {
      date: "2023-07-01",
      description: "Dog walking service - June",
      amount: "$180.00",
      type: "debit",
    },
    {
      date: "2023-07-10",
      description: "Late fee",
      amount: "$10.00",
      type: "debit",
    },
    {
      date: "2023-07-20",
      description: "Payment received",
      amount: "$190.00",
      type: "credit",
    },
  ];

  const handleMakePayment = () => {
    console.log("Make a payment");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFF7ED]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mb-8">
        {/* Current Balance Section */}
        <h1 className="text-orange-600 text-3xl font-bold mb-4">💲 Payments</h1>
        <p className="text-gray-600 mb-6">
          Manage your payments and view transaction history
        </p>

        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <div className="text-gray-700 font-medium">Current Balance:</div>
          <div className="text-green-500 text-2xl font-bold">${currentBalance.toFixed(2)}</div>
        </div>

     
        <Button onClick={handleMakePayment} href={"/confirmation"}>Make a Payment</Button>
        </div>

      {/* Payment History Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-orange-600 text-2xl font-bold mb-4">📅 Payment History</h2>

        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="pb-4">Date</th>
              <th className="pb-4">Description</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Type</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((transaction, index) => (
              <tr key={index} className="border-t">
                <td className="py-4">{transaction.date}</td>
                <td className="py-4">{transaction.description}</td>
                <td className="py-4">{transaction.amount}</td>
                <td className="py-4">
                  {transaction.type === "credit" ? (
                    <span className="text-green-500">⬆️</span>
                  ) : (
                    <span className="text-red-500">⬇️</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments;