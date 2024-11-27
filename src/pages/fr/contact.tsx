import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ContactSection from '@components/sections/fr/ContactSection_fr';

const ContactPage: React.FC = () => {
  return (
    <MainLayout
      title="Contact | ScrewFast"
      lang="fr"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://screwfast.uk/fr/contact",
        url: "https://screwfast.uk/fr/contact",
        name: "Nous Contacter | ScrewFast",
        description:
          "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous et élaborons ensemble la solution parfaite avec nos outils et services.",
        isPartOf: {
          "@type": "WebSite",
          url: "https://screwfast.uk/fr/",
          name: "ScrewFast",
          description:
            "ScrewFast propose des outils matériels de premier ordre et des services de construction experts pour répondre à tous vos besoins de projet.",
        },
        inLanguage: "fr",
      }}
    >
      <ContactSection />
    </MainLayout>
  );
};

export default ContactPage;
