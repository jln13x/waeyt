import React from 'react';
import { PreviewChunkProps, PreviewChunkWrapper } from '.';

export const PreviewNoDataChunk: React.FC<PreviewChunkProps> = ({ chunkNumber, dateRange }) => {
  return (
    <PreviewChunkWrapper chunkNumber={chunkNumber} dateRange={dateRange}>
      <p className="text-center">No data bro</p>
    </PreviewChunkWrapper>
  );
};
