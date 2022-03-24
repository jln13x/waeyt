import React from 'react';
import { useEntryTypesQuery } from '@graphql/generated';
import { EntryType } from './EntryType';
import { SingleEntryType } from './AddChunkGoal';

export interface EntryTypesProps {
  setSelectedEntryType: React.Dispatch<React.SetStateAction<SingleEntryType | undefined>>;
}

export const EntryTypes: React.FC<EntryTypesProps> = ({ setSelectedEntryType }) => {
  const { data } = useEntryTypesQuery();

  if (!data) return null;

  return (
    <div className="flex flex-col">
      {data.entryTypes.map(entryType => (
        <EntryType key={entryType.id} entryType={entryType} setSelectedEntryType={setSelectedEntryType} />
      ))}
    </div>
  );
};
