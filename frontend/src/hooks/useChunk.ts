import { ChunkContext } from 'context/ChunkContext';
import { useContextWrapper } from 'hooks/useContextWrapper';

export const useChunk = () => {
  return useContextWrapper(ChunkContext);
};
