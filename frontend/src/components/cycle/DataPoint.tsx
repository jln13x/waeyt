import React from 'react';
import { IconType } from 'react-icons';
import { GoArchive } from 'react-icons/go';

interface DataPointProps {
  icon: IconType;
  heading?: string;
  data?: string;
}

export const DataPoint: React.FC<DataPointProps & React.HTMLAttributes<HTMLDivElement>> = ({
  icon,
  data,
  heading,
  className,
  children,
  ...props
}) => {
  return (
    <div className={className}>
      {heading && <p className="font-bold uppercase tracking-wider text-violet-300">{heading}</p>}
      <div className="inline-flex items-center gap-2 text-white text-opacity-80">
        {/* <Icon as={icon} /> */}
        <GoArchive />
        {data ? <p>{data}</p> : <p className="text-white text-opacity-40">No entry yet</p>}
        {children}
      </div>
    </div>
  );
};
