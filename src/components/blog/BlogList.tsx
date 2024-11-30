import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';

interface Post {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  category: string;
  tags: string[];
  slug: string;
  author: string;
  authorImage: string;
}

interface BlogListProps {
  posts: Post[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </motion.div>
  );
};
