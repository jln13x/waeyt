import { motion } from 'framer-motion';
import React from 'react';

interface SlideYProps {
  y?: number;
}

export const SlideY: React.FC<SlideYProps> = ({ y = 200, children }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -y }} animate={{ opacity: 1, y: 0 }} exit={{ y, opacity: 0 }}>
      {children}
    </motion.div>
  );
};
