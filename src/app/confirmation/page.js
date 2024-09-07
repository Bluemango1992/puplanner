import React from "react";

function PaymentConfirmation({ onConfirm, onCancel, amount }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FFF7ED]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-orange-600 text-2xl font-bold mb-4">Confirm Payment</h1>
        <p className="text-gray-600 mb-6">
          Are you sure you want to make a payment of{" "}
          <span className="text-green-500 font-bold">${amount}</span>?
        </p>

        <div className="flex justify-between">
          <button
            className="bg-red-100 text-red-500 py-2 px-4 rounded-md border border-red-300 hover:bg-red-200"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmation;
