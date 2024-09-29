import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import { LiaBookmark } from 'react-icons/lia';
import { VscPassFilled } from 'react-icons/vsc';

import { InfluencerTagList } from '@/components/domain/influencer/InfluencerTagList';
import { useTranslations } from 'next-intl';

// 20240929.syjang, 컴포넌트 정리 필요
const InfluencerProfileCard = () => {
  const t = useTranslations('influencer_page');
  const influencerTest = {
    influencerId: '3',
    influencerName: 'Sound Sound 다니엘',
    influencerImageUrl: '/assets/images/test/alganzi.png',
    isAuthenticated: false,
  };
  return (
    <>
      <div className="relative pb-[22px] pl-[170px] pr-5 pt-[30px] orange-700-gradient">
        <figure className="absolute left-[20px] top-[30px] h-44 w-[130px]">
          <Image
            priority
            src={influencerTest.influencerImageUrl}
            alt={`${influencerTest.influencerName}의 프로필 이미지`}
            fill
            sizes="100%"
            className="object-cover"
          />
        </figure>
        <div className="flex justify-between">
          <h1 className="mb-0.5 w-[162px] whitespace-normal break-words h1-sb">
            {influencerTest.influencerName}
          </h1>
          <div className="h-7 w-7 rounded-full bg-orange-700 flex-center scale-transition-105">
            <LiaBookmark className="h-5 w-5" />
          </div>
        </div>
        <aside className="mb-[15px] flex items-center gap-[7px] sub1-r">
          <span className="gap-0.5 text-lime-400 flex-center sub1-m">
            <div className="relative inline-block">
              {/* 체크 표시 검정색으로 채우기용 태그 */}
              <div className="absolute inset-1 rounded-full bg-black" />
              <VscPassFilled className="relative h-[14px] w-[14px] text-lime-400" />
            </div>
            {t('인증 인플루언서')}
          </span>
          <Separator orientation="vertical" className="h-[10px] w-[1px] bg-orange-200" />
          <span>Female</span>
          <Separator orientation="vertical" className="h-[10px] w-[1px] bg-orange-200" />
          <span>한국</span>
        </aside>
        <InfluencerTagList contents={['ASMR', 'V-log', '뷰티']} variant="destructive" />
      </div>
      <div className="pl-[170px] pr-5 flex-center">
        <div className="flex-1 gap-1 flex-col-center">
          <div className="text-neutral-400 sub2-m">SNS</div>
          <div className="gap-[5px] flex-center">
            <div className="h-5 w-5 rounded bg-neutral-600" />
            <div className="h-5 w-5 rounded bg-neutral-600" />
          </div>
        </div>
        <Separator orientation="vertical" className="h-[34px] w-[0.5px] bg-neutral-500" />
        <div className="flex-1 gap-1 flex-col-center">
          <div className="text-neutral-400 sub2-m">Media</div>
          <div className="gap-[5px] flex-center">
            <div className="h-5 w-5 rounded bg-neutral-600" />
          </div>
        </div>
        <Separator orientation="vertical" className="h-[34px] w-[0.5px] bg-neutral-500" />
        <div className="flex-1 gap-1 flex-col-center">
          <div className="text-neutral-400 sub2-m">Plus+</div>
          <div className="gap-[5px] flex-center">
            <div className="h-5 w-5 rounded bg-neutral-600" />
            <div className="h-5 w-5 rounded bg-neutral-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerProfileCard;
