import React, { useState } from 'react';
import { TextField, Button } from '../component';
import { useUser } from "@clerk/clerk-react";
import { Dog } from '../types/Dog';

export default function AddDog() {
  const { user } = useUser();
  const userId = user?.id;

  const [dogName, setDogName] = useState('');
  const [size, setSize] = useState('');
  const [temperament, setTemperament] = useState('');
  const [healthStatus, setHealthStatus] = useState('');

  const [dogNameError, setDogNameError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  // Assuming temperament and health status are required, adjust as needed
  const [temperamentError, setTemperamentError] = useState(false);
  const [healthStatusError, setHealthStatusError] = useState(false);

  const validateForm = () => {
    let isValid = true;
    setDogNameError(!dogName);
    setSizeError(!size);
    setTemperamentError(!temperament);
    setHealthStatusError(!healthStatus);

    isValid = Boolean(dogName) && Boolean(size) && Boolean(temperament) && Boolean(healthStatus) && isValid;

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) {
      console.error("User is not authenticated.");
      return;
    }

    if (validateForm()) {
      const dogData: Dog = {
        _id: '', 
        Name: dogName,
        Size: size,
        Temperament: temperament,
        HealthStatus: healthStatus,
      };

      try {
        console.log('Dog added successfully:');
      } catch (error) {
        console.error('Error adding dog:', error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField 
          error={dogNameError}
          helperText={dogNameError ? "Dog's name is required" : ''}
          placeholder="Dog's Name" 
          fullWidth 
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
        />
        <TextField 
          error={sizeError}
          helperText={sizeError ? "Size is required" : ''}
          placeholder="Size" 
          fullWidth 
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <TextField 
          error={temperamentError}
          helperText={temperamentError ? "Temperament is required" : ''}
          placeholder="Temperament" 
          fullWidth 
          value={temperament}
          onChange={(e) => setTemperament(e.target.value)}
        />
        <TextField 
          error={healthStatusError}
          helperText={healthStatusError ? "Health Status is required" : ''}
          placeholder="Health Status" 
          fullWidth 
          value={healthStatus}
          onChange={(e) => setHealthStatus(e.target.value)}
        />
        <div className="mt-6">
          <Button variant="secondary" size='medium' type="submit">Add Dog</Button>
        </div>
      </form>
    </>
  );
}
