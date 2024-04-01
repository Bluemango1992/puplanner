'use client';

import { useEffect, useState } from 'react';
import postBooking from '../../../api/postBooking';
import Link from 'next/link';

const ConfirmationPage = () => {
  const [slots, setSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading indication
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); // New state to track if booking is confirmed

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket') || '[]');
    console.log('Basket:', basket);
    setSlots(basket);
  }, []);

  const handleConfirmBooking = async () => {
    setIsLoading(true); // Indicate loading
    try {
      const data = await postBooking(slots);
      console.log('Successfully booked:', data);
      setIsBookingConfirmed(true); // Set booking confirmed state to true
      localStorage.removeItem('basket'); // Clear the basket from local storage
      setSlots([]); // Clear the slots to reflect the successful booking
    } catch (error) {
      console.error('Booking failed:', error);
      // Handle error (e.g., show error message)
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  if (isBookingConfirmed) {
    // Render the confirmation message if the booking was successful
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold text-green-600">Booking Confirmed!</h1>
        <p className="text-md text-gray-500 mt-2">Your booking has been successfully confirmed.</p>
        <Link href="/dashboard">
            <a className="text-blue-500 hover:underline">Back to Dashboard</a>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-gray-800">Booking Confirmation</h1>
        <p className="text-md text-gray-500 mt-2">Review your booking slots below.</p>
        
      </div>
      {slots.length > 0 ? (
        <div className="space-y-4">
          {slots.map((slot, index) => (
            <div key={index} className="p-4 shadow-md rounded-lg bg-white">
              <h2 className="text-lg font-semibold text-gray-800">Slot #{index + 1}</h2>
              <p className="text-gray-600">Date: {slot.date}</p>
              <p className="text-gray-600">Start Time: {slot.start_time}</p>
              {slot.description && <p className="text-gray-600">Description: {slot.description}</p>}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center my-10">
          <p className="text-gray-600">No booking slots found. Please make a booking first.</p>
        </div>
      )}
      <div className="text-center mt-10">
        <button
          onClick={handleConfirmBooking}
          disabled={isLoading} // Disable the button while loading
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Processing...' : 'Confirm Booking'} 
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;