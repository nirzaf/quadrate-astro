import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Quadrate Tech Solutions",
  tagline: "No 1 Software Solution Provider in Sri Lanka",
  description: "We offer modern solutions for growing your business. We build world-class software. It can be mobile app, web based app or an enterprise software. We will build it! ",
  description_short: "We offer modern solutions for growing your business. We build world-class mobile, web based app or an enterprise software.",
  url: "https://quadrate.lk",
  author: "Quadrate Tech Solutions",
  email: "info@quadrate.lk"
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Software Solutions for your Business`,
  description: " We build world-class software. It can be mobile app, web based app or an enterprise software. We will build it!",
  image: ogImageSrc,
};
