import { SlideY } from 'components/animations/SlideY';
import { Surface } from 'components/common/Surface';
import { CycleCard } from 'components/cycle/CycleCard';
import { AnimatePresence, motion } from 'framer-motion';
import { useActiveCycleQuery, useCyclesQuery, useEntryTypesQuery } from 'graphql/generated';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const cyclesPath = '/cycles';

const Cycles = () => {
  const { t } = useTranslation('cycle');
  const { data: cyclesData } = useCyclesQuery();
  const { data: activeCycleData } = useActiveCycleQuery();

  return (
    <div className="">
      <div className="mx-auto my-16 flex w-2/4">
        <div className="w-full">
          {activeCycleData?.activeCycle && (
            <AnimatePresence exitBeforeEnter initial={false}>
              <SlideY y={50} key={activeCycleData?.activeCycle.id}>
                <CycleCard cycle={activeCycleData.activeCycle} />
              </SlideY>
            </AnimatePresence>
          )}
        </div>
      </div>
      <div className="my-4 bg-background-900 py-2 pl-24">
        <p className="font-2xl uppercase tracking-wide text-white">Inactive cycles</p>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-12 px-24">
        {cyclesData?.cycles.map(cycle =>
          cycle.active ? null : (
            <motion.div layout key={cycle.id}>
              <CycleCard cycle={cycle} isInactive />
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    return {
      props: {}
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['cycle', 'common']))
    }
  };
};

export default Cycles;
