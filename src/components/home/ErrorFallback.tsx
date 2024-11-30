import React from 'react';

export const ErrorFallback: React.FC = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-[#EF4444]">Something went wrong</h2>
      <p className="mt-2 text-[#71717A]">
        Please refresh the page or contact support if the problem persists.
      </p>
    </div>
  );
};

export default ErrorFallback;
