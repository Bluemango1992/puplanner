import React from 'react';
import Typography from '@/app/Typography/typograph';

type DayListProps = {
    days: string[];
  };  

export default function DayList({ days }: DayListProps) {
    return (
      <div className="flex flex-1">
        {days.map((day) => (
          <div className="flex flex-1 items-center justify-center h-11" key={day}>
            <Typography variant="body2">
              {day} 
            </Typography>
          </div>  
        ))}
      </div>
    );
  };