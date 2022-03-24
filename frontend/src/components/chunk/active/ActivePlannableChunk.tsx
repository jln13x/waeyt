import React from 'react';
import { ActiveChunkProps } from '.';
import { ActiveChunkWrapper } from './ActiveChunkWrapper';

export const ActivePlannableChunk: React.FC<ActiveChunkProps> = props => {
  return (
    <ActiveChunkWrapper {...props}>
      <div className="flex grow items-center">
        <div className="grow text-center">Plan</div>
      </div>
    </ActiveChunkWrapper>
  );
};
