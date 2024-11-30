import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Badge } from '../ui/badge';

interface BlogPostProps {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  category: string;
  tags: string[];
  slug: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  pubDate,
  heroImage,
  category,
  tags,
  slug
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-lg border p-6 shadow-md transition-all hover:shadow-lg"
    >
      <a href={`/blog/${slug}`} className="absolute inset-0 z-0">
        <span className="sr-only">View article</span>
      </a>
      
      <div className="relative z-10 space-y-4">
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <img
            src={heroImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">
              {category}
            </Badge>
            <time dateTime={pubDate} className="text-sm text-muted-foreground">
              {format(new Date(pubDate), 'MMMM d, yyyy')}
            </time>
          </div>
          
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
