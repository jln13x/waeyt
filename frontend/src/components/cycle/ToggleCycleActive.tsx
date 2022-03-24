import { sleep } from '@utils/sleep';
import { queryClient } from 'config/queryClient';
import { CyclesQuery, useActiveCycleQuery, useCyclesQuery, useToggleActiveCycleMutation } from 'graphql/generated';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface SetCycleActiveProps {
  cycle: CyclesQuery['cycles'][number];
}

export const ToggleCycleActive: React.FC<SetCycleActiveProps> = ({ cycle }) => {
  const { mutate } = useToggleActiveCycleMutation({
    onSuccess: async () => {
      // TODO Optimistic updates
      await sleep(100);
      await queryClient.invalidateQueries(useCyclesQuery.getKey());
      await queryClient.invalidateQueries(useActiveCycleQuery.getKey());
    }
  });

  const { active } = cycle;

  const onClick = () => {
    mutate({
      id: cycle.id,
      input: {
        active: !cycle.active
      }
    });
  };

  if (active) {
    return (
      <div className="flex items-center gap-2 uppercase tracking-wide text-emerald-500">
        <button onClick={onClick}>
          <AiFillStar className="text-emerald-700" />
        </button>
        Active
      </div>
    );
  }

  return (
    <button onClick={onClick} className="text-white focus-within:text-emerald-500 focus-within:outline-none">
      <AiOutlineStar />
    </button>
  );
};
