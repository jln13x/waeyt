import React from 'react';
import { DateRange } from '@interfaces/DateRange';
import { DateRangeAsText } from '@components/common/DateRangeAsText';

interface ChunkDateProps {
  variant: 'preview' | 'active';
  chunkNumber: Number;
  dateRange: DateRange;
}

export const ChunkDate: React.FC<ChunkDateProps> = ({ variant, chunkNumber, dateRange }) => {
  const fontSizeWeek = variant === 'active' ? 'text-3xl' : 'text-xl';
  const fontSizeDate = variant === 'active' ? 'text-md' : 'text-sm';

  return (
    <div>
      {/* TODO: Translation */}
      <p className={`uppercase tracking-wider text-white ${fontSizeWeek}`}>Week {chunkNumber}</p>
      <p className={`text-white text-opacity-80 ${fontSizeDate}`}>
        <DateRangeAsText startDate={dateRange.startDate} endDate={dateRange.endDate} />
      </p>
    </div>
  );
};
