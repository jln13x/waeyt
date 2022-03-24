import { BreadcrumbContext } from 'context/BreadcrumbContext';
import { useContext } from 'react';

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    throw new Error('Must be inside a breadcrumb context!');
  }

  return context;
};
