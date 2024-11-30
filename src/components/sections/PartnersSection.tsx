import React from 'react';
import { PartnersCarousel } from './PartnersCarousel';

interface PartnersSectionProps {
  title: string;
  description: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ title, description }) => {
  const partnerLogos = [
    // Regular Clients
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-1.png?updatedAt=1725572926790",
      alt: "Client 1"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-2.png?updatedAt=1725572926836",
      alt: "Client 2"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-3.png?updatedAt=1725572926671",
      alt: "Client 3"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-4.png?updatedAt=1725572926848",
      alt: "Client 4"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-5.png?updatedAt=1725572926845",
      alt: "Client 5"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-6.png?updatedAt=1725572926840",
      alt: "Client 6"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-7.png?updatedAt=1725572926842",
      alt: "Client 7"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-8.png?updatedAt=1725572926833",
      alt: "Client 8"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/grommunio%20Logo%20-%20transparent.png?updatedAt=1719435693334",
      alt: "Grommunio"
    },
    // Featured Clients
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/zoho.png?updatedAt=1725572927006",
      alt: "Zoho"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/barakat-removebg-preview.png?updatedAt=1725573614220",
      alt: "Barakat"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/clickup%20logo@2x.png?updatedAt=1726851526358",
      alt: "ClickUp"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 font-plusJakartaSans">{title}</h2>
          <p className="text-lg text-gray-600 text-center mx-auto max-w-2xl font-plusJakartaSans">
            {description}
          </p>
        </div>
        
        <PartnersCarousel logos={partnerLogos} />
      </div>
    </section>
  );
};

export default PartnersSection;
