import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface OptionProps {
  label: string;
  isHighlighted: boolean;
  isSelected: boolean;
}

// TODO Ref Typing
export const Option: React.FC<OptionProps> = forwardRef(({ label, isHighlighted, isSelected, ...props }, ref) => {
  const classes = clsx({
    'bg-violet-400': isHighlighted && !isSelected,
    'bg-violet-700': isSelected,
    'bg-violet-500': isSelected && isHighlighted
  });

  return (
    //  @ts-ignore
    <li className={`transition-all px-4 text-left cursor-pointer select-none ${classes}`} {...props} ref={ref}>
      {label}
    </li>
  );
});
