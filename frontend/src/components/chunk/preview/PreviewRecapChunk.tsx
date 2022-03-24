import { DataPoint } from 'components/cycle/DataPoint';
import React from 'react';
import { HiScale } from 'react-icons/hi';
import { PreviewChunkProps, PreviewChunkWrapper } from '.';

export const PreviewRecapChunk: React.FC<PreviewChunkProps> = ({ chunkNumber, dateRange }) => {
  return (
    <PreviewChunkWrapper chunkNumber={chunkNumber} dateRange={dateRange}>
      <div className="flex grow items-center justify-evenly text-white">
        <DataPoint data="foo" icon={HiScale} heading={'Weight'} />
        <DataPoint data="foo" icon={HiScale} heading={'Rate'} />
        <DataPoint data="foo" icon={HiScale} heading={'Calories'} />
        <DataPoint data="foo" icon={HiScale} heading={'Steps'} />
        <DataPoint data="foo" icon={HiScale} heading={'Sleep'} />
      </div>
    </PreviewChunkWrapper>
  );
};
