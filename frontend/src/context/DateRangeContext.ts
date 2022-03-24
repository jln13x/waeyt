import { OnRangeSelected } from 'components/date-range';
import React from 'react';

interface IDateRangeContext {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;

  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;

  isSelecting: boolean;
  setIsSelecting: React.Dispatch<React.SetStateAction<boolean>>;

  hoveredEndDate: Date;
  setHoveredEndDate: React.Dispatch<React.SetStateAction<Date>>;

  onRangeSelected?: OnRangeSelected;
}

export const DateRangeContext = React.createContext<IDateRangeContext | undefined>(undefined);
