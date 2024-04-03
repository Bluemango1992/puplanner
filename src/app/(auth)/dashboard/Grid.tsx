import React from 'react';
import TimeSlot from './TimeSlot';

export const Grid = ({ slots, onClick }) => {
    // Calculate number of columns and rows based on the slots length.
    const columns = 7; // Number of days in a week
    const rows = Math.ceil(slots.length / columns);
  
    return (
      <div 
        className="grid gap-2"
        style={{
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridAutoFlow: 'column'
        }}
      >
        {slots.map((slot, index) => (
          <TimeSlot key={index} slot={slot} onclick={onClick} />
        ))}
      </div>
    );
  };
