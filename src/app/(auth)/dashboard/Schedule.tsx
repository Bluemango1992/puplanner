import React, { useState, useEffect } from 'react';
import TabBar from './TabBar';
import { Grid } from './Grid';

const Schedule = ({ data, selectedDogs, onClick }) => {

    const [currentDateRange, setCurrentDateRange] = useState(data.slots[0]);
    const [gridSlots, setGridSlots] = useState(Array.from({ length: 28 }, () => null));

    const timeToRowIndex = (timeSlot = "") => {
      const startTime = 9; // The grid starts at 9:00 AM
      const [start] = timeSlot.split(' - '); // Split the timeSlot into start and end times
      const [hour, minute] = start.split(':').map(Number); // Parse hour and minute from the start time
      
      // Since there's an hour per session with a half-hour interval,
      // the index increments every 1.5 hours (90 minutes) from the start time.
      return ((hour - startTime) * 2) + (minute / 30);
    };

    useEffect(() => {
        const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
        // Assuming 4 time slots per day over 7 days
        let initialGridSlots = Array.from({ length: 28 }, () => null); 
      
        const currentDateRangeData = data.slots.find(slot => slot.dateRange === currentDateRange.dateRange);
        
        if (currentDateRangeData) {
          Object.keys(currentDateRangeData.days).forEach(day => {
            const dayIndex = daysOfWeek.indexOf(day);
            currentDateRangeData.days[day].forEach(slot => {
              const rowIndex = timeToRowIndex(slot.timeSlot);
              const gridIndex = dayIndex * 4 + rowIndex; 
      
              // Calculate the sum of prices for all selected dogs
              const totalDogPrices = selectedDogs.reduce((sum, dog) => sum + dog.price, 0);
      
              // Apply the total price to the slot, replacing basePrice with totalDogPrices
              initialGridSlots[gridIndex] = { 
                ...slot, 
                price: totalDogPrices // Use the sum of selected dogs' prices for the slot
              };
            });
          });
        }
      
        setGridSlots(initialGridSlots); 
      }, [selectedDogs, currentDateRange, data.slots]);      


    const daysOfWeek = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const timeSlots = ["9:00 - 9:30", "10:30 - 11:00", "12:00 - 12:30", "13:30 - 14:00"];

    console.log(data.slots);

    return (
      <div className="flex flex-1 flex-col mb-3">
      <TabBar
        dateRanges={data.slots}
        currentDateRange={currentDateRange}
        setCurrentDateRange={setCurrentDateRange}
      />
      <div className="flex bg-white p-3">
          <div className="flex flex-col mt-11 mr-3 justify-around">
           {timeSlots.map((timeSlot, index) => (
              <div className='text-sm' key={index}>{timeSlot}</div>
          ))}
          </div>
          <div className="flex flex-1 flex-col">
          <div className="flex justify-between items-center">
          {daysOfWeek.map((day, index) => (
              <div className='flex flex-1  justify-center items-center h-11 gap-4 text-sm' key={index}>{day}</div>
          ))}
          </div>
        <Grid slots={gridSlots} onClick={onClick} />
        </div>
      </div>
      </div>
    );
  };

export default Schedule;