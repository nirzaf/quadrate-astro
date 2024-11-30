import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#000000]/5">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/" className="flex items-center">
                <img
                  src="https://ik.imagekit.io/quadrate/QTS%20Logo%20primary.png?updatedAt=1732912040014"
                  alt="QTS Logo"
                  className="h-10 w-auto brightness-[0.7] contrast-[1.4] [filter:saturate(1.2)_hue-rotate(-10deg)]"
                />
                <span className="ml-2 text-xl font-bold text-[#000000]">QTS</span>
              </Link>
            </motion.div>
            <p className="text-[#000000]/70 text-sm">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#000000] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[#000000] mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#000000] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-[#000000]/70 text-sm">
                19/2/9, Market Complex,<br />
                Matale Road, Akurana,<br />
                Kandy: 20850
              </li>
              <li>
                <a href="tel:+94814242615" className="text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  +94 81 424 2615
                </a>
              </li>
              <li>
                <a href="mailto:info@quadrate.lk" className="text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                  info@quadrate.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-[#000000]/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#000000]/70">
              {new Date().getFullYear()} Quadrate Tech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
