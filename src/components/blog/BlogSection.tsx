import React from 'react';
import { BlogList } from './BlogList';
import { type BlogPost } from '@/data/blogData';

interface BlogSectionProps {
  posts: BlogPost[];
  isLoading?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="mt-16 text-center">
        <p className="text-muted-foreground">Loading blog posts...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="mt-16 text-center">
        <p className="text-muted-foreground">No blog posts available.</p>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogSection;
