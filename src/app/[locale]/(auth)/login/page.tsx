import { Metadata } from 'next';

import GoBackButton from '@/components/common/GoBackButton';
import GoogleLoginButton from '@/components/domain/auth/login/GoogleLoginButton';
import IntroImageCarousel from '@/components/domain/auth/login/IntroImageCarousel';

export const metadata: Metadata = {
  title: '로그인',
};

export default function LoginPage() {
  return (
    <main className="h-full w-full dark-gradient">
      <nav className="mb-14 mr-5 mt-2.5 flex items-center justify-end">
        <GoBackButton variant="close" />
      </nav>
      <section className="w-full gap-[50px] flex-col-center">
        <IntroImageCarousel />
        <div className="w-full gap-6 px-5 flex-col-center">
          <GoogleLoginButton />
          <GoBackButton variant="word" />
        </div>
      </section>
    </main>
  );
}
