import React from 'react';
import BlogSection from './BlogSection';
import { type BlogPost } from '@/data/blogData';

interface BlogContentProps {
  posts: BlogPost[];
  isLoading: boolean;
}

const BlogContent: React.FC<BlogContentProps> = ({ posts, isLoading }) => {
  return (
    <div className="container py-16">
      <BlogSection posts={posts} isLoading={isLoading} />
    </div>
  );
};

export default BlogContent;
