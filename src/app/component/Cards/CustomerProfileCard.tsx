import React from 'react';
import { ListItem } from '..';

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
      <ListItem title={name} />
      <div>
        <ListItem title="Email" caption={email} />
        <ListItem title="Phone" caption={phone} />
        <ListItem title="Preferred Communication Methods" caption={communicationPreferences.join(', ')} />
      </div>
        </div>


<div className="flex flex-1 flex-col">
      {petProfiles.map((pet, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md grid grid-cols-3 grid-rows-4">
            <ListItem title="Pet Name" caption={pet.petName} />
          <ListItem title="Breed" caption={pet.breed} />
          <ListItem title="Age" caption={pet.age.toString()} />
            <ListItem title="Size" caption={pet.size} />
            <ListItem title="Neutered" caption={pet.neutered ? 'Yes' : 'No'} />
            <ListItem title="Health Conditions" caption={pet.healthConditions.join(', ')} />
            <ListItem title="Behavioral Notes" caption={pet.behavioralNotes.join(', ')} />
            <ListItem title="Walk Frequency" caption={pet.walkFrequency} />
            <ListItem title="Walk Duration" caption={pet.walkDuration} />
            <ListItem title="Preferred Walk Time of Day" caption={pet.preferredWalkTimeOfDay} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CustomerProfileCard;