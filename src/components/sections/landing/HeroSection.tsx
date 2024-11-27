import React from 'react';

interface Props {
  title: string;
  subTitle?: string;
  primaryBtn?: string;
  primaryBtnURL?: string;
  secondaryBtn?: string;
  secondaryBtnURL?: string;
  withReview?: boolean;
  avatars?: Array<string>;
  starCount?: number;
  rating?: string;
  reviews?: string;
  src?: string;
  alt?: string;
}

const HeroSection: React.FC<Props> = ({
  title,
  subTitle,
  primaryBtn,
  primaryBtnURL,
  secondaryBtn,
  secondaryBtnURL,
  withReview,
  avatars,
  starCount,
  rating,
  reviews,
  src,
  alt,
}) => {
  return (
    <section className="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full">
      <div>
        <h1 className="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h1>
        {subTitle && (
          <p className="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5">
            {subTitle}
          </p>
        )}
        <div className="mt-7 grid w-full gap-3 sm:inline-flex">
          {primaryBtn && (
            <PrimaryCTA title={primaryBtn} url={primaryBtnURL} />
          )}
          {secondaryBtn && (
            <SecondaryCTA title={secondaryBtn} url={secondaryBtnURL} />
          )}
        </div>
        {withReview && (
          <ReviewComponent
            avatars={avatars}
            starCount={starCount}
            rating={rating}
            reviews={reviews}
          />
        )}
      </div>
      <div className="flex w-full">
        <div className="top-12 overflow-hidden">
          {src && alt && (
            <img
              src={src}
              alt={alt}
              className="h-full w-full scale-110 object-cover object-center"
              draggable="false"
              loading="eager"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
