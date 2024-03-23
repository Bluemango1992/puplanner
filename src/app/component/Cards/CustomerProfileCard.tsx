import React from 'react';

type CustomerProfileCardProps = {
    customerData: {
        name: string;
        email: string;
        phone: string;
        communicationPreferences: string[];
        petProfiles: {
        petName: string;
        breed: string;
        age: number;
        size: string;
        neutered: boolean;
        healthConditions: string[];
        behavioralNotes: string[];
        walkFrequency: string;
        walkDuration: string;
        preferredWalkTimeOfDay: string;
        }[];
    }[];
    };



const CustomerProfileCard = ({ customerData }: CustomerProfileCardProps) => {
    
  const { name, email, phone, communicationPreferences, petProfiles } = customerData[0];

  return (
    <div className="flex flex-1 gap-6 flex-col md:flex-row">
            <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Customer Profile</h2>
      <div>
        <h3 className="text-xl font-semibold text-slate-700">{name}</h3>
        <p className="text-slate-600">Email: {email}</p>
        <p className="text-slate-600">Phone: {phone}</p>
        <p className="text-slate-600">
          Preferred Communication Methods: {communicationPreferences.join(', ')}
        </p>
      </div>
        </div>


<div className="flex flex-1 flex-col">
      <h3 className="text-xl font-semibold text-slate-700">Pet Profiles</h3>
      {petProfiles.map((pet, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow-md mt-4 grid grid-cols-2 grid-rows-6 gap-2">
          <h4 className="text-lg font-semibold text-orange-600">{pet.petName}</h4>
          <p className="text-slate-600">Breed: {pet.breed}</p>
          <p className="text-slate-600">Age: {pet.age}</p>
          <p className="text-slate-600">Size: {pet.size}</p>
          <p className="text-slate-600">Neutered: {pet.neutered ? 'Yes' : 'No'}</p>
          <p className="text-slate-600">Health Conditions: {pet.healthConditions.join(', ')}</p>
          <p className="text-slate-600">Behavioral Notes: {pet.behavioralNotes.join(', ')}</p>
          <p className="text-slate-600">Walk Frequency: {pet.walkFrequency}</p>
          <p className="text-slate-600">Walk Duration: {pet.walkDuration}</p>
          <p className="text-slate-600">

            Preferred Walk Time of Day: {pet.preferredWalkTimeOfDay}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CustomerProfileCard;