import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Article } from '@/data/servicesData';

interface ServiceArticleProps {
  article: Article;
  index: number;
}

const ServiceArticle: React.FC<ServiceArticleProps> = ({ article, index }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/fallback-image.png'; // Make sure to add a fallback image
    e.currentTarget.alt = 'Image not available';
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="container py-8 md:py-12"
    >
      <div className={`
        flex flex-col gap-8 p-6 rounded-2xl
        bg-gradient-to-br from-background to-primary/5
        hover:shadow-xl transition-all duration-300
        ${article.isRightSection ? 'md:flex-row-reverse' : 'md:flex-row'}
      `}>
        <div className="flex-1 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            {article.title}
          </motion.h2>
          <p className="text-muted-foreground leading-relaxed">{article.subTitle}</p>
          {article.btnExists && (
            <Button 
              asChild 
              className="mt-4 bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <a href={article.btnURL} className="flex items-center gap-2">
                {article.btnTitle}
                <span className="ml-2">→</span>
              </a>
            </Button>
          )}
        </div>
        <motion.div 
          className="flex-1"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {article.single ? (
            <img
              src={article.img}
              alt={article.imgAlt}
              onError={handleImageError}
              className="rounded-lg object-cover w-full h-full shadow-lg"
            />
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <img
                src={article.imgOne}
                alt={article.imgOneAlt}
                onError={handleImageError}
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
              <img
                src={article.imgTwo}
                alt={article.imgTwoAlt}
                onError={handleImageError}
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceArticle;
