import React from 'react';

export const ChunkContentWrapper: React.FC = ({ children }) => {
  return <div className="flex h-full p-4">{children}</div>;
};
