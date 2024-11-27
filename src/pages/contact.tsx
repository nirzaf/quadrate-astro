import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ContactSection from '@components/sections/misc/ContactSection';
import { SITE } from '@data/constants';

const ContactPage: React.FC = () => {
  const pageTitle: string = `Contact | ${SITE.title}`;

  return (
    <MainLayout
      title={pageTitle}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://quadrate.lk/contact",
        url: "https://quadrate.lk/contact",
        name: "Contact Us | Quadrate Tech Solutions",
        description:
          "Ready to take your business to the next level? Contact Quadrate Tech Solutions for a free consultation. We'll discuss your needs and develop a customized software solution that helps you achieve your goals.",
        isPartOf: {
          "@type": "WebSite",
          url: "https://quadrate.lk",
          name: "Quadrate Tech Solutions",
          description:
            "Quadrate Tech Solutions is a leading software development company in Sri Lanka, committed to providing innovative and high-quality solutions for businesses of all sizes.",
        },
        inLanguage: "en-US",
      }}
    >
      <ContactSection />
    </MainLayout>
  );
};

export default ContactPage;
