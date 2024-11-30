import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="p-6 bg-[#FFFFFF] hover:shadow-lg transition-shadow duration-300">
      <Icon className="h-12 w-12 text-[#0607E1] mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-[#000000]">{title}</h3>
      <p className="text-[#000000]/70">
        {description}
      </p>
    </Card>
  );
}; 