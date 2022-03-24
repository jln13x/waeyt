import clsx from 'clsx';
import React from 'react';

interface DayBoxProps {
  isMissing?: boolean;
  isToday?: boolean;
  isUpcoming?: boolean;
}

export const DayBox: React.FC<DayBoxProps> = ({
  isMissing,
  isToday,
  isUpcoming
}) => {
  const classes = clsx({
    // Default
    'hover:bg-emerald-700': !isMissing && !isToday && !isUpcoming,
    'bg-emerald-900': !isMissing && !isToday && !isUpcoming,
    'bg-amber-500': isToday,
    'hover:bg-amber-600': isToday,
    'bg-rose-900': isMissing,
    'hover:bg-rose-700': isMissing,
    'bg-neutral-500': isUpcoming,
    'cursor-not-allowed': isUpcoming,
    'h-7 w-7': isToday,
    'h-5 w-5': !isToday
  });

  return <div className={`${classes} transition-all `}></div>;
};
