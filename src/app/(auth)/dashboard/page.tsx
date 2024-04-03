'use client';

import React, { useState, useEffect } from 'react';
import Basket from './Basket';
import { Slot } from '../../types/Slot';
import { dogs, users, userId, basePrice, data, myLocation } from './data';
import { calculateDistance } from '../../util/CalculateDistance';
import { calculatePriceAdjustment } from '../../util/CalculatePriceAdjustment/CalculatePriceAdjustment';
import { DogCard } from '../../component/Cards';
import Schedule from './Schedule';
import Loading from '../../loading';
import Typography from '@/app/Typography/typograph';
import { Button, Modal, Placeholder } from '@/app/component';
import AddDog from '@/app/forms/AddDog';


const BookingsSlots = () => {

const [selectedDogs , setSelectedDogs] = useState([]);
const [userDogs, setUserDogs] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isModalOpen, setIsModalOpen] = useState(false);
const [basket, setBasket] = useState<Slot[]>([]);



useEffect(() => {
 
  const filteredAndCalculatedDogs = dogs
    .filter(dog => dog.userId === userId)
    .map(dog => {
      const priceAdjustment = calculatePriceAdjustment(dog.Premium);
      const user = users[dog.userId];
      const distance = calculateDistance(myLocation, user.location);
      return { ...dog, price: priceAdjustment, userDistance: distance };
    });

  setUserDogs(filteredAndCalculatedDogs);
  setIsLoading(false);
}, [userId, dogs]);

if (isLoading) {
  return <Loading classes='h-[30vh] w-full mt-4' />;
}

const removeFromBasket = (slotId) => {
  // Filter the basket to keep only the slots that do not match the provided slotId
  const updatedBasket = basket.filter(slot => slot.slotId !== slotId);
  setBasket(updatedBasket);
};


const addToBasket = (selectedSlot) => {
  const isSlotAlreadyAdded = basket.some(slot => slot.slotId === selectedSlot.slotId);
  if (!isSlotAlreadyAdded) {
    setBasket([...basket, selectedSlot]);
  }
};

console.log("Current basket:", basket);

return (
  <div className="flex flex-col mt-6">
    <div className="flex gap-4 items-center">
    {userDogs.length > 0 ? (
      userDogs.map(dog => <DogCard dog={dog} selectedDogs={selectedDogs} setSelectedDogs={setSelectedDogs} />)
    ) : (
      <>
      <Placeholder classes="h-1/2">
        <Typography variant="caption">It would be great if you could include a dog! Having a canine companion can really liven things up.</Typography>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>Add Dog</Button>
      </Placeholder>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} title="About Your Furry Friend">
          <AddDog />
        </Modal>
      )}
    </>
    )}
    </div>
    {selectedDogs.length > 0 ? (
      <div className="flex flex-col">
          <Schedule data={data} selectedDogs={selectedDogs} onClick={addToBasket} />
      </div>
    ) : (
      userDogs.length > 0 && 
      <Placeholder classes="h-1/2 mb-3">
      <Typography variant='subtitle2'>Please select dogs to start booking.</Typography>
      </Placeholder>
    )}
    <Basket slots={basket} removeFromBasket={removeFromBasket} />
  </div>
);
}

export default BookingsSlots;
