import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ServiceHeader: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container relative space-y-6 py-16 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,rgba(6,7,225,0.05),transparent)]" />
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
        >
          Premium IT Solutions
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
        >
          Expert IT Consultation Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
        >
          Transform your business with our comprehensive IT solutions. Our experienced team delivers exceptional service from consultation to completion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
              Schedule a Consultation
            </a>
          </Button>
          <Button size="lg" variant="outline">
            View Services
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceHeader;
