'use client';

import React, { useState } from 'react'
import ReactCalendar from 'react-calendar'
import { add, format } from 'date-fns';
import './Calendar.css'
import Button from '@mui/material/Button';
import { CLOSING_TIMES, INTERVAL, OPENING_TIMES } from '@/app/constants/config';


interface CalendarProps {
    
}

type DateType = {
  justDate: Date | null
  justTime: Date | null
}

const Calendar: React.FC<CalendarProps> = () => {

  const [date, setDate] = useState<DateType>({
    justDate: null,
    justTime: null,
  })

  console.log(date.justTime)

  const getTimes = () => {
    if(!date.justDate) return

    const { justDate } = date

    const beginning = add(justDate, { hours: OPENING_TIMES})
    const ending = add(justDate, { hours: CLOSING_TIMES})
    const interval = INTERVAL

    const times = []
    for(let i = beginning; i <= ending; i = add(i, { minutes: interval })) {
      times.push(i)
    }

    return times
  }

  const times = getTimes()


  return (
    <div>
            {date.justDate ? (
        <div className='flex flex-wrap gap-4'>
          {times?.map((time, i) => (
            <div key={'time-' + i} className='rounded-md bg-slate-100 p-2'>
              <Button onClick={() => setDate((prev) => ({ ...prev, justTime: time }))}>
                {format(time, 'kk:mm')}
              </Button>
            </div>
          ))
          }
        </div>
        ) : (
          <ReactCalendar
            minDate={new Date()}
            className='react-calendar'
            view='month'
            onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
          />
        )}
    </div>
  );
};

export default Calendar
