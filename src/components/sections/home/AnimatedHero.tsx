import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { HeroData } from '@/types';
import { fadeInUpVariants } from '@/config/animations';

const defaultHeroData: HeroData = {
  backgroundImage: '/images/hero-bg.jpg',
  heroImage: {
    src: '/images/hero-image.jpg',
    alt: 'Quadrate Tech Solutions Hero',
  },
  primaryButton: {
    text: 'Get Started',
    onClick: () => {
      // Add your click handler here
      console.log('Primary button clicked');
    },
  },
  secondaryButton: {
    text: 'Learn More',
    onClick: () => {
      // Add your click handler here
      console.log('Secondary button clicked');
    },
  },
};

interface AnimatedHeroProps {
  /** Optional hero section configuration data */
  data?: Partial<HeroData>;
  /** Optional className for custom styling */
  className?: string;
  /** Optional animation delay in seconds */
  animationDelay?: number;
}

/**
 * AnimatedHero component displays the main hero section with animations
 * Features:
 * - Smooth fade-in animation with configurable delay
 * - Flexible content structure with React nodes
 * - TypeScript type safety with proper interfaces
 * - Customizable styles through className
 * - Integration with shared animation configurations
 */
export const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  data,
  className = '',
  animationDelay = 0.2
}) => {
  const heroData: HeroData = { ...defaultHeroData, ...data };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          ...fadeInUpVariants.hidden,
          transition: { duration: 0.6 }
        },
        visible: {
          ...fadeInUpVariants.visible,
          transition: { duration: 0.6, delay: animationDelay }
        }
      }}
    >
      <HeroSection
        heroImage={{
          src: heroData.backgroundImage,
          alt: "Hero Background"
        }}
        primaryButton={heroData.primaryButton}
        secondaryButton={heroData.secondaryButton}
      />
    </motion.div>
  );
};
