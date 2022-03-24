import { CycleContext } from '../context/cycle.context';
import { useContextWrapper } from './useContextWrapper';

export const useCycle = () => {
  return useContextWrapper(CycleContext);
};
