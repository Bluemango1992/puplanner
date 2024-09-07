"use client"

import Link from "next/link";
import React from "react";

function BookingReview() {
  const bookingDetails = {
    dog: "Max",
    owner: "John Doe",
    date: "2023-06-20",
    time: "14:00",
    duration: "45 minutes",
    location: "Central Park, New York",
    price: "$30",
    status: "Pending",
    instructions:
      "Max needs to be kept on leash at all times. He's friendly but gets excited easily.",
  };

  const handleCancel = () => {
    // Logic for canceling the booking
    console.log("Booking canceled");
  };

  const handleConfirm = () => {
    // Logic for confirming the booking
    console.log("Booking confirmed");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FFF7ED]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-orange-600 text-3xl font-bold mb-4">🐶 Booking Review</h1>
        <p className="text-gray-600 mb-6">Review your dog walking appointment</p>

        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-700 font-medium">🐕 Dog:</div>
            <div>{bookingDetails.dog}</div>

            <div className="text-gray-700 font-medium">🧑 Owner:</div>
            <div>{bookingDetails.owner}</div>

            <div className="text-gray-700 font-medium">📅 Date:</div>
            <div>{bookingDetails.date}</div>

            <div className="text-gray-700 font-medium">⏰ Time:</div>
            <div>{bookingDetails.time}</div>

            <div className="text-gray-700 font-medium">⏳ Duration:</div>
            <div>{bookingDetails.duration}</div>

            <div className="text-gray-700 font-medium">📍 Location:</div>
            <div>{bookingDetails.location}</div>

            <div className="text-gray-700 font-medium">💲 Price:</div>
            <div>{bookingDetails.price}</div>

            <div className="text-gray-700 font-medium">⚠️ Status:</div>
            <div className="text-yellow-500 font-semibold">{bookingDetails.status}</div>

            <div className="text-gray-700 font-medium">⚠️ Special Instructions:</div>
            <div className="col-span-2 bg-gray-100 p-3 rounded-md">
              {bookingDetails.instructions}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-red-100 text-red-500 py-2 px-4 rounded-md border border-red-300 hover:bg-red-200"
            onClick={handleCancel}
          >
            Cancel Booking
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            onClick={handleConfirm}
          >
            <Link href="/confirmation">Confirm Booking</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingReview;
