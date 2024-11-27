import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import CardBlog from '@components/ui/cards/CardBlog';
import CardBlogRecent from '@components/ui/cards/CardBlogRecent';
import CardInsight from '@components/ui/cards/CardInsight';
import { getCollection } from 'astro:content';
import { SITE } from '@data/constants';

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = React.useState([]);
  const [insightPosts, setInsightPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchBlogPosts = async () => {
      const englishBlogEntries = await getCollection('blog', ({ id }) => id.startsWith('en/'));
      const sortedBlogPosts = englishBlogEntries.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      );
      setBlogPosts(sortedBlogPosts);
    };

    const fetchInsightPosts = async () => {
      const englishInsightsEntries = await getCollection('insights', ({ id }) => id.startsWith('en/'));
      setInsightPosts(englishInsightsEntries);
    };

    fetchBlogPosts();
    fetchInsightPosts();
  }, []);

  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const title = 'Empowering Your Digital Presence';
  const subTitle =
    'Discover how Quadrate Tech Solutions, a leading software development company in Sri Lanka, can transform your business through innovative and high-quality digital solutions. From custom software development to comprehensive ERP systems, we\'re your partner in achieving digital excellence.';
  const secondTitle = 'Our Expertise';
  const secondSubTitle =
    'Discover our comprehensive suite of services, encompassing SEO, web design and development, social media marketing, PPC advertising, conversion optimization, reputation management, and cost-effective Business Email Services. Additionally, explore our state-of-the-art ERP solutions designed to enhance your business operations and drive efficiency.';
  const pageTitle = `Blog | ${SITE.title}`;

  return (
    <MainLayout
      title={pageTitle}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://quadrate.lk/blog',
        url: 'https://quadrate.lk/blog',
        name: 'Blog | Quadrate Tech Solutions',
        description:
          'Stay up-to-date with the latest trends and developments in the tech industry with insights from quadrate tech solution\'s team of industry experts.',
        isPartOf: {
          '@type': 'WebSite',
          url: 'https://quadrate.lk',
          name: 'Quadrate Tech Solutions',
          description:
            'Quadrate Tech Solutions offers innovative software development and digital solutions to transform your business and drive digital excellence.',
        },
        inLanguage: 'en-US',
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
            <CardBlog key={blogEntry.id} blogEntry={blogEntry} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
        {mostRecentPost && <CardBlogRecent blogEntry={mostRecentPost} />}
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
