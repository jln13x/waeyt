import React from 'react';

interface TagProps {
  name: string;
  textColor?: string;
  backgroundColor?: string;
  backgroundColorRemove?: string;
  removable?: boolean;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  removable,
  name,
  className,
  textColor = 'text-white',
  backgroundColor = 'bg-red-500',
  backgroundColorRemove = 'bg-red-700'
}) => {
  return (
    <div
      className={`flex w-fit overflow-hidden rounded-3xl text-xs ${className}`}
    >
      <div className={`text-medium w-fit p-2 ${backgroundColor} ${textColor} `}>
        <p>{name}</p>
      </div>
      {removable && (
        <div className={`basis-1/4 p-2 text-center ${backgroundColorRemove}`}>
          <p className="mr-1">x</p>
        </div>
      )}
    </div>
  );
};
