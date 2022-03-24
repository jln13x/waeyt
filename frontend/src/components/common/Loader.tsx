import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return <FaSpinner className="animate-spin text-4xl text-emerald-300" />;
};
