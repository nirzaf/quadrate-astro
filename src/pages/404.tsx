import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Btn404 from '@components/ui/buttons/Btn404';
import { SITE } from '@data/constants';

type TranslationKeys = 'en' | 'fr';
type Translations = {
  [key in TranslationKeys]: {
    pageTitle: string;
    subTitle: string;
    content: string;
    btnTitle: string;
  };
};

const defaultLang: TranslationKeys = 'en';
const translations: Translations = {
  en: {
    pageTitle: `Page Not Found | ${SITE.title}`,
    subTitle: "Oops, this isn't the tool you were looking for!",
    content: "Don't let this hiccup slow you down. Let's get you back to building your masterpiece.",
    btnTitle: 'Go Back',
  },
  fr: {
    pageTitle: `Page Non Trouvée | ${SITE.title}`,
    subTitle: "Oops, ce n'est pas l'outil que vous recherchiez!",
    content: "Ne laissez pas ce contretemps vous ralentir. Revenons à la construction de votre chef-d'œuvre.",
    btnTitle: 'Retournez',
  },
};

const NotFoundPage: React.FC = () => {
  const urlPath = window.location.pathname;
  const langCodeMatch = urlPath.match(/^\/(en|fr)\//);
  const lang: TranslationKeys = langCodeMatch ? (langCodeMatch[1] as TranslationKeys) : defaultLang;

  const { pageTitle, subTitle, content, btnTitle } = translations[lang];

  return (
    <MainLayout title={pageTitle}>
      <section className="grid h-svh place-content-center">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-dark mb-4 text-7xl font-extrabold text-yellow-500 dark:text-yellow-400 lg:text-9xl">
              404
            </h1>
            <p id="subtitle" className="mb-4 text-balance text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 md:text-4xl">
              {subTitle}
            </p>
            <p id="content" className="mb-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400">
              {content}
            </p>
            <Btn404 title={btnTitle} id="go-back" />
          </div>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.getElementById("go-back")?.addEventListener("click", () => {
              history.back();
            });
          `,
        }}
      />
    </MainLayout>
  );
};

export default NotFoundPage;
