import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  icon: React.ReactNode;
  link?: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  color,
  icon,
  link,
  index
}) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-[#FFFFFF] shadow-lg border border-[#000000]/5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0607E1]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative p-8">
        <div className="relative mb-6">
          <div 
            className="w-16 h-16 rounded-2xl mb-6 relative overflow-hidden"
            style={{ backgroundColor: `${color}05` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#000000] mb-4 group-hover:text-[#0607E1] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#000000]/70 mb-6 group-hover:text-[#000000]/80 transition-colors duration-300">
          {description}
        </p>
        {link && (
          <motion.a
            href={link}
            className="inline-flex items-center text-[#0607E1] hover:text-[#0607E1]/80 group-hover:translate-x-2 transition-transform duration-300"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
