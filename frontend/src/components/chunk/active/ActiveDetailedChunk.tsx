import React from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { FiTarget } from 'react-icons/fi';
import { MdCompareArrows } from 'react-icons/md';
import { ActiveChunkProps } from '.';
import { cycleChunkPath } from '../../../pages/cycles/[cycle]/chunk/[chunk]';
import { PrimaryLink } from '../../common/PrimaryLink';
import { AverageWeight } from '../../cycle/AverageWeight';
import { DataPoint } from '../../cycle/DataPoint';
import { DayBox } from '../../cycle/DayBox';
import { ChunkContentWrapper } from '../ChunkContentWrapper';
import { ChunkDate } from '../ChunkDate';

export const ActiveDetailedChunk: React.FC<ActiveChunkProps> = ({ dateRange, chunkNumber }) => {
  return (
    <div className="relative h-56 w-full rounded-3xl bg-background-800 px-6 text-white shadow-lg shadow-background-900">
      <ChunkContentWrapper>
        <div className="flex basis-[20%] flex-col justify-between">
          <ChunkDate chunkNumber={chunkNumber} variant="active" dateRange={dateRange} />
          <div className="flex grow flex-col justify-end">
            <div className="flex items-center gap-1">
              <DayBox />
              <DayBox isMissing />
              <DayBox />
              <DayBox isToday />
              <DayBox isUpcoming />
              <DayBox isUpcoming />
              <DayBox isUpcoming />
            </div>
          </div>
        </div>
        <div className="flex basis-[15%] flex-col justify-between">
          <DataPoint heading="Planned weight" icon={FiTarget} data={'Not enough data'} />
          <DataPoint heading="Planned rate" icon={AiOutlineFire} data={'Not enough data'} />
          <DataPoint heading="Planned calories" icon={AiOutlineFire} data={'Not enough data'} />
        </div>
        <div className="w-72 grow"></div>
        <div className="absolute top-2/4 left-2/4 h-72 w-72 -translate-x-2/4 -translate-y-2/4 rounded-full border-4 border-white bg-background-800">
          {/* <AverageWeight averageWeight={chunk.averageWeight} /> */}
          <AverageWeight averageWeight={'50'} />
        </div>
        <div className="flex basis-[20%] flex-col justify-between pl-8">
          <DataPoint heading="Calories" icon={AiOutlineFire} data={'2100'} />
          <DataPoint heading="Steps" icon={AiOutlineFire} data={'6000'} />
          <DataPoint heading="Sleep" icon={AiOutlineFire} data={'8,7h'} />
        </div>
        <div className="flex basis-[15%] flex-col items-end justify-between">
          <div>
            <MdCompareArrows className="text-emerald-300" title="Turn off comparsion" />
          </div>
          <PrimaryLink
            href={{
              pathname: cycleChunkPath,
              query: {}
            }}
          >
            Details
          </PrimaryLink>
        </div>
      </ChunkContentWrapper>
    </div>
  );
};
