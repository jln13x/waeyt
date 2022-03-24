import { differenceInDays, format as dateFormat, Locale } from 'date-fns';
import { Decimal } from 'decimal.js';

export const formatToLocale = (date: Date, format: string, locale: Locale) => {
  return dateFormat(date, format, { locale });
};

export const exactDifferenceInWeeks = (firstDate: Date, secondDate: Date): Decimal => {
  const diffInDays = new Decimal(differenceInDays(firstDate, secondDate));
  // Weeks dont start at 0
  return diffInDays.div(7).abs();
};

export const serializeDate = (date: Date) => {
  return dateFormat(date, 'yyyy-MM-dd');
};
