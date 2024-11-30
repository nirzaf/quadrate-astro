import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Rocket, Target, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CompanyValues: React.FC = () => {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Revolutionizing businesses through cutting-edge software solutions and fostering digital transformation with unparalleled expertise.",
      color: "from-[#0607E1]/10 to-[#0607E1]/5"
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "Setting new standards in technology solutions and becoming the catalyst for digital success in the global marketplace.",
      color: "from-[#0607E1]/5 to-[#0607E1]/10"
    },
    {
      icon: Building2,
      title: "Our Values",
      description: "Excellence, integrity, and innovation drive everything we do, ensuring the highest quality solutions for our clients.",
      color: "from-[#0607E1]/10 to-[#0607E1]/5"
    },
    {
      icon: Rocket,
      title: "Our Promise",
      description: "Dedicated partnership and tailored solutions that ensure your long-term success and digital transformation.",
      color: "from-[#0607E1]/5 to-[#0607E1]/10"
    }
  ];

  return (
    <section className="container py-16 bg-[#FFFFFF]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-[#000000]/70 max-w-2xl mx-auto">
          Experience excellence in technology solutions with our commitment to quality and innovation
        </p>
      </motion.div>

      {/* Values Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group h-full bg-[#FFFFFF] hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-6 relative">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="h-10 w-10 text-[#0607E1]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-[#000000] group-hover:text-[#0607E1] transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#000000]/70 leading-relaxed text-sm group-hover:text-[#000000]/80 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyValues;