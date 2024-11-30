import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '@/data/pricingData';
import PricingCard from './PricingCard';

const PricingGrid: React.FC = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative"
        >
          <PricingCard plan={plan} isPopular={plan.popular} />
        </motion.div>
      ))}
    </div>
  );
};

export default PricingGrid;
