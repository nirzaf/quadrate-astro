import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Removed setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] border-b border-[#000000]/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img
                src="https://ik.imagekit.io/quadrate/QTS%20Logo%20primary.png?updatedAt=1732912040014"
                alt="QTS Logo"
                width={40}
                height={40}
                className="h-10 w-auto brightness-[0.7] contrast-[1.4] [filter:saturate(1.2)_hue-rotate(-10deg)]"
              />
              <span className="ml-2 text-xl font-bold text-[#000000]">QTS</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={link.to}
                    className={`relative text-[#000000]/70 hover:text-[#000000] transition-colors duration-200
                      ${location.pathname === link.to ? 'text-[#000000]' : ''}
                    `}
                  >
                    {link.label}
                    {location.pathname === link.to && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-[#0607E1]/5"
                        layoutId="underline"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              asChild
              className="inline-flex items-center justify-center rounded-md bg-[#000000] px-4 py-2 text-sm font-medium text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200"
            >
              <a href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions">
                Book a Meeting
              </a>
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#000000]/70 hover:text-[#000000] transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-4 pb-3 pt-2 bg-[#FFFFFF] border-t border-[#000000]/5">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={link.to}
                    className={`block px-3 py-2 text-base font-medium text-[#000000]/70 hover:text-[#000000] transition-colors duration-200
                      ${location.pathname === link.to ? 'text-[#000000]' : ''}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4">
                <Button
                  asChild
                  className="w-full bg-[#000000] px-4 py-2 text-sm font-medium text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200"
                >
                  <a href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions">
                    Book a Meeting
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
