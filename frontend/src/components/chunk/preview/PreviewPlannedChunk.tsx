import React from 'react';
import { HiScale } from 'react-icons/hi';
import { PreviewChunkProps, PreviewChunkWrapper } from '.';
import { DataPoint } from '../../cycle/DataPoint';

export const PreviewPlannedChunk: React.FC<PreviewChunkProps> = ({ chunkNumber, dateRange }) => {
  return (
    <PreviewChunkWrapper chunkNumber={chunkNumber} dateRange={dateRange}>
      <div className="flex justify-evenly">
        <DataPoint data="foo" icon={HiScale} heading={'Planned Calories'} />
        <DataPoint data="foo" icon={HiScale} heading={'Planned Calories'} />
        <DataPoint data="foo" icon={HiScale} heading={'Planned Calories'} />
      </div>
    </PreviewChunkWrapper>
  );
};
