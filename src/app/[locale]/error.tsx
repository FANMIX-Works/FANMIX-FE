'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

import VerticalLogo from '../../../public/assets/images/logo/logo_vertical.svg';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error_page');
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-6 p-10 text-center">
      <VerticalLogo className="mb-8" />
      <p className="whitespace-pre-line text-neutral-600">
        {t('페이지를 불러오는 데 문제가 생겼어요 아래 버튼을 클릭하여 다시 시도해주세요')}
      </p>
      <Button
        variant="destructive"
        className="w-full transition-transform body3-m hover:scale-105"
        onClick={() => reset()}>
        {t('다시 시도해볼게요')}
      </Button>
    </div>
  );
}
