import Big from 'big.js';
import { ChunkContext } from 'context/ChunkContext';
import { differenceInDays } from 'date-fns';
import { CycleQuery } from 'graphql/generated';
import React, { useCallback, useMemo, useState } from 'react';

interface ChunkContextProviderProps {
  cycle: CycleQuery['cycle'];
}

export const ChunkContextProvider: React.FC<ChunkContextProviderProps> = ({ cycle, children }) => {
  const [chunk, setChunk] = useState(1);

  const startDate = new Date(cycle.startDate);
  const endDate = new Date(cycle.endDate);
  const chunkLength = cycle.chunkLength;

  const dayDifference = new Big(differenceInDays(endDate, startDate));
  // Round up because last the chunk is still considered
  const totalChunks = dayDifference.div(chunkLength).round(0, Big.roundUp);


  const previousChunk = chunk > 1 ? chunk - 1 : null;
  const nextChunk = totalChunks.gt(chunk) ? chunk + 1 : null;

  const setPrevious = useCallback(() => {
    previousChunk && setChunk(previousChunk);
  }, [previousChunk]);

  const setNext = useCallback(() => {
    nextChunk && setChunk(nextChunk);
  }, [nextChunk]);

  const values = useMemo(
    () => ({
      currentChunk: chunk,
      setChunk,
      totalChunks: totalChunks.toNumber(),
      previousChunk,
      nextChunk,
      setPrevious,
      setNext
    }),
    [chunk, setChunk, totalChunks, previousChunk, nextChunk, setPrevious, setNext]
  );

  return <ChunkContext.Provider value={values}>{children}</ChunkContext.Provider>;
};
