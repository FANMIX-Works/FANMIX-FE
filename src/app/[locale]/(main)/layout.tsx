'use client';

import { useRef } from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import Header from '@/components/layout/Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  return (
    <>
      <Header />
      <main className="h-full w-full page-scrollable-container" ref={mainRef}>
        {children}
      </main>
      <BottomNavigation mainRef={mainRef} />
    </>
  );
}
