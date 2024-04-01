'use client';

import BookingsSlots from '@/app/(auth)/dashboard/_layout';
import Basket from './Basket';
import DogProfile from './DogProfile';
import { Slot } from '../../types/Slot';
import { useState } from 'react';

export default function Dashboard() {
  const [basket, setBasket] = useState<Slot[]>([]);
  const [defaultButton, setDefaultButton] = useState(true);

  const removeFromBasket = (slotId: number) => {
    setBasket(basket.filter(slot => slot.slot_id !== slotId));
  };

  const addToBasket = (slot: Slot) => {
    if (!basket.some(basketSlot => basketSlot.slot_id === slot.slot_id)) {
      setBasket(prevBasket => [...prevBasket, slot]);
      setDefaultButton(false);
    }
  };


  return (
      <div className="grid grid-cols-12 grid-rows-1 gap-4 mt-6">
          <div className="col-span-8"><DogProfile /><BookingsSlots basket={basket} addToBasket={addToBasket} /></div>
          <div className="col-span-4 col-start-9"><Basket slots={basket} removeFromBasket={removeFromBasket} /></div>
      </div>
  );
}

