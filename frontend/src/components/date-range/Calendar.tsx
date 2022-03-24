import { MonthSelect, NavigatorIcon } from 'components/date-range';
import { Month } from 'components/date-range/Month';
import { YearSelect } from 'components/date-range/YearSelect';
import { addMonths } from 'date-fns';
import { AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { getDaysOfMonth } from 'utils/getDaysOfMonth';

interface CalendarProps {
  month: Date;
}

export const Calendar: React.FC<CalendarProps> = ({ month }) => {
  const [visibleMonth, setVisibleMonth] = useState(month);

  const incrementMonth = (monthDifference: number) => {
    setVisibleMonth(visibleMonth => addMonths(visibleMonth, monthDifference));
  };

  const dates = useMemo(() => getDaysOfMonth(visibleMonth), [visibleMonth]);

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-4 flex w-full items-center justify-center gap-2 py-4">
          <NavigatorIcon onClick={() => incrementMonth(-1)}>
            <BiChevronLeft />
          </NavigatorIcon>
          <MonthSelect activeMonth={visibleMonth} onChange={setVisibleMonth} />
          <YearSelect activeYear={visibleMonth} onChange={setVisibleMonth} />
          <NavigatorIcon onClick={() => incrementMonth(1)}>
            <BiChevronRight />
          </NavigatorIcon>
        </div>
      </div>
      <AnimatePresence>
        <Month dates={dates} key={visibleMonth.getMonth()} />
      </AnimatePresence>
    </>
  );
};
