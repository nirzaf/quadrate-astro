import React from 'react';
import { motion } from 'framer-motion';
import PricingGrid from '@/components/pricing/PricingGrid';
import CustomSolutionCard from '@/components/pricing/CustomSolutionCard';

/**
 * Pricing page component that displays pricing plans and custom solutions
 * Features:
 * - Clean, minimal design with Chrysler Blue accents
 * - Subtle gradient backgrounds with 5% blue opacity
 * - Smooth animations for enhanced engagement
 * - Responsive and mobile-friendly layout
 * - Clear visual hierarchy with consistent spacing
 */
const Pricing: React.FC = () => {
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

  const itemVariants = {
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
          variants={itemVariants}
        >
          <h1 className="text-[#000000] text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#000000]/70 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
        </motion.div>

        {/* Pricing Grid Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <PricingGrid />
        </motion.div>

        {/* Custom Solution Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm 
                     border border-[#0607E1]/10 rounded-lg shadow-lg"
        >
          <CustomSolutionCard />
        </motion.div>

        {/* FAQ or Additional Info Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 text-center"
        >
          <p className="text-[#000000]/60">
            Have questions about our pricing? {' '}
            <a 
              href="/contact" 
              className="text-[#0607E1] hover:text-[#0A25C9] transition-colors duration-200 
                       border-b border-[#0607E1]/20 hover:border-[#0A25C9]"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Pricing;
