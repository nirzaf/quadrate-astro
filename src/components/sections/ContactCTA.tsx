import React from 'react';
import { motion } from 'framer-motion';

interface ContactCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

const container = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title,
  description,
  buttonText,
  buttonUrl,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#040BAB] via-[#373FEC] to-[#5B7CCA] py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-white/5 rounded-full transform rotate-45 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-white/5 rounded-full transform -rotate-45 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold sm:text-5xl mb-6 text-white">
            {title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            {description}
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.button
              variants={item}
              className="px-8 py-4 rounded-full bg-white text-[#040BAB] font-semibold hover:bg-white/90 transition-colors duration-300"
              onClick={() => window.open(buttonUrl, '_blank')}
            >
              {buttonText}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
