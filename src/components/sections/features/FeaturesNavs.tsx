import React from 'react';
import TabNav from '@components/ui/blocks/TabNav';
import TabContent from '@components/ui/blocks/TabContent';
import Icon from '@components/ui/icons/Icon';

interface Tab {
  heading: string;
  content: string;
  svg: string;
  src: any;
  alt: string;
  first?: boolean;
  second?: boolean;
}

interface Props {
  title?: string;
  tabs: Tab[];
}

const FeaturesNavs: React.FC<Props> = ({ title, tabs }) => {
  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full features-navs-section">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </h2>
            <nav className="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist">
              {tabs.map((tab, index) => (
                <TabNav
                  key={index}
                  id={`tabs-with-card-item-${index + 1}`}
                  dataTab={`#tabs-with-card-${index + 1}`}
                  aria={`tabs-with-card-${index + 1}`}
                  heading={tab.heading}
                  content={tab.content}
                  first={tab.first}
                >
                  <Icon name={tab.svg} />
                </TabNav>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                {tabs.map((tab, index) => (
                  <TabContent
                    key={index}
                    id={`tabs-with-card-${index + 1}`}
                    aria={`tabs-with-card-item-${index + 1}`}
                    src={tab.src}
                    alt={tab.alt}
                    first={tab.first}
                    second={tab.second}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid h-full w-full grid-cols-12">
          <div className="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesNavs;
