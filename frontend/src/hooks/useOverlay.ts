import React, { useState } from 'react';

export const useOverlay = (enabled = true) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);

  const eventHandler: React.HTMLAttributes<any> = enabled
    ? {
        onPointerEnter: () => setShowOverlay(false),
        onPointerLeave: () => setShowOverlay(true)
      }
    : {};

  return {
    showOverlay,
    eventHandler
  };
};
