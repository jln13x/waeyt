import { WeekDays } from 'components/date-range';
import { Day } from 'components/date-range/Day';
import { differenceInMonths } from 'date-fns';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

interface MonthProps {
  dates: (Date | null)[];
}

export const Month: React.FC<MonthProps> = ({ dates }) => {
  return (
    <motion.div
      initial={{
        position: 'absolute',
        x: -500,
        opacity: 0
      }}
      exit={{
        x: 500,
        opacity: 0,
        position: 'absolute'
      }}
      animate={{
        x: 0,
        position: 'static',
        opacity: 1
      }}
    >
      <div className="grid grid-cols-7 gap-y-4 bg-background-700">
        <WeekDays />
        {dates.map((date, idx) => {
          if (!date) return <div key={idx}></div>;
          return <Day date={date} key={`${date.toISOString()} ${idx}`} />;
        })}
      </div>
    </motion.div>
  );
};
