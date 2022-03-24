import React from 'react';
import { HiScale } from 'react-icons/hi';
import { EntryTypesQuery } from '@graphql/generated';
import { BiWalk } from 'react-icons/bi';
import { FaBurn, FaYinYang } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { EntryTypesProps } from './EntryTypes';

interface EntryTypeProps extends EntryTypesProps {
  entryType: EntryTypesQuery['entryTypes'][number];
}

export const EntryType: React.FC<EntryTypeProps> = ({ entryType, setSelectedEntryType }) => {
  const Icon = getEntryTypeIcon(entryType.type);

  return (
    <div
      className={`group flex items-center gap-2 p-4 text-lg focus-within:border-purple-400 hover:border-emerald-200`}
      onClick={() => setSelectedEntryType(entryType)}
    >
      <div className="grid place-items-center rounded-full bg-violet-400 p-2">
        <Icon className="text-violet-200 group-hover:text-white" />
      </div>
      {/* TODO translation */}
      <span className="capitalize">{entryType.type}</span>
    </div>
  );
};

export const getEntryTypeIcon = (type: string): IconType => entryTypeIcons[type] || fallBackIcon;

const entryTypeIcons: Record<string, IconType> = {
  weight: HiScale,
  steps: BiWalk,
  calories: FaBurn
};

const fallBackIcon = FaYinYang;
