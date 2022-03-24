import React from 'react';

interface AddDataPointProps {}

// Accept callback
export const AddDataPoint: React.FC<AddDataPointProps> = ({}) => {
  return <p className="text-sm font-medium uppercase text-violet-300">Add</p>;
};
