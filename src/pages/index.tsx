import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@components/sections/landing/HeroSection';
import HeroSectionAlt from '@components/sections/landing/HeroSectionAlt';
import ClientsSection from '@components/sections/landing/ClientsSection';
import FeaturesNavs from '@components/sections/features/FeaturesNavs';
import TestimonialsSection from '@components/sections/testimonials/TestimonialsSection';
import PricingSection from '@components/sections/pricing/PricingSection';
import FAQ from '@components/sections/misc/FAQ';
import CardsSection from '@components/sections/cards/CardsSection';
import heroImage from '@images/hero-image.png';
import faqs from '@data/faqs.json';
import pricing from '@data/pricing.json';
import construction from '@images/lms.png';
import tools from '@images/automated-tools.png';
import dashboard from '@images/ecommerce.png';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection
        title="We build World Class <span style='color:darkblue'>Software Solutions</span>"
        subTitle="Quadrate Tech Solutions: Delivering innovative software for every business need."
        primaryBtn="Start Exploring"
        primaryBtnURL="/services"
        secondaryBtn="Contact Sales Team"
        secondaryBtnURL="/contact"
        withReview={true}
        rating={`<span class="font-bold">4.5</span> / 5`}
        starCount={4}
        reviews={`From Over <span class="font-bold">2.8k</span> Reviews`}
        src={heroImage}
        alt="Stack of ScrewFast product boxes containing assorted hardware tools"
      />

      <FeaturesNavs
        title={`Empower your business with <span style="color:darkblue">Quadrate Tech Solutions</span>`}
        tabs={[
          {
            heading: "World-Class Software",
            content:
              "We build world-class software, whether it's a mobile app, web-based app, or enterprise software. Our team of expert coders and engineers takes pride in creating the next big software solution for your business.",
            svg: "code",
            src: tools,
            alt: "Computer screen showing code",
            first: true,
          },
          {
            heading: "Comprehensive Services",
            content:
              "From Search Engine Optimization to Social Media Marketing, we offer a wide range of services to boost your online presence. Our expertise includes Design & Development, Pay Per Click advertising, Conversion Optimization, and Reputation Management.",
            svg: "services",
            src: dashboard,
            alt: "Icons representing various digital services",
            second: true,
          },
          {
            heading: "Custom Microsoft 365 Solutions",
            content:
              "We can provide custom tailored Microsoft 365 Service Solutions for Lower Prices. Our expert team specializes in crafting personalized solutions that leverage the full potential of Microsoft 365, ensuring optimal functionality and cost-effectiveness for your business needs.",
            svg: "erp",
            src: construction,
            alt: "Dashboard showing various ERP modules",
          },
        ]}
      />

      <PricingSection pricing={pricing} />

      <CardsSection />

      <TestimonialsSection
        title="Empower Your Business with Quadrate Tech Solutions"
        subTitle="We offer modern solutions for growing your business, from mobile apps to enterprise software."
        testimonials={[
          {
            content:
              "Quadrate Tech Solutions dramatically boosted our work process efficiency. Their world-class software & comprehensive services have truly been a game-changer for our business!",
            author: "Aashikkhan",
            role: "Co-Founder | STE Auditing",
            avatarSrc:
              "https://ik.imagekit.io/quadrate/assets/img/aashikhan.jpg?updatedAt=1725627306243",
          },
        ]}
        statistics={[
          {
            count: "100+",
            description:
              "satisfied clients across various industries",
          },
          {
            count: "78%",
            description:
              "increase in business efficiency reported by our clients",
          },
          {
            count: "24/7",
            description:
              "customer support for all our services",
          },
          {
            count: "3x",
            description: "faster project delivery with our custom solutions",
          },
        ]}
      />

      <ClientsSection
        title="Our Partners"
        subTitle="Quadrate Tech Solutions: Leveraging partnerships to drive innovation and deliver cutting-edge software solutions."
      />

      <FAQ title="Frequently<br />asked questions" faqs={faqs} />

      <HeroSectionAlt
        title="Lets Discuss Your Requirements"
        subTitle="We offer high-class enterprise-level applications for your business, It can be a mobile app, web-based app, or enterprise software. We will build it!"
        url="https://quadratetechsolutions.zohobookings.com/portal-embed#/quadratetechsolutions"
      />
    </MainLayout>
  );
};

export default HomePage;