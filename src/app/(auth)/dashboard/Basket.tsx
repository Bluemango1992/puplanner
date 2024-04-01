import React from 'react';
import { Button } from '../../component';
import Typography from '../../Typography/typograph';
import { Slot } from '../../types/Slot';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


// Assuming the removeFromBasket function is passed as a prop from the Dashboard component
export default function Basket({ slots, removeFromBasket }: { slots: Slot[]; removeFromBasket: (slotId: number) => void; }) {
    const router = useRouter();
  
    const [bookingMessage, setBookingMessage] = useState<string | null>(null); // null when no message is to be displayed
    const [isBookingSuccess, setIsBookingSuccess] = useState<boolean | null>(null); // true for success, false for failure, null when no booking has been attempted

    const handleProceedToConfirmation = () => {
      localStorage.setItem('basket', JSON.stringify(slots));
      router.push('/dashboard/confirm');
    };
    
  
    return (
      <div className="flex flex-col bg-white p-3">
        <Typography variant="h6">Basket</Typography>
        <div className="flex flex-1 flex-col overflow-y-auto">
          {slots.map(slot => (
            <div key={slot.slot_id} className="flex flex-1 items-center justify-between p-3 h-11 text-xs border-b border-slate-200">
              <span>{slot.date} - {slot.start_time}</span>
              <button className="text-red-500" onClick={() => removeFromBasket(slot.slot_id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-between p-3 h-11 text-xs">
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">£{slots.reduce((total, slot) => total + slot.price, 0)}</Typography>
        </div>
        <Button onClick={handleProceedToConfirmation} variant="secondary" size="medium" disabled={slots.length === 0}>Book Now</Button> 
        {bookingMessage && (
          <div className={`flex flex-1 items-center justify-between h-11 text-xs ${isBookingSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {bookingMessage}
          </div>
        )}
      </div>
    );
}