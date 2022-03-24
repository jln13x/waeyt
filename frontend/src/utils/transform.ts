import { format } from 'date-fns';

export interface Transformer<T, P> {
  transform: (value: T) => P;
  reverseTransform: (value: P) => T;
}

export const transformDateToString = (): Transformer<Date, string> => {
  return {
    transform: date => format(date, 'yyyy-MM-dd'),
    reverseTransform: string => new Date(string)
  };
};
 