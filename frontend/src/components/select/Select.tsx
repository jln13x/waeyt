import clsx from 'clsx';
import { Option } from 'components/select/Option';
import { ToggleButton } from 'components/select/ToggleButton';
import { resetIdCounter, useSelect, UseSelectProps } from 'downshift';
import React, { useEffect } from 'react';

export interface SelectOption {
  value: any;
  label: string;
}

interface SelectProps {
  label?: string;
  items: SelectOption[];
  placeholder?: string;
}

export const Select: React.FC<UseSelectProps<SelectOption> & SelectProps> = ({
  label,
  items,
  placeholder,
  ...props
}) => {
  const itemToString = (item: SelectOption) => (item ? item.label : '');

  const { isOpen, selectedItem, getToggleButtonProps, getLabelProps, getMenuProps, highlightedIndex, getItemProps } =
    useSelect({ items, itemToString, ...props });

  const classes = clsx({
    'rounded-b-lg': !isOpen,
  });
  
  const shared = clsx({
    'border-background-600 bg-background-700 transition-all ease-in-out': true,
    'border-b-2': true
  });

  useEffect(() => {
    return () => resetIdCounter();
  }, []);

  return (
    <div className="flex w-full min-w-max flex-col text-white">
      <label {...getLabelProps()} className="self-start text-xs uppercase tracking-wider text-opacity-50">
        {label}
      </label>
      <div className="relative w-full ">
        <div className={`${classes} cursor-pointer rounded-t-lg  border-x-2 border-t-2 ${shared}`}>
          <ToggleButton
            menuIsOpen={isOpen}
            selectedItemLabel={itemToString(selectedItem)}
            placeholder={placeholder}
            {...getToggleButtonProps()}
          />
        </div>
        <ul
          className={`${shared} absolute left-0 z-[9999] -mt-[0.125rem] max-h-44 w-full overflow-y-scroll rounded-b-lg border-x-2 shadow-lg outline-none scrollbar scrollbar-thin scrollbar-thumb-violet-700 scrollbar-thumb-rounded`}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => (
              <Option
                key={`${item}${index}`}
                label={item.label}
                {...getItemProps({ item, index })}
                isHighlighted={index === highlightedIndex}
                isSelected={selectedItem?.label === item.label}
              >
                {itemToString(item)}
              </Option>
            ))}
        </ul>
      </div>
    </div>
  );
};
