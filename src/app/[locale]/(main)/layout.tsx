import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import ModalPortal from '@/components/layout/ModalPortal';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <BottomNavigation />
      <ModalPortal />
    </>
  );
}
