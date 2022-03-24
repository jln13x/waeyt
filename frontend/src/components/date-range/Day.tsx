import { useUnmountEffect } from '@chakra-ui/react';
import clsx from 'clsx';
import { useDateRange } from 'context/date-range/useDateRange';
import { format, getDay, isBefore, isEqual, isMonday, isSunday, isWithinInterval, startOfDay } from 'date-fns';
import React from 'react';

interface DayProps {
  date: Date;
}

export const Day: React.FC<DayProps> = ({ date }) => {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    isSelecting,
    setIsSelecting,
    hoveredEndDate,
    setHoveredEndDate,
    onRangeSelected
  } = useDateRange();

  const isFirstOfRange = isEqual(startOfDay(date), startOfDay(startDate));
  const isLastOfRange = isEqual(startOfDay(date), startOfDay(endDate));

  const isHoveredEndDate = isEqual(hoveredEndDate, date);

  const dateIsSunday = isSunday(date);
  const dateIsMonday = isMonday(date);

  // On the edge of the calendar or start/end
  const isEdge = dateIsMonday || dateIsSunday || isFirstOfRange || isLastOfRange || isHoveredEndDate;

  // To split up "isInSelectedRange"
  const isBetweenStartAndEnd = endDate && isWithinInterval(date, { start: startDate, end: endDate });
  const isInSelectedRange = !isSelecting && isBetweenStartAndEnd;

  // Currently selecting
  const isInSelectingRange =
    isSelecting &&
    hoveredEndDate &&
    isWithinInterval(date, {
      start: startDate,
      end: hoveredEndDate
    });

  //"Main" Date / Endpoint
  const isLimiter = isFirstOfRange || isLastOfRange || isHoveredEndDate;

  const onClick = () => {
    // Start selecting
    if (!isSelecting) {
      setIsSelecting(true);
      setStartDate(date);
      setEndDate(undefined);
      // onRangeSelected({
      //   startDate: date,
      //   endDate: undefined
      // });
    }

    if (isSelecting) {
      if (isBefore(date, startDate)) {
        setStartDate(date);
        setHoveredEndDate(undefined);
        return;
      }

      setIsSelecting(false);
      setHoveredEndDate(undefined);
      setEndDate(date);
      onRangeSelected({
        startDate,
        endDate: date
      });
    }
  };

  const onMouseOver = () => {
    if (isSelecting) {
      if (isBefore(date, startDate) || isFirstOfRange) {
        setHoveredEndDate(undefined);
        return;
      }

      setHoveredEndDate(date);
    }
  };

  const classes = clsx({
    // Main
    'bg-violet-700': isLimiter || isInSelectedRange,
    'rounded-l-full': isFirstOfRange || dateIsMonday,
    // First of Range Initial "State" => Nothing selected or hovered yet
    'rounded-r-full':
      isLastOfRange || isHoveredEndDate || dateIsSunday || (isFirstOfRange && !endDate && !hoveredEndDate),

    // Selection
    'bg-background-600 bg-opacity-10': !isLimiter && isInSelectingRange,

    // Selected
    // 'bg-violet-600': !isLimiter && isInSelectedRange
  });

  const firstIsSunday = isFirstOfRange && dateIsSunday;

  const lastIsMonday = (isLastOfRange || isHoveredEndDate) && dateIsMonday;

  const wrapperClasses = clsx({
    // Common styles
    'after:z-0 after:h-full after:absolute': true,

    // Selection Styling
    'after:bg-background-600 after:bg-opacity-10 after:border-y-2 after:border-y-violet-300 after:border-opacity-10 after:border-dashed':
      isInSelectingRange,

    // Selected
    'after:bg-violet-700': isInSelectedRange,

    // Positioning
    'after:rounded-l-xl after:right-0': isFirstOfRange || dateIsMonday,
    'after:rounded-r-xl after:left-0': isLastOfRange || dateIsSunday || isHoveredEndDate,

    // Sizing
    'after:w-0': isLimiter && (dateIsMonday || dateIsSunday),
    'after:w-2/4': isEdge && !firstIsSunday && !lastIsMonday,
    'after:w-full': !isEdge && (isInSelectingRange || isInSelectedRange)
  });

  return (
    <div onClick={onClick} className={`relative grid  place-items-center ${wrapperClasses}`}>
      <div className={`z-20 transition-all cursor-pointer w-fit py-2 px-4 text-white text-opacity-80 ${classes}`} onMouseOver={onMouseOver}>
        {format(date, 'd')}
      </div>
    </div>
  );
};
