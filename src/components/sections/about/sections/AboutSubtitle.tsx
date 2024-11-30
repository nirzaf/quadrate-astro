import React from 'react';
import { motion } from 'framer-motion';

interface AboutSubtitleProps {
  subtitle: string;
}

export const AboutSubtitle: React.FC<AboutSubtitleProps> = ({ subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="max-w-xl text-center"
    >
      <div className="inline-block bg-[#FFFFFF] px-6 py-3 rounded-full shadow-md">
        <p className="text-lg text-[#000000]/70 bg-gradient-to-r from-[#0607E1] via-[#0A25C9] to-[#0B48D0] bg-clip-text text-transparent">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}; 