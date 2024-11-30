import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '@/components/ui/loading';
import BlogPostContainer from '@/components/blog/BlogPostContainer';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostImage from '@/components/blog/BlogPostImage';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';
import useBlogPost from '@/hooks/useBlogPost';

// Lazy load heavy components
const ReactMarkdown = lazy(() => import('react-markdown'));
const SyntaxHighlighter = lazy(() => 
  import('react-syntax-highlighter').then(mod => ({ default: mod.Prism }))
);

// Separate markdown rendering component for better code splitting
const MarkdownContent: React.FC<{ content: string }> = ({ content }) => {
  const [style, setStyle] = useState<any>(null);

  // Load syntax highlighting style only when needed
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus')
      .then(mod => setStyle(mod.default));
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <ReactMarkdown
        components={{
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <Suspense fallback={<div className="animate-pulse h-24 bg-muted rounded" />}>
                <SyntaxHighlighter
                  style={style}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </Suspense>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-auto"
              decoding="async"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Suspense>
  );
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading } = useBlogPost(slug);

  if (loading) {
    return <Loading />;
  }

  if (!post) {
    return <BlogPostNotFound />;
  }

  return (
    <BlogPostContainer>
      <BlogPostHeader
        title={post.title}
        description={post.description}
        pubDate={post.pubDate}
        category={post.category}
        tags={post.tags}
      />
      <BlogPostImage src={post.heroImage} alt={post.title} />
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <MarkdownContent content={post.content} />
      </div>
    </BlogPostContainer>
  );
};

export default BlogPostPage;
