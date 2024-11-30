import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const ServiceStats: React.FC = () => {
  const stats = [
    { value: 98, label: 'Client Satisfaction', suffix: '%' },
    { value: 250, label: 'Projects Completed', suffix: '+' },
    { value: 24, label: 'Hour Support', suffix: '/7' },
    { value: 5, label: 'Years Experience', suffix: '+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-primary/5 rounded-xl px-4"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-bold text-primary">
            <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
          </div>
          <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
};

export default ServiceStats; 