import React from 'react';
import { motion } from 'framer-motion';
import AboutContainer from '@/components/about/AboutContainer';
import { AboutContent } from '@/components/sections/about/AboutContent';

/**
 * About page component showcasing company story and values
 * Features:
 * - Clean, minimal design with Chrysler Blue accents
 * - Subtle gradient backgrounds and animations
 * - Responsive and mobile-optimized layout
 * - Clear visual hierarchy and spacing
 */
const AboutPage: React.FC = () => {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-white via-white to-[#0607E1]/5"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-[#000000]/70 text-lg max-w-2xl mx-auto">
            Discover our story and what drives us forward
          </p>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg 
                     border border-[#0607E1]/10 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <AboutContainer>
            <AboutContent />
          </AboutContainer>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
