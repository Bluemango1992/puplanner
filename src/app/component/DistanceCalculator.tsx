'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Typography from '../Typography/typograph';
import { Button, TextField } from '../component';

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

const DistanceCalculator = () => {
  const [postcode, setPostcode] = useState('');
  const [message, setMessage] = useState('');

  const fixedLatitude = 51.5007;
  const fixedLongitude = -2.5401;
  const navigate = useRouter();

  const handlePostcodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
      const data = await response.json();
      if (data.status === 200) {
        const userLatitude = data.result.latitude;
        const userLongitude = data.result.longitude;
        const calculatedDistance = calculateDistance(
          userLatitude,
          userLongitude,
          fixedLatitude,
          fixedLongitude
        );
        if (calculatedDistance <= 9.65606) {
          // 6 miles in kilometers
          setMessage('You are eligible for the service.');
            navigate.push('/sign-up');
        } else {
          setMessage('You are not eligible for the service.');
        }
      } else {
        alert('Postcode not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching postcode data:', error);
      alert('Failed to fetch postcode data.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-12 max-w-[744px]">
      <Typography variant='h2' className='text-start mb-4'>Peace of Mind for Your Pooch, Convenience for You.</Typography>
      <form onSubmit={handlePostcodeSubmit} className="mb-6">
        <div className="flex flex-col mb-4">
          <Typography variant='body1' className='text-start mb-4'>
            Enter a postcode to see what we can do for you
        </Typography>
        <div className="flex flex-col gap-4 ">
          <TextField
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Enter UK postcode"
          />
        <Button variant="secondary" type="submit">
          Let us walk your pup!
        </Button>
        </div>
        <Typography variant='body2' className='text-start mt-4'>
          Already a member? <a href="/sign-in" className="text-blue-500">Sign in</a>
        </Typography>
        </div>
      </form>
      {message && (
        <p className={`text-md font-semibold tracking-wide ${message.includes('eligible') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default DistanceCalculator;
