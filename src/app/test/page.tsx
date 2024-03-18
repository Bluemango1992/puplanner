'use client'

import React from 'react';
import { startOfWeek, endOfWeek, add, format } from 'date-fns';
import Typography from '../Typography/typograph';

const weekSchedule = {
  "8 Apr": [
    {
      session: "Morning",
      times: [
        { slot: "8:00-9:30", price: 50 },
        { slot: "10:00-12:00", price: null }
      ]
    },
    {
      session: "Afternoon",
      times: [
        { slot: "13:00-14:30", price: 60 },
        { slot: "15:00-16:30", price: 80 }
      ]
    }
  ],
  "9 Apr": [
    {
      session: "Morning",
      times: [
        { slot: "8:00-9:30", price: 50 },
        { slot: "10:00-12:00", price: 70 }
      ]
    },
    {
      session: "Afternoon",
      times: [
        { slot: "13:00-14:30", price: 60 },
        { slot: "15:00-16:30", price: 80 }
      ]
    }
  ],
  "10 Apr": [
    {
      session: "Morning",
      times: [
        { slot: "8:00-9:30", price: 50 },
        { slot: "10:00-12:00", price: 70 }
      ]
    },
    {
      session: "Afternoon",
      times: [
        { slot: "13:00-14:30", price: 60 },
        { slot: "15:00-16:30", price: 80 }
      ]
    }
  ],
  "11 Apr": [
    {
      session: "Morning",
      times: [
        { slot: "8:00-9:30", price: 50 },
        { slot: "10:00-12:00", price: 70 }
      ]
    },
    {
      session: "Afternoon",
      times: [
        { slot: "13:00-14:30", price: 60 },
        { slot: "15:00-16:30", price: 80 }
      ]
    }
  ],
  "12 Apr": [
    {
      session: "Morning",
      times: [
        { slot: "8:00-9:30", price: 50 },
        { slot: "10:00-12:00", price: 70 }
      ]
    },
    {
      session: "Afternoon",
      times: [
        { slot: "13:00-14:30", price: 60 },
        { slot: "15:00-16:30", price: 80 }
      ]
    }
  ],
  "13 Apr": [
    {
      session: "Morning",
      times: [
        { slot: "8:00-9:30", price: 50 },
        { slot: "10:00-12:00", price: 70 }
      ]
    },
    {
      session: "Afternoon",
      times: [
        { slot: "13:00-14:30", price: 60 },
        { slot: "15:00-16:30", price: 80 }
      ]
    }
  ],
  "14 Apr": [
    {
      session: "Morning",
      times: [
        { slot: "8:00-9:30", price: 50 },
        { slot: "10:00-12:00", price: 70 }
      ]
    },
    {
      session: "Afternoon",
      times: [
        { slot: "13:00-14:30", price: 60 },
        { slot: "15:00-16:30", price: 80 }
      ]
    }
  ],
  "24 Mar": [
    {
      session: "Morning",
      times: [
        { slot: "8:00-9:30", price: 50 },
        { slot: "10:00-12:00", price: 70 }
      ]
    },
    {
      session: "Afternoon",
      times: [
        { slot: "13:00-14:30", price: null },
        { slot: "15:00-16:30", price: 80 }
      ]
    }
  ]
};

const Page = () => {
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });

  console.log(startDate);

  const labels = Array.from({ length: 4 }).map((_, i) => {
    const weekStart = add(startDate, { weeks: i });
    const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });
    const label = `${format(weekStart, 'd')} - ${format(weekEnd, 'd MMM')}`;
    return label;
  });


  const [selectedWeek, setSelectedWeek] = React.useState(labels[0]);


  return (
    <div className="flex flex-1 gap-4 flex-col">
      <TabBar labels={labels} onTabClick={setSelectedWeek} />
      <div className="flex flex-1 gap-4">
        <div className="flex flex-col min-w-40">
      <div className="flex flex-1 h-1/2 justify-start items-center">
        Morning
      </div>
      <div className="flex flex-1 h-1/2 justify-start items-center">
        Afternoon
      </div>
    </div>
      <GridTable week={selectedWeek} />
    </div>
    </div>
  );
};


export default Page;

type TabBarProps = {
  labels: string[]
  onTabClick: (label: string) => void
}

// TabBar Component (within Page component for context)
const TabBar = ({ labels, onTabClick }: TabBarProps) => {
  return (
    <div className="flex space-x-4">
      {labels.map((label, i) => (
        <button
          key={label}
          onClick={() => onTabClick(label)}
          className="p-2 w-full rounded-lg"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

type GridTableProps = {
  week: string
}


// GridTable Component
const GridTable = ({ week }: GridTableProps) => {

  // Function to parse label into start and end date
  const parseWeek = (weekLabel: string) => {
    // Assuming weekLabel format is '1 - 7 Apr'
    const [startDay, , endDay, month] = weekLabel.split(' ');
    const year = new Date().getFullYear(); // Assuming current year for simplicity
    const startDate = new Date(`${month} ${startDay}, ${year}`);
    const endDate = new Date(`${month} ${endDay}, ${year}`);
    return { startDate, endDate };
  };


  // Function to check if a date is within the selected week range
  const isDateInWeek = (dateString: string, { startDate, endDate }: { startDate: Date, endDate: Date }) => {
    const date = new Date(dateString);
    return date >= startDate && date <= endDate;
  };

  const { startDate, endDate } = parseWeek(week);

  // Filter weekSchedule keys (dates) to find ones that fall within the selected week
  const datesInWeek = Object.keys(weekSchedule).filter(dateString =>
    isDateInWeek(dateString + `, ${new Date().getFullYear()}`, { startDate, endDate })
  );

  // Handling case where no dates match the selected week
  if (datesInWeek.length === 0) {
    return <div className="flex h-full items-center justify-center border-1 border-orange-600">No dates found for the selected week</div>;
  }

  // Render your grid cells based on filtered dates
  return (
    <div className="grid grid-cols-7 gap-4 w-full">
      {datesInWeek.map((dateString, dateIndex) => (
        // You might want to adjust the div structure based on your layout needs
        <div key={dateIndex} className="flex flex-col gap-4">
          {/* Render Morning Sessions */}
          <div className="flex flex-col gap-4">
            <Typography variant="h4">{dateString}</Typography>
            {weekSchedule[dateString]
              .filter(session => session.session === "Morning")
              .flatMap(session =>
                session.times.map((timeSlot, timeIndex) => (
                  <div key={`morning-${timeIndex}`} className="flex flex-col gap-4">
                    <PriceCell price={timeSlot.price} />
                  </div>
                ))
              )}
          </div>

          {/* Render Afternoon Sessions */}
          <div>
            {weekSchedule[dateString]
              .filter(session => session.session === "Afternoon")
              .flatMap(session =>
                session.times.map((timeSlot, timeIndex) => (
                  <div key={`afternoon-${timeIndex}`} className="flex flex-col gap-4">
                    <PriceCell price={timeSlot.price} />
                  </div>
                ))
              )}
          </div>
        </div>
      ))}
    </div>
  );
};


const PriceCell = ({ price }: { price: number | null }) => {
  if (price === null) {
    return <UnavailableCell />;
  }

  return <div className="bg-white w-full p-3 mb-1 flex justify-center items-center">£{price}</div>;
}

const UnavailableCell = () => {
  return <div className=" w-full p-3 rounded-lg border h-2/3 border-gray-500">
    <Typography variant="body2">Unavailable</Typography>
  </div>;
}






