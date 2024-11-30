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
    name: "Starter",
    price: "199",
    description: "Perfect for small businesses starting their digital journey",
    features: [
      "Basic Website Development",
      "5 Pages Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "3 Months Support",
      "Performance Optimization",
      "Security Essentials"
    ],
    popular: false,
    ctaText: "Get Started",
    ctaLink: "https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions"
  },
  {
    name: "Professional",
    price: "499",
    description: "Ideal for growing businesses needing comprehensive solutions",
    popular: true,
    features: [
      "Custom Website Development",
      "Unlimited Pages",
      "E-commerce Integration",
      "Advanced SEO Package",
      "12 Months Support",
      "Performance Optimization",
      "Enhanced Security",
      "Analytics Integration"
    ],
    ctaText: "Choose Professional",
    ctaLink: "https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Custom Software Development",
      "Enterprise Integration",
      "Dedicated Support Team",
      "Custom Features",
      "Priority Support",
      "Scalable Infrastructure",
      "Advanced Security",
      "24/7 Support"
    ],
    popular: false,
    ctaText: "Contact Us",
    ctaLink: "https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions"
  }
];
