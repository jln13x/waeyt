import React from 'react';
import { GoPerson } from 'react-icons/go';
import { IconType } from 'react-icons';

export const SidebarActions = () => {
  return (
    <div className="flex w-full justify-center py-4 px-8 text-background-600">
      <GoPerson />
    </div>
  );
};

interface SidebarActionIconInteface {
  icon: IconType;
}
