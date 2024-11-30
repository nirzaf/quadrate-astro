import React from 'react';
import { motion } from 'framer-motion';

interface BlogPostContainerProps {
  children: React.ReactNode;
}

const BlogPostContainer: React.FC<BlogPostContainerProps> = ({ children }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        {children}
      </div>
    </motion.article>
  );
};

export default BlogPostContainer;
