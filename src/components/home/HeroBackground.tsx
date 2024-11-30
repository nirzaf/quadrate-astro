import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#747BFF]/30 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#646CFF]/20 blur-3xl"
      />
    </div>
  );
};

export default HeroBackground;
