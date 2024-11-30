import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
}

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const HeroSection: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
}) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FFFFFF]">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-bl from-[#0607E1]/20 via-[#0607E1]/10 to-transparent rounded-full transform rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-[#0607E1]/20 via-[#0607E1]/10 to-transparent rounded-full transform -rotate-45 animate-pulse" />
        {/* Additional decorative element */}
        <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-gradient-to-r from-[#0607E1]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0607E1] via-[#0607E1]/80 to-[#0607E1] bg-clip-text text-transparent">
                {t(title)}
              </span>
            </h1>
            <p className="text-xl text-[#000000]/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t(subtitle)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0607E1] to-[#0607E1]/90 text-[#FFFFFF] font-semibold hover:shadow-lg hover:shadow-[#0607E1]/25 transition-all duration-300"
                onClick={primaryButton.onClick}
              >
                {t(primaryButton.text)}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-[#0607E1] text-[#0607E1] font-semibold hover:bg-[#0607E1]/5 transition-colors duration-300"
                onClick={secondaryButton.onClick}
              >
                {t(secondaryButton.text)}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative aspect-square max-w-xl mx-auto hidden lg:block"
          >
            {/* Enhanced card design */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/10 to-[#0607E1]/10 rounded-3xl opacity-80" />
            <div className="absolute inset-0 backdrop-blur-xl rounded-3xl" />
            <div className="absolute inset-0 bg-[#FFFFFF]/50 rounded-3xl shadow-2xl border border-[#000000]/10" />
            {/* Additional inner glow */}
            <div className="absolute inset-8 bg-gradient-to-br from-[#0607E1]/20 via-transparent to-[#0607E1]/20 rounded-2xl filter blur-md" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
