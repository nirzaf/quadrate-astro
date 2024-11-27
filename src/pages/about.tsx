import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import AboutUsMain from '../components/sections/about/AboutUsMain';

const faqData = {
  subTitle: "What is Quadrate Tech Solutions?",
  faqs: [
    {
      question: "What services does Quadrate Tech Solutions offer?",
      answer: "We offer a wide range of services including web development, mobile app development, cloud solutions, business email services, automation services, custom tailored services (ERP, CRM, LMS), SEO, social media marketing, PPC advertising, conversion optimization, and reputation management."
    },
    {
      question: "What makes Quadrate Tech Solutions different from other software development companies?",
      answer: "We focus on growth-driven solutions, transparency, modern technologies, and affordable high-quality services. We go beyond creating websites to build robust software solutions that empower businesses to achieve their full potential."
    },
    {
      question: "Does Quadrate Tech Solutions offer ERP solutions?",
      answer: "Yes, we offer QTS ULTIMATE ERP packages that include features for sales and POS, purchases, inventory management, invoicing, HR management, and more. We offer different packages to suit various business needs."
    },
    {
      question: "Can Quadrate Tech Solutions help with business email services?",
      answer: "Absolutely! We provide business email solutions at competitive pricing, including Microsoft 365, Google Workspace, Zoho, and other services. We also offer full technical support for these email services."
    },
    {
      question: "Does Quadrate Tech Solutions offer automation services?",
      answer: "Yes, we help streamline and automate business activities using tools like Power Automate or third-party services. We can assist with workflow automation and custom-coded solutions to improve efficiency."
    },
    {
      question: "How does Quadrate Tech Solutions approach website design and development?",
      answer: "We create websites that reflect your brand identity, engage visitors, and drive conversions. Our approach combines visual appeal with functional optimization to ensure your website serves as a powerful tool for your business."
    },
    {
      question: "Can Quadrate Tech Solutions help with digital marketing?",
      answer: "Yes, we offer comprehensive digital marketing services including SEO, social media marketing, PPC advertising, conversion optimization, and reputation management to help boost your online presence and drive business growth."
    },
    {
      question: "How can I get started with Quadrate Tech Solutions?",
      answer: "You can contact us for a free consultation. We'll discuss your needs and develop a customized software solution that helps you achieve your goals. You can also use our booking form to schedule an appointment."
    },
    {
      question: "How can I contact Quadrate Tech Solutions?",
      answer: "You can reach us via email at info@quadrate.lk. You can also call us at +94814242615 or visit our office at 19/2/9, Market Complex, Matale Road, Akurana, Kandy: 20850."
    }
  ]
};

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <AboutUsMain 
        title="About Quadrate Tech Solutions"
        faqs={faqData}
      />
    </MainLayout>
  );
};

export default AboutPage;
