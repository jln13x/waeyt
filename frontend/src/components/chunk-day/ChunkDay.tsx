import { Tag } from 'components/chunk-day/Tag';
import { H3 } from 'components/common/elements/Heading';
import { Icon } from 'components/common/elements/Icon';
import { Surface } from 'components/common/Surface';
import { AddDataPoint } from 'components/cycle/AddDataPoint';
import { DataPoint } from 'components/cycle/DataPoint';
import React from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { BiDotsVertical } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import { HiOutlineArchive, HiOutlineScale } from 'react-icons/hi';

interface ChunkDayProps {}

export const ChunkDay: React.FC<ChunkDayProps> = ({}) => {
  return (
    <Surface variant="dark" className="flex h-72 basis-1/5 flex-col p-4">
      <div className="flex justify-between">
        <H3 className="text-white">13.03.2022</H3>
        {/* <Icon as={BiDotsVertical} className="text-emerald-300" /> */}
      </div>

      <div className="flex grow flex-col justify-center">
        <DataPoint icon={AiOutlineFire}>
          <AddDataPoint />
        </DataPoint>
        <DataPoint icon={HiOutlineScale} data={'80 kg'} />
        <DataPoint icon={HiOutlineArchive} data={'2222 husos'} />
        <DataPoint icon={AiOutlineFire}>
          <AddDataPoint />
        </DataPoint>

        <div className="flex items-center justify-end">
          <BsChevronRight className="text-emerald-300" />
        </div>
      </div>

      {/* <div className="flex gap-2">
        <Tag name="Diet break" backgroundColor="bg-amber-700" backgroundColorRemove="bg-amber-900" removable />

        <Tag name="Test Tag" backgroundColor="bg-cyan-700" backgroundColorRemove="bg-cyan-900" removable />
      </div> */}
    </Surface>
  );
};
