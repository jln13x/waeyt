import React from 'react';

interface IBreadcrumbContext {
  setPage: any;
}

export const BreadcrumbContext = React.createContext<IBreadcrumbContext | undefined>(undefined);
