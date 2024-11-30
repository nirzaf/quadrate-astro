import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 200, damping: 20 }
};

const slideDown = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.2 }
};

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.section 
        {...fadeIn}
        className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-white to-gray-50/50"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-purple-100 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-8 md:py-12 lg:py-24">
          <motion.div 
            {...scaleIn}
            className="flex flex-col items-center space-y-6 text-center"
          >
            {/* 404 Text */}
            <motion.h1 
              {...slideDown}
              className="font-bold text-8xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              404
            </motion.h1>

            {/* Message */}
            <motion.div 
              {...slideDown}
              className="space-y-2"
            >
              <h2 className="text-2xl font-semibold text-gray-900">Page Not Found</h2>
              <p className="max-w-[500px] text-gray-600 text-lg">
                We couldn't find "{location.pathname}". The page you're looking for might have been removed, renamed, or doesn't exist.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              {...slideDown}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button 
                onClick={() => navigate(-1)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
              
              <Button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Home className="w-4 h-4" />
                Return Home
              </Button>
              
              <Button 
                onClick={() => navigate('/search')}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search Site
              </Button>
            </motion.div>

            {/* Helpful Links */}
            <motion.div 
              {...slideDown}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-gray-600 mb-4">You might want to check these pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { path: '/services', label: 'Our Services' },
                  { path: '/about', label: 'About Us' },
                  { path: '/contact', label: 'Contact Us' },
                  { path: '/blog', label: 'Blog' }
                ].map((link) => (
                  <Button
                    key={link.path}
                    variant="ghost"
                    onClick={() => navigate(link.path)}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default NotFoundPage;
