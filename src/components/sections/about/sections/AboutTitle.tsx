import React from 'react';
import { motion } from 'framer-motion';

interface AboutTitleProps {
  title: string;
}

export const AboutTitle: React.FC<AboutTitleProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="bg-[#FFFFFF] p-6 rounded-2xl shadow-lg mb-8 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 via-[#0A25C9]/5 to-[#0B48D0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h1 className="text-4xl md:text-5xl font-bold text-[#000000] relative z-10">
        {title}
      </h1>
    </motion.div>
  );
}; 