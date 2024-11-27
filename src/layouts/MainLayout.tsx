import React from 'react';
import Meta from '@components/Meta';
import Navbar from '@components/sections/navbar&footer/Navbar';
import FooterSection from '@components/sections/navbar&footer/FooterSection';
import { SITE } from '@data/constants';
import SpeedInsights from '@vercel/speed-insights/react';

interface Props {
  title?: string;
  meta?: string;
  structuredData?: object;
  lang?: string;
}

const MainLayout: React.FC<Props> = ({
  title = SITE.title,
  meta,
  structuredData,
  lang = 'en',
  children,
}) => {
  return (
    <html lang={lang} className="scrollbar-hide lenis lenis-smooth scroll-pt-16">
      <head>
        <Meta meta={meta} structuredData={structuredData} />
        <title>{title}</title>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/144768548.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.remove("dark");
              localStorage.setItem("hs_theme", "light");
            `,
          }}
        />
        <script src="@scripts/lenisSmoothScroll.js"></script>
        <SpeedInsights />
      </head>
      <body className="bg-white selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <Navbar />
          <main>{children}</main>
        </div>
        <FooterSection />
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }

            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
      </body>
    </html>
  );
};

export default MainLayout;
