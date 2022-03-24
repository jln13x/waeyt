import { AggregateCard } from 'components/chunk-day/AggregateCard';
import { ChunkDay } from 'components/chunk-day/ChunkDay';
import { NextPage } from 'next';
import { FiAnchor, FiBookmark, FiBriefcase, FiRewind, FiTrello } from 'react-icons/fi';

export const cycleChunkPath = `/cycles/[cycle]/chunk/[chunk]`;

interface Props {}

const Chunk: NextPage<Props> = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-6">
        <ChunkDay />
        <ChunkDay />
        <ChunkDay />
        <ChunkDay />
        <ChunkDay />
        <ChunkDay />
        <ChunkDay />
      </div>
      <div className="mt-24 flex justify-center gap-4 rounded-full">
        <AggregateCard icon={FiRewind} data={'222'} label="Foo" change={'2'} />
        <AggregateCard icon={FiTrello} data={'2321'} label="Lorem" change={'0,5'} isPositiveChange />
        <AggregateCard icon={FiAnchor} data={'999999'} label="Gradient" change={'1,53'} isPositiveChange />
        <AggregateCard icon={FiBookmark} data={'16322'} label="Steps" change={'200'} />
        <AggregateCard icon={FiBriefcase} data={'8542'} label="Sleep" change={'9542333'} />
      </div>
    </div>
  );
};

export default Chunk;
