import { useState, useEffect } from 'react';

interface Post {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  category: string;
  tags: string[];
  content: string;
}

export const useBlogPost = (slug: string | undefined) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/content/blog/${slug}.md`);
        const text = await response.text();
        
        // Parse frontmatter and content
        const [, frontmatter, content] = text.split('---');
        const metadata = frontmatter.split('\n').reduce((acc, line) => {
          const [key, ...value] = line.split(':');
          if (key && value.length) {
            acc[key.trim()] = value.join(':').trim().replace(/^"(.*)"$/, '$1');
          }
          return acc;
        }, {} as any);

        setPost({
          ...metadata,
          content: content.trim(),
          tags: metadata.tags.replace(/[\[\]]/g, '').split(',').map((tag: string) => tag.trim())
        });
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading };
};

export default useBlogPost;
