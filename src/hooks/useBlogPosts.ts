import { useState, useEffect } from 'react';
import { type BlogPost, initialBlogPosts } from '@/data/blogData';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setPosts(initialBlogPosts);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { posts, isLoading };
};

export default useBlogPosts;
