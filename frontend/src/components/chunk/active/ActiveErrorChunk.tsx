import React from 'react';
import { ActiveChunkProps, ActiveChunkWrapper } from '.';

export const ActiveErrorChunk: React.FC<ActiveChunkProps> = ({ dateRange, chunkNumber }) => {
  return (
    <ActiveChunkWrapper chunkNumber={chunkNumber} dateRange={dateRange}>
      <div className="grid grow place-items-center">
        <p className="text-rose-500">Lorem ipsum dolor sit amet consectetur.</p>
        <button>Refetch</button>
      </div>
    </ActiveChunkWrapper>
  );
};
