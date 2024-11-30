import React from 'react';
import ContactMethodCard from './ContactMethodCard';
import { contactMethods } from '@/data/contactData';

interface ContactMethodsGridProps {
  activeMethod: string | null;
  onMethodClick: (methodId: string) => void;
}

const ContactMethodsGrid: React.FC<ContactMethodsGridProps> = ({
  activeMethod,
  onMethodClick
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr mb-12">
      {contactMethods.map((method, index) => (
        <ContactMethodCard
          key={method.id}
          method={method}
          isActive={activeMethod === method.id}
          onClick={() => onMethodClick(method.id)}
          index={index}
        />
      ))}
    </div>
  );
};

export default ContactMethodsGrid;
