import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/sections/HeroSection';
import { AnimatedSection } from '@/components/sections/home/AnimatedSection';
import BackgroundElements from '@/components/home/BackgroundElements';
import HeroBackground from '@/components/home/HeroBackground';
import ErrorFallback from '@/components/home/ErrorFallback';
import Loading from '@/components/ui/loading';

// Lazy load heavy components
const Features = lazy(() => import('@/components/sections/features/Features'));
const TechStack = lazy(() => import('@/components/sections/TechStack'));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const PricingSection = lazy(() => import('@/components/sections/PricingSection'));
const StatsSection = lazy(() => import('@/components/sections/StatsSection'));
const PartnersSection = lazy(() => import('@/components/sections/PartnersSection'));
const CompanyValues = lazy(() => import('@/components/sections/home/CompanyValues'));

/**
 * Home page component displaying various sections about Quadrate Tech Solutions
 * Features:
 * - Smooth animations and transitions
 * - Responsive design
 * - Section-level error handling
 * - Modular component architecture
 * - Lazy loading for optimal performance
 */
const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate('/contact');
  const handleLearnMore = () => navigate('/about');

  try {
    return (
      <div className="relative bg-[#FFFFFF]">
        <BackgroundElements />

        {/* Content Container */}
        <div className="relative">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <HeroBackground />
            <HeroSection
              heroImage={{
                src: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
                alt: 'Digital Solutions'
              }}
              primaryButton={{
                text: "Get Started",
                onClick: handleGetStarted
              }}
              secondaryButton={{
                text: "Learn More",
                onClick: handleLearnMore
              }}
            />
          </section>

          {/* Features Section - Updated font and colors */}
          <AnimatedSection className="bg-gradient-to-b from-[#FFFFFF] via-[#0607E1]/5 to-[#FFFFFF]">
            <div className="font-plusJakartaSans">
              <Suspense fallback={<Loading />}>
                <Features />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Tech Stack Section - Updated gradient and font */}
          <AnimatedSection className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 to-[#0607E1]/5" />
            <div className="font-plusJakartaSans relative z-10">
              <Suspense fallback={<Loading />}>
                <TechStack />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Services Section - Updated gradient and font */}
          <AnimatedSection className="bg-gradient-to-b from-[#FFFFFF] via-[#0607E1]/5 to-[#FFFFFF]">
            <div className="font-plusJakartaSans">
              <Suspense fallback={<Loading />}>
                <ServicesSection />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Company Values Section - Updated gradient and font */}
          <AnimatedSection className="bg-gradient-to-b from-[#FFFFFF] via-[#0607E1]/5 to-[#FFFFFF]">
            <div className="font-plusJakartaSans">
              <Suspense fallback={<Loading />}>
                <CompanyValues />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Pricing Section - Updated background and font */}
          <div id="pricing" className="bg-[#FFFFFF]">
            <div className="font-plusJakartaSans">
              <Suspense fallback={<Loading />}>
                <PricingSection />
              </Suspense>
            </div>
          </div>

          {/* Stats Section - Updated font */}
          <div className="font-plusJakartaSans">
            <Suspense fallback={<Loading />}>
              <StatsSection />
            </Suspense>
          </div>

          {/* Partners Section - Updated with centered text and carousel */}
          <AnimatedSection className="relative bg-[#FFFFFF]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0607E1]/5 to-transparent" />
            <div className="font-plusJakartaSans relative z-10">
              <Suspense fallback={<Loading />}>
                <PartnersSection
                  title="Trusted by Industry Leaders"
                  description="We collaborate with forward-thinking companies to deliver exceptional solutions."
                />
              </Suspense>
            </div>
          </AnimatedSection>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering Home page:', error);
    return <ErrorFallback />;
  }
};

export default Home;
