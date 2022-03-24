import { m } from 'framer-motion';
import React from 'react';

interface OverlayProps {
  className?: string;
  opacity?: number;
}

export const Overlay: React.FC<OverlayProps> = ({ className, opacity = 0.7 }) => {
  return (
    <m.div
      initial={{ opacity, visibility: 'hidden' }}
      animate={{ opacity, visibility: 'visible' }}
      exit={{ opacity: 0 }}
      className={`absolute top-0 left-0 h-full w-full  ${className}`}
    />
  );
};
