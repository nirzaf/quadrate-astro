import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import MainSection from '@components/ui/blocks/MainSection';
import LeftSection from '@components/ui/blocks/LeftSection';
import RightSection from '@components/ui/blocks/RightSection';
import FeaturesStats from '@components/sections/features/FeaturesStats';
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
    title: "Fournir des conseils d'experts",
    subTitle:
      "Se lancer dans un projet de construction peut être accablant. Avec nos services de consultation professionnelle, nous vous guidons à chaque étape, en veillant à ce que vous preniez des décisions éclairées. Que vous soyez un passionné du bricolage ou un entrepreneur qualifié, nos experts sont là pour vous offrir des conseils sur mesure sur la sélection de produits, l'envergure du projet et la conformité aux réglementations locales.",
    single: false,
    imgOne: blueprints,
    imgOneAlt: "Plans et tablette numérique avec des plans de construction.",
    imgTwo: personWorking,
    imgTwoAlt: "Personne travaillant au bureau",
  },
  {
    isRightSection: false,
    title: "Transformer les conceptions en réalité",
    subTitle:
      "Nos artisans qualifiés apportent précision et excellence à chaque projet de construction. Des installations mineures aux travaux structuraux substantiels, ScrewFast offre des services de construction fiables pour concrétiser vos plans. Nous assurons les normes les plus élevées de sécurité et de savoir-faire, en utilisant des outils et des matériaux de haute qualité de notre vaste inventaire.",
    img: beforeAfter,
    imgAlt: "Chantier de construction avant et après",
    btnExists: true,
    btnTitle: "En savoir plus",
    btnURL: "#",
  },
  {
    isRightSection: true,
    title: "Naviguer dans les projets avec une supervision professionnelle",
    subTitle:
      "La gestion de projet efficace est au cœur de toute construction réussie. ScrewFast offre une planification approfondie et des services de gestion solides qui maintiennent votre projet dans les délais et dans le budget. Laissez-nous gérer les complexités de la coordination des flux de travail, de l'allocation des ressources et de la communication avec les parties prenantes pendant que vous vous concentrez sur votre vision.",
    single: false,
    imgOne: constructionWorkers,
    imgOneAlt: "Ouvriers du bâtiment orchestrant un projet",
    imgTwo: aerialView,
    imgTwoAlt: "Vue aérienne d'une construction gérée",
  },
  {
    isRightSection: false,
    title: "Garantir des performances durables",
    subTitle:
      "Notre engagement envers votre projet ne s'arrête pas à son achèvement. ScrewFast propose des services de maintenance et de support continus pour assurer la longévité et les performances de votre construction. Des vérifications régulières à l'assistance en cas d'urgence, notre équipe réactive est là pour vous fournir un soutien sans faille.",
    img: usingTools,
    imgAlt:
      "Homme en gilet orange et noir portant un casque blanc tenant un outil électrique jaune et noir",
  },
  {
    isRightSection: true,
    title: "Élaboration de stratégies sur mesure pour des défis uniques",
    subTitle:
      "Pour nos clients d'entreprise de plus grande envergure, ScrewFast propose des solutions personnalisées conçues pour répondre à des défis spécifiques de l'industrie. En comprenant vos besoins uniques, nous concevons des stratégies sur mesure visant à optimiser vos opérations, à améliorer l'efficacité et à faire avancer votre entreprise.",
    single: false,
    imgOne: progressBuilding,
    imgOneAlt: "Structure de bâtiment en cours de construction",
    imgTwo: underConstruction,
    imgTwoAlt: "Bâtiment marron et gris en construction",
    btnExists: true,
    btnTitle: "Lire la suite",
    btnURL: "#",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <MainLayout
      title="Services | ScrewFast"
      lang="fr"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://screwfast.uk/fr/services",
        url: "https://screwfast.uk/fr/services",
        name: "Services de Consultation d'Experts | ScrewFast",
        description:
          "Unissant l'expertise à votre vision, ScrewFast fournit un service exceptionnel et des solutions complètes dans le secteur du matériel et de la construction, de la consultation à l'achèvement du projet.",
        isPartOf: {
          "@type": "WebSite",
          url: "https://screwfast.uk/fr",
          name: "ScrewFast",
          description:
            "ScrewFast propose des outils matériels de premier ordre et des services de construction experts pour répondre à tous vos besoins de projet.",
        },
        inLanguage: "fr",
      }}
    >
      <MainSection
        title="Unir l'expertise à votre vision"
        subTitle="Chez ScrewFast, nous sommes fiers de fournir des solutions complètes et un service exceptionnel dans l'industrie du matériel et de la construction. Notre équipe expérimentée est dédiée à soutenir votre projet de sa conception à son achèvement avec une gamme de services spécialisés."
        btnExists={true}
        btnTitle="Planifier une consultation"
        btnURL="#"
      />
      {articles.map((article) =>
        article.isRightSection ? (
          <RightSection
            key={article.title}
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
            key={article.title}
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
        title="Par les chiffres"
        subTitle="Notre engagement envers la qualité et la fiabilité est évident dans chaque projet que nous entreprenons. Chez ScrewFast, nous nous engageons à fournir des services de premier plan dans l'industrie qui garantissent que vos projets de construction sont conçus pour durer."
        mainStatTitle="96%"
        mainStatSubTitle="de nos clients évaluent leur expérience avec ScrewFast comme exceptionnelle"
        stats={[
          {
            stat: "99,8%",
            description: "taux de réalisation de projets",
          },
          {
            stat: "5 000+",
            description: "installations réussies",
          },
          {
            stat: "85%",
            description: "croissance client année après année",
          },
        ]}
      />
    </MainLayout>
  );
};

export default ServicesPage;