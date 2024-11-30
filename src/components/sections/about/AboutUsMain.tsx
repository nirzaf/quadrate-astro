import React from 'react';
import type { FAQData } from '@/data/about-page/faqs';
import { AnimatedHeroSection } from './AnimatedHeroSection';
import { FeaturesGrid } from './FeaturesGrid';
import { FAQSection } from './FAQSection';
import { AboutContent } from './AboutContent';
import { ContactSection } from './ContactSection';
import { features } from '@/data/about-page/features';

interface AboutUsMainProps {
  title: string;
  faqs: FAQData;
}

const AboutUsMain: React.FC<AboutUsMainProps> = ({ title, faqs }) => {
  try {
    return (
      <div className="relative">
        <AnimatedHeroSection title={title} subtitle={faqs.subTitle} />
        <FeaturesGrid features={features} />
        <AboutContent />
        <FAQSection faqs={faqs.faqs} />
        <ContactSection />
      </div>
    );
  } catch (error) {
    console.error('Error rendering AboutUsMain:', error);
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Something went wrong. Please try again later.
        </h2>
      </div>
    );
  }
};

export default AboutUsMain;