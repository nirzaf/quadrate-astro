import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import MainSection from '@components/ui/blocks/MainSection';
import LeftSection from '@components/ui/blocks/LeftSection';
import RightSection from '@components/ui/blocks/RightSection';
import FeaturesStats from '@components/sections/features/FeaturesStats';

// Import necessary images
import blueprints from '@images/blueprints-image.avif';
import personWorking from '@images/person-working.avif';
import beforeAfter from '@images/before-after.avif';
import constructionWorkers from '@images/construction-workers.avif';
import aerialView from '@images/aerial-view.avif';
import usingTools from '@images/using-tools.avif';
import progressBuilding from '@images/progress-building.avif';
import underConstruction from '@images/under-construction.jpg';
import { SITE } from '@data/constants';

interface Article {
  isRightSection: boolean;
  title: string;
  subTitle: string;
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
  single?: boolean;
  img?: any;
  imgAlt?: string;
  imgOne?: any;
  imgOneAlt?: string;
  imgTwo?: any;
  imgTwoAlt?: string;
}

const articles: Article[] = [
  {
    isRightSection: true,
    title: 'Delivering Expert IT Guidance',
    subTitle:
      'Embarking on a digital transformation project can be overwhelming. With our professional consultation services, we guide you through every stage, ensuring you make informed decisions. Whether you\'re a small business or a large enterprise, our experts offer tailored advice on technology selection, project scope, and compliance with industry standards.',
    single: false,
    imgOne: blueprints,
    imgOneAlt: 'Digital blueprints and tablet with IT infrastructure plans.',
    imgTwo: personWorking,
    imgTwoAlt: 'IT professional working in a modern office',
  },
  {
    isRightSection: false,
    title: 'Provide Business Mail for Lower Price',
    subTitle:
      'We offer cost-effective business email solutions to enhance your communication and productivity. Our services include popular platforms such as Microsoft 365, Google Workspace, and Zoho One. With our expertise, you can enjoy professional email services tailored to your business needs at competitive prices.',
    img: beforeAfter,
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
    imgOne: constructionWorkers,
    imgOneAlt: 'Business professionals collaborating using Microsoft 365 tools',
    imgTwo: aerialView,
    imgTwoAlt: 'Visual representation of Business Intelligence dashboard',
  },
  {
    isRightSection: false,
    title: 'Our Commitment to Excellence',
    subTitle:
      'Our Commitment to be\nFast\nWe connect you with experts in record time,\nno more waiting for answers.\nPrecise\nLaser-focused searches find the exact\nexperts with the knowledge you need.\n\nCustomized\nWe tailor solutions to your\nspecific challenges, not a\none-size-fits-all approach.',
    img: usingTools,
    imgAlt:
      'Team of experts collaborating on tailored IT solutions',
  },
  {
    isRightSection: true,
    title: 'Crafting Bespoke IT Strategies for Unique Challenges',
    subTitle:
      'For our larger enterprise clients, Quadrate Tech Solutions offers custom IT solutions designed to meet specific industry challenges. By understanding your unique needs, we engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward in the digital age.',
    single: false,
    imgOne: progressBuilding,
    imgOneAlt: 'In-progress IT infrastructure upgrade',
    imgTwo: underConstruction,
    imgTwoAlt: 'Modern data center under construction',
    btnExists: true,
    btnTitle: 'Read more',
    btnURL: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions',
  },
];

const pageTitle: string = `Services | ${SITE.title}`;

const ServicesPage: React.FC = () => {
  return (
    <MainLayout
      title={pageTitle}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://quadrate.lk/services',
        url: 'https://quadrate.lk/services',
        name: 'Expert IT Consultation Services | Quadrate Tech Solutions',
        description:
          'Uniting expertise with your vision, Quadrate Tech Solutions provides exceptional service and comprehensive solutions in the IT industry, from consultation to project completion.',
        isPartOf: {
          '@type': 'Quadrate Tech Solutions',
          url: 'https://quadrate.lk',
          name: 'Quadrate Tech Solutions',
          description:
            'ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.',
        },
        inLanguage: 'en-US',
      }}
    >
      <MainSection
        title="Expert IT Consultation Services"
        subTitle="At Quadrate Tech Solutions, we take pride in providing comprehensive solutions and exceptional service in the IT industry. Our experienced team is dedicated to supporting your project from consultation to completion with a range of specialized services."
        btnExists={true}
        btnTitle="Schedule a Consultation"
        btnURL="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions"
        desktopBgSvg="https://ik.imagekit.io/quadrate/zbs-bnr-bg.svg?updatedAt=1725816773132"
      />
      {articles.map((article, index) =>
        article.isRightSection ? (
          <RightSection
            key={index}
            title={article.title}
            subTitle={article.subTitle}
            single={article.single}
            imgOne={article.imgOne}
            imgOneAlt={article.imgOneAlt}
            imgTwo={article.imgTwo}
            imgTwoAlt={article.imgTwoAlt}
            btnExists={article.btnExists}
            btnTitle={article.btnTitle}
            btnURL={article.btnURL}
          />
        ) : (
          <LeftSection
            key={index}
            title={article.title}
            subTitle={article.subTitle}
            img={article.img}
            imgAlt={article.imgAlt}
            btnExists={article.btnExists}
            btnTitle={article.btnTitle}
            btnURL={article.btnURL}
          />
        )
      )}
      <FeaturesStats
        title="Quadrate Tech: Your Affordable Microsoft 365 Partner"
        subTitle="We offer competitive pricing for Microsoft 365 solutions, including Microsoft Exchange and the Office suite, without compromising on quality or support."
        mainStatTitle="Affordable"
        mainStatSubTitle="Benefit from our competitive pricing for Microsoft 365 without sacrificing essential features or functionality"
        stats={[
          {
            stat: 'Tailored',
            description: 'Customizable packages to meet your specific needs and budget',
          },
          {
            stat: 'Expert',
            description: 'Guidance from our team of Microsoft experts',
          },
          {
            stat: 'Seamless',
            description: 'Migration with minimal downtime and disruption',
          },
        ]}
      />
    </MainLayout>
  );
};

export default ServicesPage;