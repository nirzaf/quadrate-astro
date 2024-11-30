import { Globe2, Award, Users2, Rocket } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Serving clients worldwide with innovative software solutions",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Committed to delivering excellence in every project",
  },
  {
    icon: Users2,
    title: "Expert Team",
    description: "Skilled professionals with diverse technical expertise",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technologies",
  },
];
