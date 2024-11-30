import React from 'react';
import { motion } from 'framer-motion';
import { PricingPlan } from '@/data/pricingData';
import { PricingCard } from '@/components/pricing/PricingCard';

interface PricingCardContainerProps {
  plans: PricingPlan[];
}

export const PricingCardContainer: React.FC<PricingCardContainerProps> = ({
  plans,
}) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative"
        >
          <PricingCard 
            plan={plan} 
            isPopular={plan.popular}
          />
        </motion.div>
      ))}
    </div>
  );
};