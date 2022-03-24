import { Loader } from '@components/common/Loader';
import React from 'react';
import { ActiveChunkProps, ActiveChunkWrapper } from '.';

export const ActiveLoadingChunk: React.FC<ActiveChunkProps> = props => {
  return (
    <ActiveChunkWrapper {...props}>
      {/* TODO Skeleton */}
      <div className="grid grow place-items-center">
        <Loader />
      </div>
    </ActiveChunkWrapper>
  );
};
