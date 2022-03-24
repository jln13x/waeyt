import { Overlay } from 'components/animations/Overlay';
import { H3 } from 'components/common/elements/Heading';
import { PrimaryLink } from 'components/common/PrimaryLink';
import { Surface } from 'components/common/Surface';
import { ToggleCycleActive } from 'components/cycle/ToggleCycleActive';
import { de } from 'date-fns/locale';
import { AnimatePresence } from 'framer-motion';
import { CyclesQuery } from 'graphql/generated';
import { useOverlay } from 'hooks/useOverlay';
import { cyclePath } from 'pages/cycles/[cycle]';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { exactDifferenceInWeeks, formatToLocale } from 'utils/dateUtils';

interface CycleCardProps {
  cycle: CyclesQuery['cycles'][number];
  isInactive?: boolean;
}

export const CycleCard: React.FC<CycleCardProps> = ({ cycle, isInactive }) => {
  const { t } = useTranslation('common');

  const { showOverlay, eventHandler } = useOverlay(isInactive);

  const startDate = new Date(cycle.startDate);
  const endDate = new Date(cycle.endDate);

  const diffInWeeks = exactDifferenceInWeeks(startDate, endDate);
  const diffToLocale = Intl.NumberFormat('de', {
    maximumFractionDigits: 2
  }).format(diffInWeeks.toNumber());

  return (
    <Surface
      variant="dark"
      className={`relative flex flex-col p-4 ${isInactive ? '' : 'shadow-offset'}`}
      {...eventHandler}
    >
      <div className="flex justify-between">
        <div className="">
          <ToggleCycleActive cycle={cycle} />
        </div>
        <HiOutlineDotsVertical className="ml-auto flex text-xl text-emerald-300" />
      </div>
      <div className="flex items-center">
        <H3 className="flex-grow text-center">{cycle.name}</H3>
      </div>
      <div className="py-6 text-center">
        <p className="text-lg font-bold text-white text-opacity-80">
          {formatToLocale(startDate, 'PP', de)} - {formatToLocale(endDate, 'PP', de)}
        </p>
        <p className="font-light text-white text-opacity-40">
          {diffToLocale}{' '}
          {t('week', {
            count: diffInWeeks.toNumber()
          })}
        </p>
      </div>
      <PrimaryLink
        href={{
          pathname: cyclePath,
          query: {
            cycle: cycle.id
          }
        }}
        className="mx-auto flex w-fit"
      >
        {t('view')}
      </PrimaryLink>
      <AnimatePresence exitBeforeEnter>
        {isInactive && showOverlay && <Overlay className="bg-background-800" />}
      </AnimatePresence>
    </Surface>
  );
};
