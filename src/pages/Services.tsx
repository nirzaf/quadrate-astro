import React from 'react';
import { motion } from 'framer-motion';
import ServicesGrid from '@/components/services/ServicesGrid';
import WhyChooseUs from '@/components/services/WhyChooseUs';

/**
 * Services page component showcasing our service offerings and unique value propositions
 * Features:
 * - Clean design with Chrysler Blue accents
 * - Subtle gradient backgrounds with blue opacity
 * - Smooth staggered animations
 * - Responsive and mobile-optimized layout
 */
const ServicesPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-[#0607E1]/5">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={sectionVariants}
        >
          <p className="text-[#000000]/70 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid Section */}
        <motion.div
          className="mb-24 bg-white/80 backdrop-blur-sm rounded-xl 
                     shadow-lg border border-[#0607E1]/10"
          variants={sectionVariants}
        >
          <ServicesGrid />
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="bg-gradient-to-r from-white via-[#0607E1]/5 to-white 
                     rounded-xl p-8 shadow-lg border border-[#0607E1]/10"
          variants={sectionVariants}
        >
          <WhyChooseUs />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;