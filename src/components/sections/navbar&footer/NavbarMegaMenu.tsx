import React from 'react';
import ThemeIcon from '@components/ThemeIcon';
import NavLink from '@components/ui/links/NavLink';
import MegaMenuLink from '@components/ui/links/MegaMenuLink';
import enStrings from '@utils/navigation';
import frStrings from '@utils/fr/navigation';
import BrandLogo from '@components/BrandLogo';
import LanguagePicker from '@components/ui/LanguagePicker';

const NavbarMegaMenu: React.FC = () => {
  const strings = document.documentElement.lang === 'fr' ? frStrings : enStrings;
  const homeUrl = document.documentElement.lang === 'fr' ? '/fr' : '/';

  return (
    <header className="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
      <nav
        className="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"
            href={homeUrl}
            aria-label="Brand"
          >
            <BrandLogo className="h-auto w-24" />
          </a>
          <div className="ml-auto mr-5 md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <line x1="3" x2="21" y1="12" y2="12"></line>
                <line x1="3" x2="21" y1="18" y2="18"></line>
              </svg>
              <svg
                className="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <span className="inline-block md:hidden">
            <ThemeIcon />
          </span>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
        >
          <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 md:gap-y-0 md:ps-7 lg:gap-x-7">
            {strings.navBarLinks.map((link) => {
              if (link.name === 'Services') {
                return <MegaMenuLink key={link.url} />;
              } else {
                return <NavLink url={link.url} name={link.name} key={link.url} />;
              }
            })}
            <LanguagePicker />
            <span className="hidden md:inline-block">
              <ThemeIcon />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMegaMenu;
