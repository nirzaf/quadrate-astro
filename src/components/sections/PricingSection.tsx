import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '@/data/pricingData';
import { PricingCardContainer } from '@/components/pricing/sections/PricingCardContainer';
import CustomSolutionCard from '@/components/pricing/CustomSolutionCard';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

interface PricingSectionProps {
}

const PricingSection: React.FC<PricingSectionProps> = () => {
  return (
    <section className="py-16">
      <div className="container">
        <AnimatedHeading 
          text="Simple Transparent Pricing" 
          className="mb-4"
        />
        <motion.p 
          className="text-lg text-[#000000]/70 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Choose the perfect plan for your business needs
        </motion.p>
        {/* Pricing Cards Container */}
        <PricingCardContainer plans={pricingPlans} />

        {/* Custom Solution Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <CustomSolutionCard />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
