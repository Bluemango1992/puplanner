'use client';

import BookingsSlots from '@/app/(auth)/dashboard/_layout';
import Basket from './Basket';
import DogProfile from './DogProfile';

export default function Dashboard() {
  return (
      <div className="grid grid-cols-12 grid-rows-1 gap-4 mt-6">
          <div className="col-span-8"><DogProfile /><BookingsSlots /></div>
          <div className="col-span-4 col-start-9"><Basket slots={[]} /></div>
      </div>
  );
}

