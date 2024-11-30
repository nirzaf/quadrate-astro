import React from 'react';
import { motion } from 'framer-motion';

const imageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.4
    }
  }
};

export const ImageSection: React.FC = () => {
  return (
    <motion.div
      variants={imageVariants}
      initial="initial"
      animate="animate"
      className="relative"
    >
      <img
        src="https://ik.imagekit.io/quadrate/tr:w-800/assets/img/about.jpg"
        alt="Quadrate Tech Solutions Team"
        className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
      />
      <motion.div 
        variants={overlayVariants}
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0607E1]/10 to-transparent" 
      />
    </motion.div>
  );
};