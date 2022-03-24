import { Placeholder } from 'components/select/Placeholder';
import { SelectedItem } from 'components/select/SelectedItem';
import React, { forwardRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface ToggleButtonProps {
  placeholder?: string;
  selectedItemLabel?: string;
  menuIsOpen: boolean;
}

// TODO Ref Typing
export const ToggleButton: React.FC<ToggleButtonProps> = forwardRef(
  ({ placeholder, selectedItemLabel, menuIsOpen, ...props }, ref) => {
    return (
      //  @ts-ignore
      <div className="flex select-none items-center justify-between px-3 py-1 text-white" {...props} ref={ref}>
        {selectedItemLabel ? <SelectedItem text={selectedItemLabel} /> : <Placeholder text={placeholder} />}
        <div className="">
          <BiChevronDown />
        </div>
      </div>
    );
  }
);
