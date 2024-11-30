import React from 'react';

const BlogPostNotFound: React.FC = () => {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default BlogPostNotFound;
