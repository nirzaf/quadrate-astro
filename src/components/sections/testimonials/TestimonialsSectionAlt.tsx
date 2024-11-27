import React from 'react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatarSrc: string;
  avatarAlt: string;
}

interface Props {
  title: string;
  testimonials: Testimonial[];
}

const TestimonialsSectionAlt: React.FC<Props> = ({ title, testimonials }) => {
  return (
    <section
      className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
      id="testimonials"
    >
      <div className="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2">
        <h2 className="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex h-auto">
            <div className="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg">
                  {testimonial.content}
                </p>
              </div>

              <div className="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src={testimonial.avatarSrc}
                      alt={testimonial.avatarAlt}
                      loading="lazy"
                    />
                  </div>

                  <div className="ms-3 grow">
                    <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSectionAlt;
