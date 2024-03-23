'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { Button } from '@/app/component';
import Typography from '@/app/Typography/typograph';
import Loading from '@/app/loading';

interface Slot {
  slot_id: number;
  date: string;
  start_time: string;
  end_time: string;
  status: string;
  price: number;
  id: string;
}

interface User {
  user_id: number;
  name: string;
  email: string;
  phone: string;
  id: string;
}

const BookingsSlots = () => {

  const [data, setData] = useState<Slot[] | null>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [basket, setBasket] = useState<Slot[]>([]);
  const [defaultButton, setDefaultButton] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Add a delay of 2 seconds before fetching the data
        await new Promise(resolve => setTimeout(resolve, 2000));
  
        const response = await fetch('http://localhost:3000/slots');
        const responseData: Slot[] = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  if (!data) {
    if (loading) {
      return (
        <div className='flex flex-1 items-center justify-center h-full'>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className='flex flex-1 items-center justify-center h-screen'>
          <p>Error: Failed to fetch data.</p>
        </div>
      );
    }
  }
  if (data) {
    console.log('Data retrieved:');
  }

  type DateRange = {
    start: string;
    end: string;
  };
  
  type GenerateDateRangesProps = {
    startDate: Date;
    numberOfRanges: number;
  };
  
  const generateDateRanges = ({ startDate, numberOfRanges }: GenerateDateRangesProps): DateRange[] => {
    const dateRanges: DateRange[] = [];
  
    for (let i = 0; i < numberOfRanges; i++) {
      const rangeStartDate = new Date(startDate);
      rangeStartDate.setDate(rangeStartDate.getDate() + i * 7); // 7 days in a week
  
      const rangeEndDate = new Date(rangeStartDate);
      rangeEndDate.setDate(rangeEndDate.getDate() + 6); // 6 days in a week
  
      // Format dates as 'YYYY-MM-DD'
      const formattedStartDate = rangeStartDate.toISOString().split('T')[0];
      const formattedEndDate = rangeEndDate.toISOString().split('T')[0];
  
      dateRanges.push({ start: formattedStartDate, end: formattedEndDate });
    }
  
    return dateRanges;
  };

  const dateRanges = generateDateRanges({ startDate: new Date(), numberOfRanges: 4 });

  console.log('Date ranges:', dateRanges);

  // Runtime check for a single Slot object
function isValidSlot(slot: any): slot is Slot {
  return (
    typeof slot === 'object' &&
    typeof slot.slot_id === 'number' &&
    typeof slot.date === 'string' &&
    typeof slot.start_time === 'string' &&
    typeof slot.end_time === 'string' &&
    typeof slot.status === 'string' &&
    typeof slot.price === 'number'
  );
}

// Runtime check for an array of Slot objects
function isValidSlotsArray(slots: any[]): slots is Slot[] {
  return Array.isArray(slots) && slots.every(isValidSlot);
}


function groupDataByDateRange(data: any[], dateRanges: DateRange[]): { dateRange: DateRange; slots: Slot[] }[] {
  // Perform runtime check on the input data
  if (!isValidSlotsArray(data)) {
    console.error('Invalid data format received:', data);
    // Return an empty array or handle this scenario as needed
    return [];
  }
    const isWithinRange = (date: string, start: string, end: string) => {
      const d = new Date(date);
      const startDate = new Date(start);
      const endDate = new Date(end);
      return d >= startDate && d <= endDate;
    };
  
    // Check to ensure data is not null and is an array before proceeding
    if (!Array.isArray(data) || data.length === 0) {
      // Return an array matching the expected structure but empty
      return dateRanges.map(range => ({
        dateRange: { start: range.start, end: range.end },
        slots: []
      }));
    }
  
    // Directly iterate through each date range and group data accordingly
    const groupedByDateRange = dateRanges.map(range => {
      // Filter the server data to include only those within the current date range
      const filteredData = data.filter(dataItem =>
        isWithinRange(dataItem.date, range.start, range.end)
      );
  
      // Return an object that includes both the date range and the filtered data
      return {
        dateRange: { start: range.start, end: range.end },
        slots: filteredData
      };
    });
  
    return groupedByDateRange;
  }
  
  
  const groupedData = groupDataByDateRange(data, dateRanges);

  console.log('Grouped data:', groupedData);


  const addSessionToSlots = (groupedData: { dateRange: DateRange; slots: Slot[] }[]): { dateRange: DateRange; slots: SlotWithSession[] }[] => {
    // Clone groupedData to avoid mutating the original data
    const updatedData = JSON.parse(JSON.stringify(groupedData));
  
    updatedData.forEach((group: { slots: Slot[]; }) => {
      group.slots.forEach(slot => {
        // Assuming the format of start_time is "HH:MM"
        const startTimeHour = parseInt(slot.start_time.split(':')[0], 10);
  
        // Add 'session' property based on the start time
        if (startTimeHour < 12) {
          (slot as SlotWithSession).session = 'morning';
        } else {
          (slot as SlotWithSession).session = 'afternoon';
        }
      });
    });
  
    return updatedData;
  };

// Now, you can call addSessionToSlots with your groupedData to add the session key to each slot
const updatedGroupedData = addSessionToSlots(groupedData);

const formatDateRangeString = (dateRange: DateRange): string => {
  const startDate = new Date(dateRange.start);
  const endDate = new Date(dateRange.end);

  const formattedStartDate = startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const formattedEndDate = endDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

  return `${formattedStartDate} - ${formattedEndDate}`;
};

const formattedTabRanges = dateRanges.map(formatDateRangeString);

// Before accessing 'slots', ensure the data is available and not undefined
const filteredSlots = updatedGroupedData[selectedTabIndex]?.slots ?? [];

const morningSlots = filteredSlots.filter((slot: { session: string; }) => slot.session === 'morning');
const afternoonSlots = filteredSlots.filter((slot: { session: string; }) => slot.session === 'afternoon');

const sortSlotsByTime = (slots: any[], cutoffTime: string | number) => {
  const earlySlots: any[] = [];
  const lateSlots: any[] = [];

  slots.forEach(slot => {
    // Compare slot start time to cutoff time
    if (slot.start_time < cutoffTime) {
      earlySlots.push(slot);
    } else {
      lateSlots.push(slot);
    }
  });

  return { earlySlots, lateSlots };
};

// Use the function for both morning and afternoon slots with different cutoff times
const morningCutoff = "10:00";
const afternoonCutoff = "14:00";

const { earlySlots: earlyMorningSlots, lateSlots: lateMorningSlots } = sortSlotsByTime(morningSlots, morningCutoff);
const { earlySlots: earlyAfternoonSlots, lateSlots: lateAfternoonSlots } = sortSlotsByTime(afternoonSlots, afternoonCutoff);



const getDayOfWeek = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.getDay(); // Returns the day of the week (0 for Sunday, 1 for Monday, etc.)
};

interface SlotWithSession extends Slot {
  session: 'morning' | 'afternoon';
}

const WeekView = ({ slots }: { slots: SlotWithSession[] }) => {
  // Explicitly declare the type of week as an array of arrays of SlotWithSession objects
  const week: (SlotWithSession[])[] = Array(7).fill(null).map(() => []);

  if (slots) {
    slots.forEach(slot => {
      const dayOfWeek = getDayOfWeek(slot.date);
      // Now TypeScript knows that week[dayOfWeek] is an array of SlotWithSession objects,
      // so pushing slot into it should no longer cause an error.
      week[dayOfWeek].push(slot);
    });
  }
  return (
    <div className="flex flex-1">
      {week.map((daySlots, index) => (
        <div key={index} className="flex flex-1">
          {daySlots.length > 0 ? (
            daySlots.map(slot => (
              <DateButton key={slot.slot_id} slot={slot} onAddToBasket={addToBasket} basket={basket} />
            ))
          ) : (
            <div className="flex flex-1 items-center justify-center border border-dotted h-11">
              <Typography variant="body2" className="text-gray-400">
                No Slots
              </Typography>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const handleTabClick = (dateRangeIndex: number) => {
  setSelectedTabIndex(dateRangeIndex);
}

// Inside BookingsSlots component

const addToBasket = (slot: Slot) => {
  // Check if slot is already in the basket to prevent duplicates
  if (!basket.some(basketSlot => basketSlot.slot_id === slot.slot_id)) {
    setBasket(prevBasket => [...prevBasket, slot]);

    // Toggle defaultButton when a slot is added to the basket
    setDefaultButton(false);
  }
};

const removeFromBasket = (slotId: number) => {
  setBasket(basket.filter(slot => slot.slot_id !== slotId));
};





return (
  <>
    <div className="flex flex-1 gap-6 flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
       <TabBar tabs={formattedTabRanges} onTabClick={handleTabClick} />
       
       <div className="flex flex-col flex-1">
        
          <Typography variant="h6" className='mb-2'>
          Morning
        </Typography>
        <div className="flex flex-1">
       {days.map((day) => (
        <div className="flex flex-1 items-center justify-center h-11" key={day}>
          <Typography variant="body2">
              {day} 
          </Typography>
        </div>  
          ))}
        </div>
        <WeekView key="earlyMorningSlots" slots={earlyMorningSlots} />
        <WeekView key="lateMorningSlots" slots={lateMorningSlots} />
        <Typography variant="h6" className='mb-2'>
          Afternoon
        </Typography>
        <div className="flex flex-1">
       {days.map((day) => (
        <div className="flex flex-1 items-center justify-center h-11" key={day}>
          <Typography variant="body2">
              {day} 
          </Typography>
        </div>  
          ))}
        </div>
        <WeekView key="earlyAfternoonSlots" slots={earlyAfternoonSlots} />
        <WeekView key="lateAfternoonSlots" slots={lateAfternoonSlots} />
      </div>

       </div>
       <Basket slots={basket} onRemove={removeFromBasket} />       
      </div>
      </>
);

};

const Basket = ({ slots, onRemove }: { slots: Slot[], onRemove: (slotId: number) => void }) => {

  const [bookingMessage, setBookingMessage] = useState<string | null>(null); // null when no message is to be displayed
  const [isBookingSuccess, setIsBookingSuccess] = useState<boolean | null>(null); // true for success, false for failure, null when no booking has been attempted

  const handleBookNow = async () => {
    try {
      // Simulate booking logic
      const bookings = slots.map(slot => ({
        slot_id: slot.slot_id,
        user_id: 1, // assuming a static user_id for the example
        date: slot.date,
        start_time: slot.start_time,
        price: slot.price,
      }));

      const response = await fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookings),
      });

      if (!response.ok) {
        throw new Error('Failed to book the slot. Please try again.');
      }

      const data = await response.json();

      console.log('Booking successful:', data);

      setIsBookingSuccess(true);
      setBookingMessage('Booking successful!');
      // Optionally, clear the basket after successful booking
      // setBasket([]);
    } catch (error) {
      console.error('Error booking slots:', error);
      setIsBookingSuccess(false);
      setBookingMessage('Booking failed. Please try again.');
    }
    
  };




  return (
    <div className="flex flex-col md:w-96">
      <Typography variant="h6">
        Basket
      </Typography>
      <div className="flex flex-1 flex-col">
        {slots.map(slot => (
          <div key={slot.slot_id} className="flex flex-1 items-center justify-between p-3 h-11 text-xs border-b border-slate-200">
            <span>{slot.date} - {slot.start_time}</span>
            <button className="text-red-500" onClick={() => onRemove(slot.slot_id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-center justify-between p-3 h-11 text-xs">
        <Typography variant="h6">
          Total
        </Typography>
        <Typography variant="h6">
          £{slots.reduce((total, slot) => total + slot.price, 0)}
        </Typography>
      
      </div>
      <Button onClick={handleBookNow} variant="secondary" size="medium" disabled={slots.length === 0}>
        Book Now
      </Button> 
      <div className="flex flex-1 items-center justify-between h-11">
      {bookingMessage && (
        <div className={`text-xs ${isBookingSuccess ? 'text-green-600' : 'text-red-600'}`}>
          {bookingMessage}
        </div>
      )}
      </div>
    </div>
  );
};

interface SlotWithSession extends Slot {
  session: 'morning' | 'afternoon';
}

const DateButton = ({ slot, onAddToBasket, basket }: { slot: SlotWithSession, onAddToBasket: (slot: Slot) => void, basket: Slot[] }) => {
  // Check if the slot is in the basket to determine if it is "selected"
  const isSelected = basket.some(basketSlot => basketSlot.slot_id === slot.slot_id);

  const handleClick = () => {
    onAddToBasket(slot); // Adjust this function as needed to toggle the slot in the basket
  }

  return (
    <button
      className={`flex flex-1 items-center justify-center h-11 text-xs ${isSelected ? 'bg-slate-300 text-slate-800' : 'bg-slate-100 hover:bg-slate-200'}`}
      onClick={handleClick}
    >
      £{slot.price}
    </button>
  );
};

const TabBar = ({
  tabs = ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  onTabClick = () => {}
}: {
  tabs?: string[],
  onTabClick?: (index: number) => void
}) => (
  <div className="flex flex-1 justify-around">
    {tabs.map((tab, index) => (
      <button
        key={index}
        className="flex items-center justify-center p-3 bg-slate-100 rounded-t-md text-xs hover:bg-slate-200 active:bg-slate-300"
        onClick={() => onTabClick(index)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default BookingsSlots;
