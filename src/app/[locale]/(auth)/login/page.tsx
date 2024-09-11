'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function LoginPage() {
  const t = useTranslations('LoginPage');
  const pathname = usePathname();
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="h-full w-full bg-gradient">
      로그인페이지
      <h1>{t('나중에 하기')}</h1>
      <Link className="text-orange-1" href={pathname} locale="en">
        Switch to en
      </Link>
      <hr />
      <Link href={pathname} locale="ko">
        Switch to ko
      </Link>
      <button onClick={handleGoBack}>뒤로가기</button>
    </main>
  );
}
