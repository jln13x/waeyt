import { de } from 'date-fns/locale';
import React from 'react';
import { formatToLocale } from 'utils/dateUtils';

interface DateRangeAsTextProps {
  startDate: Date;
  endDate: Date;
}

export const DateRangeAsText: React.FC<DateRangeAsTextProps> = ({ startDate, endDate }) => {
  return (
    <React.Fragment>
      {formatToLocale(startDate, 'PP', de)} - {formatToLocale(endDate, 'PP', de)}
    </React.Fragment>
  );
};
