export interface Article {
  isRightSection: boolean;
  title: string;
  subTitle: string;
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
  single?: boolean;
  img?: string;
  imgAlt?: string;
  imgOne?: string;
  imgOneAlt?: string;
  imgTwo?: string;
  imgTwoAlt?: string;
}

export const articles: Article[] = [
  {
    isRightSection: true,
    title: 'Delivering Expert IT Guidance',
    subTitle:
      'Embarking on a digital transformation project can be overwhelming. With our professional consultation services, we guide you through every stage, ensuring you make informed decisions. Whether you\'re a small business or a large enterprise, our experts offer tailored advice on technology selection, project scope, and compliance with industry standards.',
    single: false,
    imgOne: 'https://ik.imagekit.io/quadrate/assets/img/features-2.png?updatedAt=1718024113386',
    imgOneAlt: 'Digital blueprints and tablet with IT infrastructure plans.',
    imgTwo: 'https://ik.imagekit.io/quadrate/wp8358553-software-developer-wallpapers.jpg?updatedAt=1724450586486',
    imgTwoAlt: 'IT professional working in a modern office',
  },
  {
    isRightSection: false,
    title: 'Provide Business Mail for Lower Price',
    subTitle:
      'We offer cost-effective business email solutions to enhance your communication and productivity. Our services include popular platforms such as Microsoft 365, Google Workspace, and Zoho One. With our expertise, you can enjoy professional email services tailored to your business needs at competitive prices.',
    img: 'https://ik.imagekit.io/quadrate/assets/img/features.png?updatedAt=1718024113900',
    imgAlt: 'Comparison of business email solutions',
    btnExists: true,
    btnTitle: 'Learn More',
    btnURL: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions',
  },
  {
    isRightSection: true,
    title: 'Microsoft 365 with Business Integration',
    subTitle:
      'Unlock the full potential of your business with our Microsoft 365 integration services. We seamlessly incorporate Business Intelligence solutions into your workflow, enabling data-driven decision-making and enhanced productivity. Our expert team ensures a smooth transition, customizing Microsoft 365 tools to align with your specific business needs and goals.',
    single: false,
    imgOne: 'https://ik.imagekit.io/quadrate/assets/img/values-1.png?updatedAt=1718024118843',
    imgOneAlt: 'Business professionals collaborating using Microsoft 365 tools',
    imgTwo: 'https://ik.imagekit.io/quadrate/assets/img/values-2.png?updatedAt=1718024118844',
    imgTwoAlt: 'Visual representation of Business Intelligence dashboard',
  },
  {
    isRightSection: false,
    title: 'Our Commitment to Excellence',
    subTitle:
      'Our Commitment to be\nFast\nWe connect you with experts in record time,\nno more waiting for answers.\nPrecise\nLaser-focused searches find the exact\nexperts with the knowledge you need.\n\nCustomized\nWe tailor solutions to your\nspecific challenges, not a\none-size-fits-all approach.',
    img: 'https://ik.imagekit.io/quadrate/assets/img/values-3.png?updatedAt=1718024119302',
    imgAlt: 'Team of experts collaborating on tailored IT solutions',
  },
  {
    isRightSection: true,
    title: 'Crafting Bespoke IT Strategies for Unique Challenges',
    subTitle:
      'For our larger enterprise clients, Quadrate Tech Solutions offers custom IT solutions designed to meet specific industry challenges. By understanding your unique needs, we engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward in the digital age.',
    single: false,
    imgOne: 'https://ik.imagekit.io/quadrate/Best-Front-End-and-Back-End-Web-Development-Framework-1-1024x614.jpg?updatedAt=1724450412452',
    imgOneAlt: 'In-progress IT infrastructure upgrade',
    imgTwo: 'https://ik.imagekit.io/quadrate/assets/img/features-3.png?updatedAt=1718024113749',
    imgTwoAlt: 'Modern data center under construction',
    btnExists: true,
    btnTitle: 'Read more',
    btnURL: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions',
  },
];
