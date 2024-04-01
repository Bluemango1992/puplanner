'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { format, formatISO, isBefore, parse } from 'date-fns';
import { useUser } from "@clerk/clerk-react";
import { categories, now, OPENING_HOURS_INTERVAL } from '../../constants/config';
import { getOpeningTimes, roundToNearestMinutes } from '../../util/helper';
import type { DateTime } from '../../util/types';
import './Calendar.css';
import ContactDetailsForm from './ContactDetailsForm';


const DynamicCalendar = dynamic(() => import('react-calendar'), { ssr: false });

type CalendarComponentProps = {
    days: Record<string, any>;
    closedDays: string[];
    };

const CalendarComponent = ({ days, closedDays }: CalendarComponentProps) => {

    const { user } = useUser();
  const [date, setDate] = useState<DateTime>({ justDate: null, dateTime: null });
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  useEffect(() => {
    if (date.dateTime) {
      setIsContactFormVisible(true); // Show contact form after date and time selection
    }
  }, [date.dateTime]);

  const times = date.justDate && getOpeningTimes(date.justDate, days);

  return (
    <div className='flex flex-col items-center justify-center'>
      {isContactFormVisible ? (
        <ContactDetailsForm user={user} date={date} />
      ) : date.justDate ? (
        <div className='flex max-w-lg flex-wrap gap-4'>
          {times?.map((time, i) => (
            <div className='rounded-sm bg-gray-100 p-2' key={`time-${i}`}>
              <button onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))} type='button'>
                {format(time, 'kk:mm')}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <DynamicCalendar
          minDate={now}
          className='REACT-CALENDAR p-2'
          view='month'
          tileDisabled={({ date }) => closedDays.includes(formatISO(date))}
          onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
        />
      )}
    </div>
  );
};

export default CalendarComponent;

