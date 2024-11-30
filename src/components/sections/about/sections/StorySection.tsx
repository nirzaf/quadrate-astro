import React from 'react';
import { motion, Variants } from 'framer-motion';

const storyVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.3 }
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const textVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 10,
    transition: { duration: 0.3 }
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export const StorySection: React.FC = () => {
  return (
    <motion.div 
      variants={storyVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-4"
    >
      <motion.h2 
        variants={textVariants}
        className="text-3xl font-bold tracking-tight text-[#000000]"
      >
        Our Story
      </motion.h2>
      <motion.p 
        variants={textVariants}
        className="text-[#000000]/70 leading-relaxed"
      >
        Founded in 2009 and headquartered in Kandy, Sri Lanka, Quadrate Tech Solutions has established itself as a prominent player in the software development industry. We specialize in creating custom software solutions, including mobile apps, web-based applications, and enterprise software systems.
      </motion.p>
    </motion.div>
  );
};