import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const toUTCDateWithoutTime = (date: string | Date) => {
  const utcDate = dayjs.utc(date);

  if (!utcDate.isSame(utcDate.startOf('day'))) {
    throw new Error('Date with time provided');
  }

  if (!utcDate.isValid()) {
    throw new Error('Invalid date provided');
  }

  return utcDate;
};
