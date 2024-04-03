'use client';

import React, { useState, useEffect } from 'react';
import { ButtonGroup } from '../component';

function TempermentForm() {
  // Initialize an array with null values for each ButtonGroup
  // Assuming we have 7 ButtonGroups as in your setup
  const [selections, setSelections] = useState(Array(7).fill(null));

  const [premium, setPremium] = useState(0);

  // Handle selection change updates a specific position in the array
  const handleSelectionChange = (index, value) => {
    const updatedSelections = [...selections];
    updatedSelections[index] = value;
    setSelections(updatedSelections);
  };

  useEffect(() => {
    // Filter out null values in case not all ButtonGroups have a selection
    const filteredSelections = selections.filter(Number);
    const total = filteredSelections.reduce((acc, value) => acc + value, 0);
    const avg = filteredSelections.length > 0 ? Math.round(total / filteredSelections.length) : 0;
    setPremium(avg);
  }, [selections]);

  return (
    <div className='flex flex-1 flex-col gap-3 p-3'>
      {/* Pass the index and handler function to each ButtonGroup */}
      <ButtonGroup title="Aggression Level" onSelectionChange={(value) => handleSelectionChange(0, value)} />
      <ButtonGroup title="Leash Manners" onSelectionChange={(value) => handleSelectionChange(1, value)} />
      <ButtonGroup title="Energy Level" onSelectionChange={(value) => handleSelectionChange(2, value)} />
      <ButtonGroup title="Recall Ability" onSelectionChange={(value) => handleSelectionChange(3, value)} />
      <ButtonGroup title="Socialization" onSelectionChange={(value) => handleSelectionChange(4, value)} />
      <ButtonGroup title="Prey Drive" onSelectionChange={(value) => handleSelectionChange(5, value)} />
      <ButtonGroup title="Size/Weight" onSelectionChange={(value) => handleSelectionChange(6, value)} />
      <div>Premium: {premium}</div>
    </div>
  );
}

export default TempermentForm;
