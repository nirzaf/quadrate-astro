import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  { title: 'Fast', description: 'Expert solutions, delivered quickly' },
  { title: 'Precise', description: 'Tailored to your exact needs' },
  { title: 'Reliable', description: 'Consistent, dependable service' }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0607E1]/5 via-[#0A25C9]/5 to-[#0B48D0]/5 opacity-50" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-block bg-[#FFFFFF] px-8 py-4 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">Why Choose Us</h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-[#000000]/70 max-w-2xl mx-auto bg-[#FFFFFF] px-6 py-3 rounded-full shadow-md">
              We combine expertise with innovation to deliver exceptional results
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#FFFFFF] p-8 rounded-2xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0607E1]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <h3 className="text-2xl font-bold text-[#000000] mb-4 relative z-10 group-hover:text-[#0607E1] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#000000]/70 relative z-10 group-hover:text-[#000000]/80 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
