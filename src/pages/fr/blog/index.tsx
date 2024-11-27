import React, { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import CardBlog from '@components/ui/cards/CardBlog';
import CardBlogRecent from '@components/ui/cards/CardBlogRecent';
import CardInsight from '@components/ui/cards/CardInsight';
import { getCollection } from 'astro:content';
import { SITE } from '@data/constants';

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [insightPosts, setInsightPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const frenchBlogEntries = await getCollection('blog', ({ id }) => id.startsWith('fr/'));
      const sortedBlogPosts = frenchBlogEntries.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      );
      setBlogPosts(sortedBlogPosts);
    };

    const fetchInsightPosts = async () => {
      const frenchInsightsEntries = await getCollection('insights', ({ id }) => id.startsWith('fr/'));
      setInsightPosts(frenchInsightsEntries);
    };

    fetchBlogPosts();
    fetchInsightPosts();
  }, []);

  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const title = "Votre Passerelle vers l'Excellence en Construction";
  const subTitle =
    "Explorez les dernières actualités, astuces et analyses de ScrewFast pour améliorer vos projets de construction. Des mises en avant de produits aux stratégies de gestion de projet, notre blog est votre ressource incontournable pour tout ce qui concerne les outils et la construction.";
  const secondTitle = "Perspectives";
  const secondSubTitle =
    "Restez à jour avec les dernières tendances et évolutions de l'industrie de la construction grâce aux analyses de l'équipe d'experts de ScrewFast.";
  const pageTitle = `Blog | ${SITE.title}`;

  return (
    <MainLayout
      lang="fr"
      title={pageTitle}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://screwfast.uk/fr/blog',
        url: 'https://screwfast.uk/fr/blog',
        name: 'Blog | ScrewFast',
        description: "Restez informé des dernières tendances et évolutions dans le secteur de la construction avec les analyses de l'équipe d'experts de ScrewFast.",
        isPartOf: {
          '@type': 'WebSite',
          url: 'https://screwfast.uk/fr',
          name: 'ScrewFast',
          description: 'ScrewFast propose des outils matériels de premier ordre et des services de construction experts pour répondre à tous vos besoins de projet.',
        },
        inLanguage: 'fr',
      }}
    >
      <section className="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <h1 className="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400">
            {subTitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
        <div className="grid gap-6 lg:grid-cols-2">
          {otherPosts.map((blogEntry) => (
            <CardBlog key={blogEntry.id} blogEntry={blogEntry} blogLocale="fr" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
        {mostRecentPost && <CardBlogRecent blogEntry={mostRecentPost} recentBlogLocale="fr" />}
      </section>

      <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
            {secondTitle}
          </h2>
          <p className="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
            {secondSubTitle}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insightPosts.map((insightEntry) => (
            <CardInsight key={insightEntry.id} insightEntry={insightEntry} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
