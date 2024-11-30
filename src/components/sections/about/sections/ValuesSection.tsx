import React from 'react';
import { Target, Award } from 'lucide-react';
import { ValueCard } from './ValueCard';

export const ValuesSection: React.FC = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ValueCard
        icon={Target}
        title="Our Mission"
        description="To revolutionize businesses through cutting-edge software solutions, fostering digital transformation with unparalleled expertise. We're committed to delivering innovative, scalable, and cost-effective solutions that drive sustainable growth."
      />
      <ValueCard
        icon={Award}
        title="Our Vision"
        description="To emerge as a global leader in technology solutions, setting industry standards for innovation and excellence. We aspire to be the catalyst for digital success, empowering businesses worldwide with transformative solutions."
      />
    </div>
  );
}; 