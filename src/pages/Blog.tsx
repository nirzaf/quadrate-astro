import React from 'react';
import BlogContainer from '@/components/blog/BlogContainer';
import BlogContent from '@/components/blog/BlogContent';
import useBlogPosts from '@/hooks/useBlogPosts';

/**
 * Blog page component that displays a list of blog posts
 * Uses modular components for better organization and maintainability
 * Implements loading states and error handling
 */
const BlogPage: React.FC = () => {
  const { posts, isLoading } = useBlogPosts();

  return (
    <BlogContainer>
      <BlogContent posts={posts} isLoading={isLoading} />
    </BlogContainer>
  );
};

export default BlogPage;
