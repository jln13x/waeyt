import {
  startOfMonth,
  isMonday,
  previousMonday,
  differenceInDays,
  subDays,
  getDaysInMonth,
  addDays,
  endOfMonth,
  isSunday,
  nextSunday
} from 'date-fns';

export const getDaysOfMonth = (
  month: Date,
  includeAdjacentMonths = false
): (Date | null)[] => {
  const firstOfTheMonth = startOfMonth(month);
  const dates = [firstOfTheMonth] as (Date | null)[];

  if (!isMonday(firstOfTheMonth)) {
    const previousMondayDate = previousMonday(firstOfTheMonth);

    const dayDifference = differenceInDays(firstOfTheMonth, previousMondayDate);

    // Helper Array
    const days = Array(dayDifference).fill('', 0, dayDifference);

    days.forEach((_, idx) => {
      if (includeAdjacentMonths) {
        const newDate = subDays(firstOfTheMonth, idx + 1);
        dates.unshift(newDate);
      } else {
        dates.unshift(null);
      }
    });
  }

  // -1 to ignore the first date
  const daysInMonth = getDaysInMonth(firstOfTheMonth);
  const daysInMonthHelperArray = Array(daysInMonth).fill('', 0, daysInMonth);

  daysInMonthHelperArray.forEach((_, idx) => {
    if (idx) {
      const newDate = addDays(firstOfTheMonth, idx);
      dates.push(newDate);
    }
  });

  const endOfTheMonth = endOfMonth(month);

  if (!isSunday(endOfTheMonth)) {
    const nextSundayDate = nextSunday(endOfTheMonth);

    const differenceToSunday = differenceInDays(nextSundayDate, endOfTheMonth);
    const differenceToSundayHelper = Array(differenceToSunday).fill(
      '',
      0,
      differenceToSunday
    );

    differenceToSundayHelper.forEach((_, idx) => {
      if (includeAdjacentMonths) {
        const newDate = addDays(endOfTheMonth, idx + 1);
        dates.push(newDate);
      } else {
        dates.push(null);
      }
    });
  }

  return dates;
};
