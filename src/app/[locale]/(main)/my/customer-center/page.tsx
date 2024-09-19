import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('고객센터'),
  };
}

export default function CustomerCenterPage() {
  const t = useTranslations('customer_center');
  return (
    <main className="h-full w-full pt-[30px]">
      <section aria-label="고객센터 리스트" className="mx-5 flex flex-col">
        <Separator className="bg-neutral-600" />
        <a href="https://www.naver.com" className="my-[25px] body2-r">
          1. {t('가이드 및 도움말')}
        </a>
        <Separator className="bg-neutral-600" />
        <a href="https://www.naver.com" className="my-[25px] body2-r">
          2. {t('자주 묻는 질문')}
        </a>
        <Separator className="bg-neutral-600" />
        <a href="https://www.naver.com" className="my-[25px] body2-r">
          3. {t('이용 약관 및 개인정보처리방침')}
        </a>
        <Separator className="bg-neutral-600" />
        <a href="https://www.naver.com" className="my-[25px] body2-r">
          4. {t('문의하기')}
        </a>
        <Separator className="bg-neutral-600" />
      </section>
    </main>
  );
}
