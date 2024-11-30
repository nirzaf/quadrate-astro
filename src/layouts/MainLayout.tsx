import React from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/Footer';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const MainLayout = ({ 
  children, 
  title = 'Quadrate', 
  description = 'Quadrate - Your Digital Solutions Partner' 
}: Props) => {
  useTranslation();

  React.useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Navigation will go here */}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};
