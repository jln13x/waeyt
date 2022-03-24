import { Surface } from 'components/common/Surface';
import React from 'react';
import { IconType } from 'react-icons';

interface AggregateCardProps {
  label: string;
  data: string;
  change: string;
  isPositiveChange?: boolean;
  icon: IconType;
}

export const AggregateCard: React.FC<AggregateCardProps> = ({ label, data, change, isPositiveChange = false }) => {
  const sign = isPositiveChange ? '+' : '-';

  return (
    <Surface variant="darkest" className="relative max-h-36 w-60 p-4">
      <p className="uppercase text-white text-opacity-80">{label}</p>
      <strong className="text-4xl tracking-wide text-white">{data}</strong>
      <div className="mt-2 flex gap-2 ">
        <p className={`text-xl leading-none ${isPositiveChange ? 'text-green-600' : 'text-rose-500'}`}>
          {sign}
          {change}
        </p>
        <p className="self-end text-xs uppercase leading-none tracking-wider text-white text-opacity-20">
          since last week
        </p>
      </div>
    </Surface>
  );
};
