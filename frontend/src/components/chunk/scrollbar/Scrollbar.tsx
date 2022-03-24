import Big from 'big.js';
import { ScrollbarButton } from '@components/chunk/scrollbar/ScrollbarButton';
import { ScrollbarChunk } from '@components/chunk/scrollbar/ScrollbarChunk';
import { CycleQuery } from 'graphql/generated';
import { useChunk } from '@hooks/useChunk';
import React from 'react';

interface ScrollbarProps {
  cycle: CycleQuery['cycle'];
}

export const Scrollbar: React.FC<ScrollbarProps> = ({ cycle }) => {
  const { previousChunk, nextChunk, setNext, setPrevious, totalChunks } = useChunk();
  const height = new Big(90).div(totalChunks).toFixed(2);

  // [0, 1, ..., totalChunks - 1]
  const chunks = Array.from(Array(totalChunks).keys());

  // TODO pass startDate / endDate to ScrollbarChunk

  return (
    <div className="sticky flex h-full items-center">
      <div className="align-center mr-2 flex h-[95%] w-16 rounded-md border-2 border-background-900 border-opacity-60 bg-background-900">
        <div className="flex h-full w-full flex-col justify-center gap-[1px]">
          <ScrollbarButton direction="up" onClick={setPrevious} isDisabled={previousChunk === null} />
          {chunks.map((_, idx) => (
            <ScrollbarChunk height={height} key={idx} chunkNumber={idx + 1} />
          ))}
          <ScrollbarButton direction="down" onClick={setNext} isDisabled={nextChunk === null} />
        </div>
      </div>
    </div>
  );
};
