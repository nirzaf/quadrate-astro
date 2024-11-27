import React from 'react';
import FooterSocialLink from '@components/ui/links/FooterSocialLink';
import EmailFooterInput from '@components/ui/forms/input/EmailFooterInput';
import enStrings from '@utils/navigation';
import frStrings from '@utils/fr/navigation';
import Icon from '@components/ui/icons/Icon';
import BrandLogo from '@components/BrandLogo';
import { SITE } from '@data/constants';

const FooterSection: React.FC = () => {
  const strings = document.documentElement.lang === 'fr' ? frStrings : enStrings;

  const sectionThreeTitle: string = document.documentElement.lang === 'fr' ? 'Rester à jour' : 'Stay up to date';
  const sectionThreeContent: string = document.documentElement.lang === 'fr' ? 'Restez informé des derniers outils et des offres exclusives.' :
    'Stay updated with the exclusive deals.';
  const crafted: string = document.documentElement.lang === 'fr' ? 'Fabriqué par' : 'Crafted by';

  return (
    <footer className="w-full bg-neutral-300 dark:bg-neutral-900">
      <div className="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-full lg:col-span-1">
            <BrandLogo className="h-auto w-32" />
          </div>
          {strings.footerLinks.map((section) => (
            <div className="col-span-1" key={section.section}>
              <h3 className="font-bold text-neutral-800 dark:text-neutral-200">
                {section.section}
              </h3>
              <ul className="mt-3 grid space-y-3">
                {section.links.map((link, index) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      className="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-none"
                    >
                      {link.name}
                    </a>
                    {section.section === 'Company' && index === 2 ? (
                      <span className="ms-1 inline rounded-lg bg-orange-600 px-2 py-1 text-xs font-bold text-neutral-50">
                        We're hiring!
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2">
            <h3 className="font-bold text-neutral-800 dark:text-neutral-200">
              {sectionThreeTitle}
            </h3>
            <form>
              <EmailFooterInput />
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                {sectionThreeContent}
              </p>
            </form>
          </div>
        </div>
        <div className="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © <span id="current-year"></span> {SITE.title}. {crafted}
              <a
                className="rounded-lg font-medium underline underline-offset-2 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-none focus-visible:ring dark:ring-zinc-200 dark:hover:text-neutral-300"
                href="https://quadrate.lk"
                target="_blank"
                rel="noopener noreferrer"
              >
                QTS
              </a>
              .
            </p>
          </div>
          <div>
            <FooterSocialLink url={strings.socialLinks.facebook}>
              <Icon name="facebookFooter" />
            </FooterSocialLink>
          </div>
        </div>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/144768548.js"></script>
        <script>
          const year = new Date().getFullYear();
          const element = document.getElementById('current-year');
          if (element) {
            element.innerText = year.toString();
          }
        </script>
      </div>
    </footer>
  );
};

export default FooterSection;
