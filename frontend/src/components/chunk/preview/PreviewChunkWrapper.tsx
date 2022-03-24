import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useOverlay } from '@hooks/useOverlay';
import { Overlay } from '../../animations/Overlay';
import { useChunk } from '@hooks/useChunk';
import { PreviewChunkProps } from '.';
import { ChunkContentWrapper } from '../ChunkContentWrapper';
import { ChunkDate } from '../ChunkDate';

export const PreviewChunkWrapper: React.FC<PreviewChunkProps> = ({ chunkNumber, dateRange, children }) => {
  const { setChunk } = useChunk();

  const onClick = () => {
    setChunk(chunkNumber);
  };
  const { showOverlay, eventHandler } = useOverlay();
  return (
    <div
      className="relative h-24 w-full cursor-pointer select-none rounded-3xl bg-background-800 px-8 py-4"
      {...eventHandler}
      onClick={onClick}
    >
      <div className="flex h-full items-center">
        <ChunkDate dateRange={dateRange} chunkNumber={chunkNumber} variant="preview" />
        <div className="grow">{children}</div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {showOverlay && <Overlay className="rounded-3xl border-inherit bg-background-800" />}
      </AnimatePresence>
    </div>
  );
};
