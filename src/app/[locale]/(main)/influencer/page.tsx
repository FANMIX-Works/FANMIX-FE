import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import InfluencerSearchForm from './_components/InfluencerSearchForm';
import SearchInfluencerCard from './_components/SearchInfluencerCard';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('인플루언서 찾기'),
  };
}

export default function InfluencerIndexPage() {
  const t = useTranslations('influencer_index_page');
  // 전체 태그들을 클라이언트컴포넌트 하나로 해야할듯
  // 일단 스크린 작업만 먼저 하기
  return (
    <div className="px-5 pb-20 pt-[65px]">
      <section aria-label="검색 조건" className="mb-5">
        <div className="h-[42px]">
          <InfluencerSearchForm />
        </div>
      </section>
      <section aria-label="인플루언서 검색 결과">
        <div className="mb-[15px] flex items-center gap-x-[15px] text-neutral-400 body3-r">
          <button className="text-lime-400 body3-m">{t('조회순')}</button>
          <button>{t('평점순')}</button>
          <button>{t('최신리뷰순')}</button>
        </div>
        <ul className="flex flex-col justify-center gap-y-[22px]">
          <li>
            <SearchInfluencerCard />
          </li>
          <li>
            <SearchInfluencerCard />
          </li>
          <li>
            <SearchInfluencerCard />
          </li>
          <li>
            <SearchInfluencerCard />
          </li>
        </ul>
      </section>
    </div>
  );
}
