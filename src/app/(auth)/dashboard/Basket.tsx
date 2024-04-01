import { useState } from 'react';
import { Button } from '../../component';
import Typography from '../../Typography/typograph';

type Slot = {
    slot_id: number;
    date: string;
    start_time: string;
    price: number;
  };

export default function Basket({ slots }: { slots: Slot[] }) {
  
    const [bookingMessage, setBookingMessage] = useState<string | null>(null); // null when no message is to be displayed
    const [isBookingSuccess, setIsBookingSuccess] = useState<boolean | null>(null); // true for success, false for failure, null when no booking has been attempted
    const [basket, setBasket] = useState<Slot[]>(slots);
  
    const removeFromBasket = (slotId: number) => {
      setBasket(basket.filter(slot => slot.slot_id !== slotId));
    };
  
    const handleBookNow = async () => {
      try {
        // Simulate booking logic
        const bookings = slots.map(slot => ({
          slot_id: slot.slot_id,
          user_id: 1, // assuming a static user_id for the example
          date: slot.date,
          start_time: slot.start_time,
          price: slot.price,
        }));
  
        const response = await fetch('http://localhost:3000/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookings),
        });
  
        if (!response.ok) {
          throw new Error('Failed to book the slot. Please try again.');
        }
  
        const data = await response.json();
  
        console.log('Booking successful:', data);
  
        setIsBookingSuccess(true);
        setBookingMessage('Booking successful!');
        // Optionally, clear the basket after successful booking
        // setBasket([]);
      } catch (error) {
        console.error('Error booking slots:', error);
        setIsBookingSuccess(false);
        setBookingMessage('Booking failed. Please try again.');
      }
      
    };
  
  
    return (
      <div className="flex flex-col bg-white p-3">
        <Typography variant="h6">
          Basket
        </Typography>
        <div className="flex flex-1 flex-col min-h-40 overflow-y-auto">
          {slots.map(slot => (
            <div key={slot.slot_id} className="flex flex-1 items-center justify-between p-3 h-11 text-xs border-b border-slate-200">
              <span>{slot.date} - {slot.start_time}</span>
              <button className="text-red-500" onClick={() => removeFromBasket(slot.slot_id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-between p-3 h-11 text-xs">
          <Typography variant="h6">
            Total
          </Typography>
          <Typography variant="h6">
            £{slots.reduce((total, slot) => total + slot.price, 0)}
          </Typography>
        
        </div>
        <Button onClick={handleBookNow} variant="secondary" size="medium" disabled={slots.length === 0}>
          Book Now
        </Button> 
        <div className="flex flex-1 items-center justify-between h-11">
        {bookingMessage && (
          <div className={`text-xs ${isBookingSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {bookingMessage}
          </div>
        )}
        </div>
      </div>
    );
  };