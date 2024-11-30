import React from 'react';
import { FaBrain } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiMicrosoft } from 'react-icons/si';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  icon: React.ReactNode;
  link?: string;
}

const services: Service[] = [
  {
    id: 'consultation',
    title: 'IT Consultation',
    description: 'Strategic guidance for your digital transformation journey',
    image: 'https://ik.imagekit.io/quadrate/assets/img/features-2.png?updatedAt=1718024113386',
    color: '#0607E1',
    icon: <FaBrain className="w-8 h-8 text-[#0607E1]" />,
    link: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    id: 'business-mail',
    title: 'Business Mail Solutions',
    description: 'Professional email services at competitive prices',
    image: 'https://ik.imagekit.io/quadrate/assets/img/features.png?updatedAt=1718024113900',
    color: '#0A25C9',
    icon: <HiMail className="w-8 h-8 text-[#0A25C9]" />,
    link: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    id: 'microsoft365',
    title: 'Microsoft 365 Integration',
    description: 'Seamless business intelligence and productivity solutions',
    image: 'https://ik.imagekit.io/quadrate/assets/img/values-1.png?updatedAt=1718024118843',
    color: '#0B48D0',
    icon: <SiMicrosoft className="w-8 h-8 text-[#0B48D0]" />,
    link: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
