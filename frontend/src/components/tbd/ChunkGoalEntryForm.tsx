import { useAddCycleChunkGoalEntryMutation } from '@graphql/generated';
import { useUnmountEffect } from '@hooks/useUnmountEffect';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { BiCheck } from 'react-icons/bi';
import { useChunk } from '@hooks/useChunk';
import { getFirstParam } from '../../utils/get-first-param';
import { PrimaryButton } from '../common/button/PrimaryButton';
import { Form } from '../common/form/Form';
import { InputField } from '../common/form/InputField';
import { SingleEntryType } from './AddChunkGoal';
import { getEntryTypeIcon } from './EntryType';

export interface ChunkGoalEntryForm {
  entryValue: string;
}

interface ChunkGoalEntryFormProps {
  entryType: SingleEntryType;
  setSelectedEntryType: React.Dispatch<React.SetStateAction<SingleEntryType | undefined>>;
}

export const ChunkGoalEntryForm: React.FC<ChunkGoalEntryFormProps> = ({ entryType, setSelectedEntryType }) => {
  const { query } = useRouter();
  const { currentChunk } = useChunk();

  const { mutate, data } = useAddCycleChunkGoalEntryMutation();
  const form = useForm<ChunkGoalEntryForm>();

  const onSubmit = form.handleSubmit(data => {
    const cycle = query.cycle;

    // TODO: Client validation if no query params
    if (!cycle) return;

    mutate({
      input: {
        entryTypeId: entryType.id,
        chunkNumber: currentChunk,
        cycleId: getFirstParam(cycle),
        entryValue: data.entryValue
      }
    });
  });

  const Icon = getEntryTypeIcon(entryType.type);

  useUnmountEffect(() => setSelectedEntryType(undefined));

  useEffect(() => {
    form.setFocus('entryValue');
  }, []);

  return (
    <Form onSubmit={onSubmit} form={form} className="m-auto flex">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-2">
          {/* TODO Trans */}
          <p className="text-xl uppercase tracking-wide">{entryType.type}</p>
          <div className="h-fit w-fit rounded-full bg-violet-400 p-4 text-3xl text-violet-200">
            asdsadsad
            <Icon />
          </div>
        </div>
        <div className="mt-10 w-full">
          {/* TODO Translation */}
          <div className="mx-auto flex w-3/4 gap-2">
            <InputField name="entryValue" label="Value" />
            <PrimaryButton type="submit">
              <BiCheck />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Form>
  );
};
