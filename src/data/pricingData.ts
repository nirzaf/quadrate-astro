export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  ctaLink: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$99',
    description: 'Perfect for small businesses getting started',
    features: [
      'Server Resources',
      'Security Features',
      'Domain Names',
      'Storage Space',
      'SSL Certificate',
      'Email Services'
    ],
    popular: false,
    ctaText: 'Get Started',
    ctaLink: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    name: 'Professional',
    price: '$199',
    description: 'Ideal for growing businesses and teams',
    features: [
      'Server Resources',
      'Security Features',
      'Domain Names',
      'User Accounts',
      'Database Storage',
      'Cloud Backup',
      'CPU Allocation',
      'Auto Updates'
    ],
    popular: true,
    ctaText: 'Get Started',
    ctaLink: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    name: 'Enterprise',
    price: '$399',
    description: 'Advanced features for larger organizations',
    features: [
      'Server Resources',
      'Security Features',
      'Domain Names',
      'User Accounts',
      'Database Storage',
      'Cloud Backup',
      'CPU Allocation',
      'Storage Space',
      'SSL Certificate',
      'Email Services',
      'Auto Updates',
      'Support'
    ],
    popular: false,
    ctaText: 'Contact Sales',
    ctaLink: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  }
];
