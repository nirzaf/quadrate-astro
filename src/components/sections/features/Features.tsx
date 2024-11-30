import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FiCode, FiLayers, FiShield, FiSmartphone, FiZap, FiGlobe } from 'react-icons/fi';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

interface Feature {
  icon: IconType;
  name: string;
  description: string;
  link?: string;
}

const features: Feature[] = [
  {
    icon: FiCode,
    name: "Modern Development",
    description: "Cutting-edge tech stack with React, TypeScript, and modern tooling",
  },
  {
    icon: FiLayers,
    name: "Scalable Architecture",
    description: "Built with scalability in mind using best practices and design patterns",
  },
  {
    icon: FiShield,
    name: "Enterprise Security",
    description: "Advanced security measures to protect your business data",
  },
  {
    icon: FiSmartphone,
    name: "Mobile First",
    description: "Responsive design that works seamlessly across all devices",
  },
  {
    icon: FiZap,
    name: "High Performance",
    description: "Optimized for speed and efficiency with modern web standards",
  },
  {
    icon: FiGlobe,
    name: "Global Scale",
    description: "Ready for international deployment with i18n support",
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container">
        <AnimatedHeading 
          text="Our Features" 
          className="mb-8"
        />
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-6 text-lg leading-8 text-[#010000]/70">
            Empower your business with our comprehensive suite of solutions designed to drive growth and innovation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col relative group"
              >
                {/* Card Background with Sky Blue Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#98CCF8]/5 to-transparent rounded-2xl -z-10 group-hover:from-[#98CCF8]/10 transition-colors duration-300" />
                
                <div className="relative rounded-2xl border border-[#98CCF8]/10 bg-white/50 p-6 group-hover:border-[#98CCF8]/30 transition-all duration-300">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-[#010000]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#98CCF8]/10 group-hover:bg-[#98CCF8]/20 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-[#010000]" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#010000]/70">
                    <p className="flex-auto">{feature.description}</p>
                    {feature.link && (
                      <p className="mt-6">
                        <a
                          href={feature.link}
                          className="text-sm font-semibold leading-6 text-[#010000] hover:text-[#98CCF8] transition-colors duration-300"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    )}
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
