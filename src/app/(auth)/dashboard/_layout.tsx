'use client';

import { useState, useEffect } from 'react';
import Typography from '@/app/Typography/typograph';
import Loading from '@/app/loading';
import generateDateRanges from '../../util/SlotUtil/generateDateRanges';
import groupDataByDateRange from '../../util/SlotUtil/groupDataByDateRange';
import addSessionToSlots from '../../util/SlotUtil/addSessionToSlots';
import { Slot, SlotWithSession } from '../../types/Slot';
import { DateRange } from '../../types/DateRange';
import DayList from './DayList';
import DateButton from './DateButton';
import TabBar from './TabBar';


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
  
        const response = await fetch('http://localhost:8080/slots');
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
          <Loading classes='h-96 w-full mt-4' />
      );
    } else {
      return (
        <div className='flex flex-1 items-center justify-center h-screen'>
          <Typography variant='h6'>No data available</Typography>
        </div>
      );
    }
  }
  if (data) {
    console.log('Data retrieved:');
  }
  

const dateRanges = generateDateRanges(new Date(), 4);
  
const groupedData = groupDataByDateRange(data, dateRanges);

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
const filteredSlots = updatedGroupedData[selectedTabIndex]?.slots as SlotWithSession[] ?? [];

const morningSlots = filteredSlots.filter((slot) => slot.session === 'morning');
const afternoonSlots = filteredSlots.filter((slot) => slot.session === 'afternoon');

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
              <Typography variant="caption" className="text-gray-400">
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

return (
      <div className="flex flex-1 flex-col mt-3">
       <TabBar tabs={formattedTabRanges} onTabClick={handleTabClick} />

       <div className="flex flex-col flex-1 bg-white p-3"> 
      <Typography variant="h6" className='mb-2'>
          Morning
        </Typography>
        <DayList days={days} />
        <WeekView key="earlyMorningSlots" slots={earlyMorningSlots} />
        <WeekView key="lateMorningSlots" slots={lateMorningSlots} />
        <Typography variant="h6" className='mb-2'>
          Afternoon
        </Typography>
        <DayList days={days} />
        <WeekView key="earlyAfternoonSlots" slots={earlyAfternoonSlots} />
        <WeekView key="lateAfternoonSlots" slots={lateAfternoonSlots} />
      </div>
       </div>
);

};

export default BookingsSlots;







