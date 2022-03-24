import { DateRangeAsText } from 'components/common/DateRangeAsText';
import { H3 } from 'components/common/elements/Heading';
import { Loader } from 'components/common/Loader';
import { PrimaryLink } from 'components/common/PrimaryLink';
import { AverageWeight } from 'components/cycle/AverageWeight';
import { DataPoint } from 'components/cycle/DataPoint';
import { DayBox } from 'components/cycle/DayBox';
import { CycleQuery, useCycleChunkInDateRangeQuery } from 'graphql/generated';
import { cycleChunkPath } from 'pages/cycles/[cycle]/chunk/[chunk]';
import React from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { FiTarget } from 'react-icons/fi';
import { MdCompareArrows } from 'react-icons/md';
import { toUTCDateWithoutTime } from '@utils/date/toUTCDateWithoutTime';

interface ActiveChunkProps {
  startDate: Date;
  endDate: Date;
  chunkNumber: number;
  cycle: CycleQuery['cycle'];
}

export const ActiveChunk: React.FC<ActiveChunkProps> = ({ chunkNumber, startDate, endDate, cycle }) => {
  const { data, isLoading } = useCycleChunkInDateRangeQuery({
    cycleId: cycle.id,
    input: {
      startDate: toUTCDateWithoutTime(startDate).format('YYYY-MM-DD'),
      endDate: toUTCDateWithoutTime(endDate).format('YYYY-MM-DD')
    }
  });

  const noChunkYet = data?.cycleChunkInDateRange === null;

  if (!isLoading && noChunkYet) {
    return (
      <div className="relative h-24 w-full rounded-3xl bg-background-800 px-6 text-white shadow-lg shadow-background-900">
        <div className="flex h-full py-4">
          <div>
            <H3 className="uppercase tracking-wider text-white">Week {chunkNumber}</H3>
            <p className="text-white text-opacity-80">
              <DateRangeAsText startDate={startDate} endDate={endDate} />
            </p>
          </div>
          <div className="flex items-center grow">
            <div className="grow text-center">
            <p className="text-violet-400 tracking-wide text-2xl ">Lorem ipsum dolor sit.</p>
            <p className="text-white text-opacity-40 uppercase tracking-wide text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
            </div>
            <PrimaryLink href={{}}>Eintragen</PrimaryLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 w-full rounded-3xl bg-background-800 px-6 text-white shadow-lg shadow-background-900">
      <div className="flex h-full py-4">
        <div className="flex basis-[20%] flex-col justify-between">
          <div>
            <H3 className="uppercase tracking-wider text-white">Week {chunkNumber}</H3>
            <p className="text-white text-opacity-80">
              <DateRangeAsText startDate={startDate} endDate={endDate} />
            </p>
          </div>
          <div>{isLoading && <Loader />}</div>
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
              query: {
                // cycle: chunk.cycle.id,
                // chunk: chunk.id
              }
            }}
          >
            Details
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
};
