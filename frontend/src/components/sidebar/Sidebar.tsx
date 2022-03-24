import { HStack } from 'components/common/elements/Stack';
import { SidebarActions } from 'components/sidebar/SidebarActions';
import { SidebarItem } from 'components/sidebar/SidebarItem';
import React from 'react';
import { FaPalette } from 'react-icons/fa';
import { GoArchive } from 'react-icons/go';

export const Sidebar: React.FC = () => {
  return (
    <nav className="flex h-full w-full flex-col items-center justify-center self-center  bg-background-700 drop-shadow-lg">
      <div className="grid h-[5vh] w-full place-items-center border-b-[0.5px] border-b-background-400 px-8">
        <p className="text-2xl text-emerald-300">W</p>
      </div>

      <HStack className="grow">
        <SidebarItem href={'/cycles'} label="Cycles" icon={GoArchive} />
        <SidebarItem href={'/styleguide'} label="Styleguide" icon={FaPalette} />
      </HStack>

      <div className="w-10/12 py-8">
        <hr className="border-background-600" />
      </div>

      <div className="mt-4 w-full">
        <SidebarActions />
      </div>
    </nav>
  );
};
