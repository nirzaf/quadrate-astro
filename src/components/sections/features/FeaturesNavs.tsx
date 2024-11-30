import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface Tab {
  heading: string;
  content: string;
  svg: string;
}

interface FeaturesNavsProps {
  title: string;
  tabs: Tab[];
}

const FeaturesNavs: React.FC<FeaturesNavsProps> = ({ title, tabs }) => {
  useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {title}
        </h2>
      </div>

      <div className="mx-auto flex max-w-[64rem] flex-col items-center space-y-4">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                activeTab === index
                  ? "bg-muted text-primary"
                  : "text-muted-foreground"
              )}
            >
              {tab.heading}
            </button>
          ))}
        </div>

        <div className="relative mt-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={cn(
                "absolute top-0 left-0 w-full transform transition-all duration-500",
                activeTab === index
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              )}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32" dangerouslySetInnerHTML={{ __html: tab.svg }} />
                <p className="text-center text-muted-foreground">{tab.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesNavs;
