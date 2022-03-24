import clsx from 'clsx';
import { useChunk } from '@hooks/useChunk';
import React from 'react';

interface ScrollbarChunkProps {
  height: string;
  chunkNumber: number;
}

export const ScrollbarChunk: React.FC<ScrollbarChunkProps> = ({ height, chunkNumber }) => {
  const { currentChunk, setChunk } = useChunk();

  const isActive = chunkNumber === currentChunk;

  const classes = clsx({
    'bg-emerald-300 hover:bg-emerald-600': isActive,
    'cursor-pointer bg-background-600 hover:bg-emerald-200': !isActive
  });

  return (
    <div
      className={`${classes} transition-all `}
      style={{ height: `${height}%` }}
      onClick={() => setChunk(chunkNumber)}
    />
  );
};
