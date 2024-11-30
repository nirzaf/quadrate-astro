import React from 'react';

interface BlogPostImageProps {
  src: string;
  alt: string;
}

const BlogPostImage: React.FC<BlogPostImageProps> = ({ src, alt }) => {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default BlogPostImage;
