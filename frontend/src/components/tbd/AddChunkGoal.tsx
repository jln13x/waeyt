import { EntryTypesQuery, useEntryTypesQuery } from '@graphql/generated';
import { Popover } from '@headlessui/react';
import { useWrappedPopper } from '@hooks/useWrappedPopper';
import React, { useState } from 'react';
import { PrimaryButton } from '../common/button/PrimaryButton';
import { ChunkGoalEntryForm } from './ChunkGoalEntryForm';
import { EntryTypes } from './EntryTypes';

export type SingleEntryType = EntryTypesQuery['entryTypes'][number];

interface AddChunkGoalProps {
  // chunk: 
}

export const AddChunkGoal: React.FC = ({}) => {
  // Prefetch
  const {} = useEntryTypesQuery();
  const { popper, setPopperElement, setReferenceElement } = useWrappedPopper({
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      }
    ],
    placement: 'left'
  });

  const { attributes, styles } = popper;
  const [selectedEntryType, setSelectedEntryType] = useState<SingleEntryType>();

  return (
    <Popover>
      <Popover.Button ref={setReferenceElement} as={PrimaryButton}>
        {/* TODO trans */}
        Add new goal
      </Popover.Button>
      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className={`${selectedEntryType ? 'max-w-screen-2xl' : 'max-w'}
        duration-2000 h-56 rounded-md border-2 border-background-400 bg-background-300 py-2 px-4 drop-shadow-2xl `}
      >
        {selectedEntryType ? (
          <ChunkGoalEntryForm entryType={selectedEntryType} setSelectedEntryType={setSelectedEntryType} />
        ) : (
          <EntryTypes setSelectedEntryType={setSelectedEntryType} />
        )}
      </Popover.Panel>
    </Popover>
  );
};
