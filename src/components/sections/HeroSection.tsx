import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  heroImage?: {
    src: string;
    alt: string;
  };
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
}

const AnimatedLetter: React.FC<{ letter: string; index: number }> = ({ letter, index }) => (
  <motion.span
    initial={{ 
      opacity: 0,
      x: -100,
      rotate: -180,
      scale: 0
    }}
    animate={{ 
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1
    }}
    transition={{
      duration: 0.8,
      delay: index * 0.05,
      type: "spring",
      stiffness: 150,
      damping: 15
    }}
    className={`inline-block transform cursor-default font-inter
      ${letter === ' ' ? 'mx-[3px]' : 'mx-[0.5px]'}
      hover:text-[#0607E1] hover:scale-110 transition-colors duration-300
      font-semibold tracking-tight`}
    style={{
      transformOrigin: "center center"
    }}
  >
    {letter === ' ' ? '\u00A0' : letter}
  </motion.span>
);

const AnimatedWord: React.FC<{ word: string }> = ({ word }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="inline-block mx-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            color: isHovered ? '#0607E1' : '#000000',
          }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.03,
            type: "spring",
            stiffness: 150,
            damping: 15
          }}
          className="inline-block transform-gpu font-plusJakartaSans"
          style={{ 
            display: 'inline-block',
            backfaceVisibility: 'hidden'
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const HeroSection = ({
  heroImage,
  primaryButton,
  secondaryButton,
}: HeroSectionProps): JSX.Element => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    "Transform Your Digital Presence",
    "Startups Scale Their Operations",
    "Businesses Reach New Heights",
    "Teams Collaborate Effectively",
    "Ideas Transform Into Reality"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section className="relative overflow-hidden bg-[#FFFFFF] pt-24 pb-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-4 mt-4"
            >
              {/* Company Name - Updated Font */}
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold tracking-tight min-h-[60px] flex items-center justify-center lg:justify-start overflow-visible
                  font-montserrat relative z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                <motion.div 
                  className="flex flex-wrap justify-center lg:justify-start tracking-tighter py-2 w-full"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                  }}
                >
                  {/* First Line - Quadrate */}
                  <div className="w-full text-center lg:text-left lg:w-auto lg:inline">
                    {"Quadrate".split('').map((letter, index) => (
                      <AnimatedLetter key={`first-${index}`} letter={letter} index={index} />
                    ))}
                  </div>
                  {/* Space between words for desktop */}
                  <div className="hidden lg:inline">&nbsp;</div>
                  {/* Second Line - Tech Solutions */}
                  <div className="w-full text-center lg:text-left lg:w-auto lg:inline">
                    {"Tech Solutions".split('').map((letter, index) => (
                      <AnimatedLetter 
                        key={`second-${index}`} 
                        letter={letter} 
                        index={index + "Quadrate".length} 
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.h2>

              {/* Helps Text - 3D Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative h-[40px] flex items-center justify-center lg:justify-start perspective-1000"
              >
                <motion.h3 
                  className="text-3xl lg:text-4xl font-semibold relative z-10 cursor-default
                    text-[#0607E1] hover:text-[#0A25C9]
                    transition-all duration-500 ease-in-out transform-gpu
                    -mt-2 font-outfit"
                  initial={{ rotateX: -30, y: 20, opacity: 0 }}
                  animate={{ rotateX: 0, y: 0, opacity: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <motion.span
                    className="inline-block relative"
                    whileHover={{
                      textShadow: "0 4px 8px rgba(6,7,225,0.3)"
                    }}
                  >
                    {/* 3D Text Layers */}
                    <span className="absolute -z-10 text-[#0607E1]/10" 
                      style={{ transform: 'translateZ(-2px) translateY(2px)' }}>
                      Helps
                    </span>
                    <span className="absolute -z-20 text-[#0607E1]/5" 
                      style={{ transform: 'translateZ(-4px) translateY(4px)' }}>
                      Helps
                    </span>
                    <span className="relative z-10">
                      Helps
                    </span>
                  </motion.span>
                </motion.h3>

                {/* Subtle Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 via-transparent to-[#0607E1]/5 rounded-xl"
                  style={{ transform: 'translateZ(-6px)' }}
                  animate={{
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Main Heading - Enhanced Animation */}
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold tracking-tight h-[100px] flex items-center justify-center lg:justify-start -mt-2
                  font-plusJakartaSans antialiased perspective-1000"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={textIndex}
                      initial={{ 
                        opacity: 0,
                        rotateX: -90,
                        y: 50
                      }}
                      animate={{ 
                        opacity: 1,
                        rotateX: 0,
                        y: 0
                      }}
                      exit={{ 
                        opacity: 0,
                        rotateX: 90,
                        y: -50
                      }}
                      transition={{ 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 150,
                        damping: 20
                      }}
                      className="flex flex-wrap justify-center lg:justify-start transform-gpu"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {phrases[textIndex].split(' ').map((word, index) => (
                        <AnimatedWord 
                          key={`${textIndex}-${index}`} 
                          word={word} 
                        />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.h1>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                <button
                  onClick={primaryButton.onClick}
                  className="px-8 py-3 bg-[#0607E1] text-white rounded-lg hover:bg-[#0A25C9] transition-colors duration-300"
                >
                  {primaryButton.text}
                </button>
                <button
                  onClick={secondaryButton.onClick}
                  className="px-8 py-3 border-2 border-[#0607E1] text-[#0607E1] rounded-lg hover:bg-[#0607E1] hover:text-white transition-colors duration-300"
                >
                  {secondaryButton.text}
                </button>
              </motion.div>
            </motion.div>

            {/* Image Section - Hidden on Mobile */}
            {heroImage && (
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};