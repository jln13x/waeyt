import { Menu, Popover } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { FaWeight } from 'react-icons/fa';
import { HiScale } from 'react-icons/hi';
import { usePopper } from 'react-popper';
import { ActiveChunkProps } from '.';
import { PrimaryButton } from '../../common/button/PrimaryButton';
import { AddChunkGoal } from '../../tbd/AddChunkGoal';
import { ActiveChunkWrapper } from './ActiveChunkWrapper';

interface ActiveNoDataChunkProps {
  canAddEntries?: boolean;
}

export const ActiveNoDataChunk: React.FC<ActiveChunkProps & ActiveNoDataChunkProps> = ({
  canAddEntries = false,
  dateRange,
  chunkNumber
}) => {
  return (
    <ActiveChunkWrapper dateRange={dateRange} chunkNumber={chunkNumber}>
      <div className="flex grow items-center">
        <div className="grow text-center">
          <p className="text-2xl tracking-wide text-violet-400 ">Lorem ipsum dolor sit.</p>
          <p className="text-sm uppercase tracking-wide text-white text-opacity-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, assumenda.
          </p>
        </div>
        {canAddEntries && <AddChunkGoal />}
      </div>
    </ActiveChunkWrapper>
  );
};
