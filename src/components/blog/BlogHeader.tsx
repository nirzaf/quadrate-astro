import React from 'react';
import { motion } from 'framer-motion';

const BlogHeader: React.FC = () => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-[#FFFFFF] p-6 rounded-2xl shadow-lg mb-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 via-[#0A25C9]/5 to-[#0B48D0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#000000] relative z-10">
              Our Blog
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl text-center"
          >
            <div className="inline-block bg-[#FFFFFF] px-6 py-3 rounded-full shadow-md">
              <p className="text-lg text-[#000000]/70 bg-gradient-to-r from-[#0607E1] via-[#0A25C9] to-[#0B48D0] bg-clip-text text-transparent">
                Insights and updates from the world of technology
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogHeader;
