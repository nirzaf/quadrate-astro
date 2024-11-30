import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { StorySection } from './sections/StorySection';
import { ValuesSection } from './sections/ValuesSection';
import { ImageSection } from './sections/ImageSection';

// Predefined animation variants with simple, stable configurations
const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3,
      when: "afterChildren"
    }
  }
};

const contentVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const AboutContent: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="container py-12 sm:py-16"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div 
            variants={contentVariants}
            className="space-y-8"
          >
            <StorySection />
            <ValuesSection />
          </motion.div>
          
          <ImageSection />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};
