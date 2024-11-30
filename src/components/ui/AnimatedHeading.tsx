import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  className = '',
  align = 'center',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <motion.h2
      className={`font-bold tracking-tight ${sizeClasses[size]} ${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-block">
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block font-montserrat"
            initial={{ 
              opacity: 0,
              y: 20,
              rotateX: -90
            }}
            whileInView={{ 
              opacity: 1,
              y: 0,
              rotateX: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.02,
              type: "spring",
              stiffness: 150,
              damping: 15
            }}
            whileHover={{
              color: '#0607E1',
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    </motion.h2>
  );
};

export default AnimatedHeading; 