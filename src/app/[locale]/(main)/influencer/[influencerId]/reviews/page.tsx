import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import InfluencerProfileCard from '../_components/InfluencerProfileCard';
import { Separator } from '@/components/ui/separator';
import TooltipBox from '@/components/common/TooltipBox';
import { VscIndent } from 'react-icons/vsc';
import TextReviewCard from './_components/TextReviewCard';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('인플루언서'),
  };
}

export default function InfluencerReviewListPage({
  params: { influencerId },
}: {
  params: { influencerId: string };
}) {
  console.log('InfluencerReviewListPage:' + influencerId);
  return (
    <div>
      <section
        aria-label="인플루언서 정보"
        className="sticky top-0 flex flex-col gap-2.5 bg-black pb-8">
        <InfluencerProfileCard />
      </section>
      <section aria-label="한줄리뷰 남기기" className="mb-10 mt-2 px-5">
        <div className="mb-2.5 flex items-center gap-1.5">
          <h2 className="body3-m">한줄리뷰 남기기</h2>
          <TooltipBox
            content={`인플루언서의 개인 신상과 관련된 내용 또는\n허위, 추측성, 원색적인 비난이 포함된 내용은\n사전 고지 없이 삭제 될 수 있어요.`}
          />
        </div>
        <div>
          <div className="mb-2.5 flex h-[76px] w-full">
            <textarea
              className="h-full flex-1 resize-none bg-neutral-800 p-2 body3-r placeholder:text-neutral-500 placeholder:sub1-r focus:border-none focus:outline-none focus:ring-0"
              placeholder={`한번 남긴 한줄 리뷰는 15일 이내에 삭제가 가능합니다.\n가장 최근에 남긴 리뷰만 점수에 반영됩니다.`}
            />
            <button className="h-full w-10 flex-shrink-0 bg-neutral-400 flex-center">
              <VscIndent className="h-[22px] w-[22px]" />
            </button>
          </div>
          <div className="w-full gap-[.4375rem] flex-center">
            <button className="box-border h-[34px] flex-1 border border-neutral-400 text-neutral-400 body3-r">
              콘텐츠
            </button>
            <button className="box-border h-[34px] flex-1 border border-neutral-400 text-neutral-400 body3-r">
              소통
            </button>
            <button className="box-border h-[34px] flex-1 border border-neutral-400 text-neutral-400 body3-r">
              신뢰
            </button>
          </div>
        </div>
      </section>
      <Separator className="h-2 bg-neutral-900" />
      <section aria-label="한줄리뷰 전체 리스트" className="mt-[15px] px-5">
        <div className="mb-[13px] flex items-center gap-[15px]">
          <button className="text-lime-400 body3-m">최신순</button>
          <button className="text-neutral-400 body3-r">추천순</button>
        </div>
        <Separator className="h-[0.7px] bg-neutral-600" />
        <ul className="flex-col-center">
          <li>
            <TextReviewCard />
            <Separator className="h-[0.7px] bg-neutral-600" />
          </li>
          <li>
            <TextReviewCard isMyReview />
            <Separator className="h-[0.7px] bg-neutral-600" />
          </li>
          <li>
            <TextReviewCard />
            <Separator className="h-[0.7px] bg-neutral-600" />
          </li>
        </ul>
        <div className="mb-8 mt-7 text-center text-neutral-500 body3-r">
          모든 리뷰를 확인했어요.
        </div>
      </section>
    </div>
  );
}
