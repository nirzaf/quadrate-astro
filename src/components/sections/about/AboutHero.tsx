import React from 'react';
import { motion } from 'framer-motion';
import { AboutTitle } from './sections/AboutTitle';
import { AboutSubtitle } from './sections/AboutSubtitle';

interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ title, subtitle }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0607E1]/5" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center">
          <AboutTitle title={title} />
          <AboutSubtitle subtitle={subtitle} />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutHero;