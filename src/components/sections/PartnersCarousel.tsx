import React from 'react';
import { motion } from 'framer-motion';

interface PartnersCarouselProps {
  logos: Array<{
    src: string;
    alt: string;
  }>;
}

export const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ logos }) => {
  return (
    <div className="overflow-hidden py-8 relative">
      <motion.div
        className="flex space-x-16"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div 
            key={`logo-1-${index}`} 
            className="flex-shrink-0 px-4 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-28 w-auto object-contain hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate set of logos for seamless loop */}
        {logos.map((logo, index) => (
          <div 
            key={`logo-2-${index}`} 
            className="flex-shrink-0 px-4 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-28 w-auto object-contain hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}; 