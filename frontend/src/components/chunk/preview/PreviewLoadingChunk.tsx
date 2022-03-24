import React from 'react';
import { PreviewChunkProps, PreviewChunkWrapper } from '.';

export const PreviewLoadingChunk: React.FC<PreviewChunkProps> = ({ chunkNumber, dateRange }) => {
  return (
    <PreviewChunkWrapper chunkNumber={chunkNumber} dateRange={dateRange}>
      Loading
    </PreviewChunkWrapper>
  );
};
