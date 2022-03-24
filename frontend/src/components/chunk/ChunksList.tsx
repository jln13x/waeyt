import Big from 'big.js';
import { NavigateThroughChunks } from '@components/chunk/NavigateThroughChunks';
import { PreviewChunk } from '@components/chunk/preview';
import { CycleQuery } from 'graphql/generated';
import { useChunk } from '@hooks/useChunk';
import React from 'react';
import { Scrollbar } from '@components/chunk/scrollbar';
import { toUTCDateWithoutTime } from '@utils/date/toUTCDateWithoutTime';
import { ActiveChunk } from './active/ActiveChunk';

interface ChunksListProps {
  cycle: CycleQuery['cycle'];
}

export const ChunksList: React.FC<ChunksListProps> = ({ cycle }) => {
  const { previousChunk, setPrevious, nextChunk, setNext, currentChunk, totalChunks } = useChunk();

  // Can be modified by the user in the future
  const visibleChunks = 3;
  const half = new Big(visibleChunks).div(2).round(0, Big.roundDown).toNumber();

  const chunks = Array.from(Array(visibleChunks).keys())
    .map((n, idx) => {
      const m = n + (previousChunk || 1);
      return m - half + 1;
    })
    .filter(c => c <= totalChunks && c >= 1);

  return (
    <div className="flex h-full">
      <div className="flex h-full grow flex-col gap-12">
        <div className="grid basis-1/5 place-items-center">
          {previousChunk !== null && <NavigateThroughChunks text="Go up" onClick={setPrevious} />}
        </div>
        <div className="flex flex-col items-center justify-center gap-24">
          {chunks.map(chunk => {
            const days = chunk * cycle.chunkLength;
            const startDate = toUTCDateWithoutTime(cycle.startDate).add(days, 'days');
            let endDate = startDate.add(cycle.chunkLength - 1, 'day');

            const cycleEndDate = toUTCDateWithoutTime(cycle.endDate);

            if (endDate.isAfter(cycleEndDate)) {
              endDate = cycleEndDate;
            }
            if (currentChunk === chunk) {
              return (
                <div className="w-11/12" key={startDate.toISOString()}>
                  <ActiveChunk
                    dateRange={{
                      startDate: startDate.toDate(),
                      endDate: endDate.toDate()
                    }}
                    chunkNumber={chunk}
                    cycle={cycle}
                  />
                </div>
              );
            }

            return (
              <div className="w-4/5" key={startDate.toISOString()}>
                <PreviewChunk
                  dateRange={{
                    startDate: startDate.toDate(),
                    endDate: endDate.toDate()
                  }}
                  chunkNumber={chunk}
                  cycle={cycle}
                />
              </div>
            );
          })}
        </div>
        <div className="grid basis-1/5 place-items-center">
          {nextChunk && <NavigateThroughChunks text="Go down" onClick={setNext} />}
        </div>
      </div>
      <Scrollbar cycle={cycle} />
    </div>
  );
};
