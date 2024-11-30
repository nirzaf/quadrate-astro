import React from 'react';
import { motion } from 'framer-motion';

interface ContactContainerProps {
  children: React.ReactNode;
}

const ContactContainer: React.FC<ContactContainerProps> = ({ children }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative container py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        {children}
      </div>
    </motion.section>
  );
};

export default ContactContainer;
