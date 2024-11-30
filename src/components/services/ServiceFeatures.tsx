import React from 'react';
import { motion } from 'framer-motion';

const ServiceFeatures: React.FC = () => {
  const features = [
    { title: 'Tailored', description: 'Customizable packages to meet your specific needs and budget' },
    { title: 'Expert', description: 'Guidance from our team of Microsoft experts' },
    { title: 'Seamless', description: 'Migration with minimal downtime and disruption' }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container py-8 md:py-12 lg:py-24 bg-muted/50 rounded-lg"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Quadrate Tech: Your Affordable Microsoft 365 Partner</h2>
        <p className="text-muted-foreground">
          We offer competitive pricing for Microsoft 365 solutions, including Microsoft Exchange and the Office suite, without compromising on quality or support.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <motion.div 
            key={feature.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServiceFeatures;
