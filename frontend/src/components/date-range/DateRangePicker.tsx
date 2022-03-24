import { Calendar } from 'components/date-range';
import { DateRangeContext } from 'context/DateRangeContext';
import { isAfter, isDate, startOfDay } from 'date-fns';
import React, { useEffect, useMemo, useState } from 'react';

interface SelectedRange {
  startDate?: Date;
  endDate?:  Date;
}
export type OnRangeSelected = (selectedRange: SelectedRange) => void;

interface DateRangePickerProps {
  providedStartDate: Date;
  providedEndDate?: Date;
  onRangeSelected: OnRangeSelected
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  providedStartDate,
  providedEndDate,
  onRangeSelected
}) => {
  const startOfProvidedStartDate = useMemo(() => startOfDay(providedStartDate), [providedStartDate]);
  const [startDate, setStartDate] = useState(startOfProvidedStartDate);

  const providedEndDateValid = useMemo(() => isDate(providedEndDate), [providedEndDate]);
  const startOfProvidedEndDate = useMemo(
    () => providedEndDateValid && startOfDay(providedEndDate),
    [providedEndDateValid, providedEndDate]
  );

  const providedEndDateValidAndAfter = useMemo(
    () => providedEndDateValid && isAfter(startDate, startOfProvidedEndDate),
    [startDate, providedEndDate]
  );

  const [endDate, setEndDate] = useState(providedEndDateValidAndAfter ? startOfProvidedEndDate : undefined);

  const [isSelecting, setIsSelecting] = useState(false);
  const [hoveredEndDate, setHoveredEndDate] = useState<Date>();

  const values = useMemo(
    () => ({
      startDate,
      setStartDate,

      endDate,
      setEndDate,

      isSelecting,
      setIsSelecting,

      hoveredEndDate,
      setHoveredEndDate,

      onRangeSelected
    }),
    [
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      isSelecting,
      setIsSelecting,
      hoveredEndDate,
      setHoveredEndDate,
      onRangeSelected
    ]
  );

  useEffect(() => {
    setStartDate(startOfProvidedStartDate);
  }, [startOfProvidedStartDate]);

  useEffect(() => {
    setEndDate(providedEndDate);
  }, [providedEndDate]);

  return (
    <DateRangeContext.Provider value={values}>
      <Calendar month={startDate} />
    </DateRangeContext.Provider>
  );
};
