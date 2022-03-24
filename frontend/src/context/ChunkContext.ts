import React, { Dispatch, SetStateAction } from 'react';

interface IChunkContext {
  currentChunk: number;
  setChunk: Dispatch<SetStateAction<number>>;
  totalChunks: number;
  previousChunk: number | null;
  nextChunk: number | null;
  setNext: () => void;
  setPrevious: () => void;
}

export const ChunkContext = React.createContext<IChunkContext | undefined>(undefined);

ChunkContext.displayName = 'Chunk context';
