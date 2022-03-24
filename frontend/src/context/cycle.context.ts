import React from 'react';
import { CycleQuery } from '../graphql/generated';
export interface ICycleContext {
  cycle: CycleQuery['cycle'];
}

export const CycleContext = React.createContext<ICycleContext | undefined>(undefined);

CycleContext.displayName = 'Cycle context';
