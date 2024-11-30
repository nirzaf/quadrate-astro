import React from 'react';
import { format } from 'date-fns';
import { Badge } from '../ui/badge';

interface BlogPostHeaderProps {
  title: string;
  description: string;
  pubDate: string;
  category: string;
  tags: string[];
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  title,
  description,
  pubDate,
  category,
  tags,
}) => {
  return (
    <header className="mb-8 space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="text-sm">
          {category}
        </Badge>
        <time dateTime={pubDate} className="text-sm text-muted-foreground">
          {format(new Date(pubDate), 'MMMM d, yyyy')}
        </time>
      </div>

      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>

      <p className="text-xl text-muted-foreground">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </header>
  );
};

export default BlogPostHeader;
