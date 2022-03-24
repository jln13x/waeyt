import { CycleQuery, useCycleChunkInDateRangeQuery } from '@graphql/generated';
import { DateRange } from '@interfaces/DateRange';
import { toUTCDateWithoutTime } from '@utils/date/toUTCDateWithoutTime';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import {
  PreviewChunkWrapper,
  PreviewErrorChunk,
  PreviewLoadingChunk,
  PreviewNoDataChunk,
  PreviewPlannedChunk,
  PreviewRecapChunk
} from '.';

interface Props {
  dateRange: DateRange;
  chunkNumber: number;
  cycle: CycleQuery['cycle'];
}

export interface PreviewChunkProps {
  dateRange: DateRange;
  chunkNumber: number;
}

export const PreviewChunk: React.FC<Props> = props => {
  const { dateRange, cycle, chunkNumber } = props;
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

  const previewChunkProps: PreviewChunkProps = {
    chunkNumber,
    dateRange
  };

  if (isLoading) return <PreviewLoadingChunk {...previewChunkProps} />;
  if (!data || isError) return <PreviewErrorChunk {...previewChunkProps} />;

  const chunk = data.cycleChunkInDateRange;
  const localDate = dayjs().startOf('day');

  if (!chunk) return <PreviewNoDataChunk {...previewChunkProps} />;

  if (localDate.isBefore(chunk.startDate)) return <PreviewPlannedChunk {...previewChunkProps} />;

  return <PreviewRecapChunk {...previewChunkProps} />;
};
