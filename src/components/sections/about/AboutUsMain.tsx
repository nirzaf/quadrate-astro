import React from 'react';

interface Faq {
  question: string;
  answer: string;
}

interface FaqGroup {
  subTitle?: string;
  faqs: Faq[];
}

interface Props {
  title: string;
  faqs: FaqGroup;
}

const makeId = (base: any, index: any) => `${base}${index + 1}`;

const AboutUsMain: React.FC<Props> = ({ title, faqs }) => {
  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </h2>
            <p className="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block">
              {faqs.subTitle}
            </p>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700">
            {faqs.faqs.map((question, i) => {
              let id = makeId("hs-basic-with-title-and-arrow-stretched-heading-", i);
              let collapseId = makeId("hs-basic-with-title-and-arrow-stretched-collapse", i);

              return (
                <AccordionItem
                  key={i}
                  {...question}
                  id={id}
                  collapseId={collapseId}
                  first={i === 0}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMain;
