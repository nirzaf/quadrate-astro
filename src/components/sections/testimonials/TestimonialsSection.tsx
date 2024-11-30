import React from 'react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

interface Statistic {
  value: string;
  label: string;
}

interface TestimonialsSectionProps {
  title: string;
  subTitle: string;
  testimonials: Testimonial[];
  statistics: Statistic[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subTitle,
  testimonials,
  statistics,
}) => {
  useTranslation();

  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {title}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {subTitle}
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                <h3 className="font-bold">{testimonial.author}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
        {statistics.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="font-bold text-4xl">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
