import { H1 } from 'components/common/elements/Heading';
import { Icon } from 'components/common/elements/Icon';
import React from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

interface AverageWeightProps {
  averageWeight: string;
}

export const AverageWeight: React.FC<AverageWeightProps> = ({ averageWeight }) => {
  return (
    <div className="grid h-full grid-rows-5 place-items-stretch py-8 text-center">
      <div className="self-end">
        {/* <BsArrowDown className="text-4xl font-bold text-rose-800" /> */}
        <p className="font-bold uppercase tracking-wider">Average weight</p>
      </div>
      <div className="row-span-3 place-self-center">
        <p className="text-7xl text-violet-400">{averageWeight}</p>
      </div>
      <p className="text-2xl text-white text-opacity-60">-0,5 / -1,3%</p>
    </div>
  );
};
