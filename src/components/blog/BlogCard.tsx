import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  description: string;
  pubDate: string;
  slug: string;
  heroImage: string;
  category: string;
  tags: string[];
  author: string;
  authorImage: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  pubDate,
  slug,
  heroImage,
  category,
  tags,
  author,
  authorImage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/blog/${slug}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="p-0">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{category}</Badge>
              <span className="text-sm text-muted-foreground">
                {format(new Date(pubDate), 'MMM dd, yyyy')}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
            <p className="text-muted-foreground line-clamp-2 mb-4">{description}</p>
            <div className="flex gap-2 flex-wrap">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex items-center gap-2">
              <img
                src={authorImage}
                alt={author}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium">{author}</span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
