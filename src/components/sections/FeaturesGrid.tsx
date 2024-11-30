import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Layers, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Custom Development",
    description: "Tailored solutions built with cutting-edge technology"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security for your business applications"
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "Global Reach",
    description: "Solutions that scale across borders and cultures"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Optimized performance for seamless user experience"
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Scalable Architecture",
    description: "Built to grow with your business needs"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Integration",
    description: "Smart solutions powered by artificial intelligence"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ECF1F5] via-[#98CCF8]/5 to-[#C0F0F9]/10 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-[#98CCF8]/10 via-[#A6ECFA]/5 to-transparent rounded-full transform rotate-12 animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-[#C0F0F9]/10 via-[#98CCF8]/5 to-transparent rounded-full transform -rotate-12 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-[#040BAB]">
            Cutting-Edge Features
          </h2>
          <p className="text-[#768EB4] text-lg max-w-2xl mx-auto">
            Discover why leading businesses choose our innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#98CCF8]/10 to-[#C0F0F9]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative p-8 rounded-3xl border border-[#768EB4]/10 bg-white/50 backdrop-blur-sm hover:border-[#5B7CCA]/30 transition-colors duration-300">
                <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-[#5B7CCA] to-[#373FEC] text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#040BAB]">{feature.title}</h3>
                <p className="text-[#768EB4]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
