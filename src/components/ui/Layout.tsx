// 파일: src/components/ui/Layout.tsx
import React from 'react';
import { Header } from './Header';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center ">
      <Header />
      <main className="w-full max-w-[800px] px-4 pt-32 pb-12 flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};