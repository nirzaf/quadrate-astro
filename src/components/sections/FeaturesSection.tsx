import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FiCode, FiLayers, FiShield, FiSmartphone, FiZap, FiGlobe } from 'react-icons/fi';

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: FiCode,
    title: "Modern Development",
    description: "Cutting-edge tech stack with React, TypeScript, and modern tooling"
  },
  {
    icon: FiLayers,
    title: "Scalable Architecture",
    description: "Built with scalability in mind using best practices and design patterns"
  },
  {
    icon: FiShield,
    title: "Enterprise Security",
    description: "Advanced security measures to protect your business data"
  },
  {
    icon: FiSmartphone,
    title: "Mobile First",
    description: "Responsive design that works seamlessly across all devices"
  },
  {
    icon: FiZap,
    title: "High Performance",
    description: "Optimized for speed and efficiency with modern web standards"
  },
  {
    icon: FiGlobe,
    title: "Global Scale",
    description: "Ready for international deployment with i18n support"
  }
];

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative mb-6">
        {/* Icon Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040BAB]/10 to-[#373FEC]/10 rounded-xl blur-xl" />
        
        {/* Icon Container */}
        <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#040BAB] to-[#373FEC]">
          <feature.icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#040BAB] to-[#373FEC] bg-clip-text text-transparent">
        {feature.title}
      </h3>
      
      <p className="text-[#768EB4]">
        {feature.description}
      </p>
    </motion.div>
  );
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#ECF1F5]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#040BAB] to-[#373FEC] bg-clip-text text-transparent">
            Cutting-Edge Features
          </h2>
          <p className="text-xl text-[#768EB4] max-w-2xl mx-auto">
            Discover the powerful capabilities that set our solutions apart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-0 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(4, 11, 171, 0.1), transparent)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </section>
  );
};
