import React from 'react';

interface BlogContainerProps {
  children: React.ReactNode;
}

const BlogContainer: React.FC<BlogContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {children}
    </div>
  );
};

export default BlogContainer;
