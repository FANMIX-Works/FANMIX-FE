import { cn } from '@/lib/utils';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { formatDateToYYMMDD } from '@/lib/date';

import InfluencerActionMenu from './InfluencerActionMenu';
import FilledRatingBar from '@/components/domain/influencer/FilledRatingBar';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';
import GoFanChannelButton from '@/components/domain/influencer/GoFanChannelButton';

interface FollowInfluencerCardProps {
  // influencerId: number;
  // communityId: number;
  // influencerName: string;
  // influencerImageUrl: string;
  // latestDate: string;
  // averageScore: string;

  isOnePick?: boolean;
  isAuthenticated?: boolean;
}

// 팬 채널로 이동하는 버튼이 따로 존재, 카드 클릭으로 페이지 이동 x
// 팬 채널에 조회되는 인플루언서들은 모두 인증 인플루언서
const FollowInfluencerCard = ({
  isOnePick = false,
  isAuthenticated = false,
}: FollowInfluencerCardProps) => {
  const t = useTranslations('follow_influencer_card');
  const testData = {
    influencerId: 3,
    communityId: 3,
    isOnePick,
    influencerName: '힙으뜸',
    isAuthenticated,
  };
  return (
    <article
      className={cn('relative gap-x-4 py-[15px] flex-center', isOnePick && 'bg-orange-700/20')}>
      <figure className="relative h-[100px] w-[100px] flex-shrink-0 bg-slate-400">
        <Image
          priority
          src="/assets/images/test/alganzi.png"
          alt="인플루언서 사진"
          fill
          className="object-cover"
          sizes="100%"
        />
      </figure>
      <div className="flex-1">
        <header className="mb-1 flex justify-between">
          <div className="flex flex-col justify-center gap-y-1">
            {isOnePick && <p className="text-orange-500 sub1-m">MY ONE PICK</p>}
            <h2 className="flex items-center gap-x-[3px]">
              <span className="body2-sb">{testData.influencerName}</span>
              <AuthenticatedBadge size={18} />
            </h2>
          </div>
          <InfluencerActionMenu {...testData} />
        </header>
        <div className="mb-2.5 flex items-center gap-x-1.5 text-neutral-300 sub1-r">
          <p>{t('최신리뷰')}</p>
          <time>{formatDateToYYMMDD(new Date())}</time>
        </div>
        <footer className="flex items-end justify-between">
          <div className="flex flex-col justify-center gap-y-1">
            <div className="flex items-end gap-x-[5px]">
              <span className="leading-6 text-orange-500 h1-sb-leading-0">8</span>
              <span className="text-white/50 sub1-r">/ 10</span>
            </div>
            <FilledRatingBar maxScore={10} score={8} hideScore />
          </div>
          <GoFanChannelButton
            {...{ influencerId: testData.influencerId, communityId: testData.communityId }}
            variant="destructive"
            className={cn('h-9 px-4 py-2 body3-m', !testData.isAuthenticated && 'bg-neutral-600')}
            disabled={!testData.isAuthenticated}>
            {testData.isAuthenticated ? t('팬채널') : t('미인증')}
          </GoFanChannelButton>
        </footer>
      </div>
      {/* 원픽인플루언서용 좌우 배경색 */}
      {isOnePick && (
        <>
          <div className="absolute -left-5 top-0 h-full w-5 bg-orange-700/20" aria-hidden="true" />
          <div className="absolute -right-5 top-0 h-full w-5 bg-orange-700/20" aria-hidden="true" />
        </>
      )}
    </article>
  );
};
export default FollowInfluencerCard;
