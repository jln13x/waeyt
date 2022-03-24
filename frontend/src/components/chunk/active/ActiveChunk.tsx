import { CycleQuery, useCycleChunkInDateRangeQuery } from '@graphql/generated';
import { DateRange } from '@interfaces/DateRange';
import { toUTCDateWithoutTime } from '@utils/date/toUTCDateWithoutTime';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { ActiveDetailedChunk } from './ActiveDetailedChunk';
import { ActiveErrorChunk } from './ActiveErrorChunk';
import { ActiveLoadingChunk } from './ActiveLoadingChunk';
import { ActiveNoDataChunk } from './ActiveNoDataChunk';
import { ActivePlannableChunk } from './ActivePlannableChunk';

interface Props {
  dateRange: DateRange;
  chunkNumber: number;
  cycle: CycleQuery['cycle'];
}

export interface ActiveChunkProps {
  dateRange: DateRange;
  chunkNumber: number;
}

export const ActiveChunk: React.FC<Props> = ({ dateRange, cycle, chunkNumber }) => {
  const { startDate, endDate } = dateRange;

  const formattedStartDate = useMemo(() => toUTCDateWithoutTime(startDate).format('YYYY-MM-DD'), [dateRange]);
  const formattedEndDate = useMemo(() => toUTCDateWithoutTime(endDate).format('YYYY-MM-DD'), [dateRange]);

  const { data, isLoading, isError } = useCycleChunkInDateRangeQuery({
    cycleId: cycle.id,
    input: {
      startDate: formattedStartDate,
      endDate: formattedEndDate
    }
  });

  const activeChunkProps: ActiveChunkProps = {
    dateRange,
    chunkNumber
  };

  if (isLoading) return <ActiveLoadingChunk {...activeChunkProps} />;

  /* TODO Error Message */
  if (!data || isError) return <ActiveErrorChunk {...activeChunkProps} />;

  const chunk = data.cycleChunkInDateRange;
  const localDate = dayjs().startOf('day');

  if (!chunk) return <ActiveNoDataChunk {...activeChunkProps} canAddEntries={!localDate.isAfter(endDate)} />;

  // Some chunk data exists already but it didn't start yet
  if (localDate.isBefore(startDate)) return <ActivePlannableChunk {...activeChunkProps} />;

  return <ActiveDetailedChunk {...activeChunkProps} />;
};
