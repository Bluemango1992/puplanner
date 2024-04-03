import React from 'react';
import Typography from '../../Typography/typograph';

const TimeSlot = ({ slot, onclick }) => {

  return (
      <div className="flex w-full items-center justify-center h-11 border border-slate-300">
          {slot && slot.availability > 0 ? (
              <button onClick={() => onclick(slot)} className="w-full h-full">
                  <Typography variant="body1">£{slot.price}</Typography>
              </button>
          ) : (
              <Typography variant="body1" className="text-center">x</Typography>
          )}
      </div>
  );
};

export default TimeSlot;
