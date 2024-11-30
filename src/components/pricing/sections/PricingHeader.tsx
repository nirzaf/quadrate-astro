import React from 'react';
import { motion } from 'framer-motion';

export const PricingHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-[#000000] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Simple, Transparent Pricing
      </motion.h2>
      <motion.p 
        className="text-lg text-[#000000]/70 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Choose the perfect plan for your business needs
      </motion.p>
    </div>
  );
}; 