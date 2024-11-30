import { type LucideIcon, MessageSquare, Calendar, Mail } from 'lucide-react';

export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

export const contactMethods: ContactMethod[] = [
  {
    id: 'chat',
    title: 'Quick Chat',
    description: 'Start a conversation right now',
    icon: MessageSquare,
    color: 'bg-[#0607E1]',
    link: 'https://quadratetechsolutions.zohobookings.com/'
  },
  {
    id: 'schedule',
    title: 'Schedule Meeting',
    description: 'Book a time that works for you',
    icon: Calendar,
    color: 'bg-[#0607E1]',
    link: 'https://quadratetechsolutions.zohobookings.com/'
  },
  {
    id: 'email',
    title: 'Email Us',
    description: 'Get in touch via email',
    icon: Mail,
    color: 'bg-[#0607E1]',
    link: 'mailto:info@quadrate.lk'
  }
];
