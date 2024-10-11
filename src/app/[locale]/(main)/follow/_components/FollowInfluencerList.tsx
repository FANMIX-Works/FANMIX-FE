'use client';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useFollowInfluencerList } from '../_hooks/useFollowInfluencerList';

import FollowInfluencerCard from './FollowInfluencerCard';

const FollowInfluencerList = () => {
  const t = useTranslations('follow_page');

  const { influencerListData, sortButtons } = useFollowInfluencerList();

  return (
    <div className="mt-5 flex flex-col justify-center">
      <nav aria-label="정렬 옵션">
        <ul className="mb-[15px] flex items-center gap-x-[15px] text-neutral-400 body3-r">
          {sortButtons.map(({ label, isSelected, onClick }) => (
            <li key={label}>
              <button className={cn(isSelected && 'text-lime-400 body3-m')} onClick={onClick}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <ul aria-label="팔로우 중인 인플루언서 리스트" className="mb-[30px] w-full flex-col-center">
        {influencerListData.map((influencerData) => (
          <li key={influencerData.influencerId} className="w-full">
            <FollowInfluencerCard {...influencerData} />
          </li>
        ))}
      </ul>
      <p className="text-center text-neutral-500 body3-r">
        {t('팔로우 중인 모든 인플루언서를 확인했어요')}
      </p>
    </div>
  );
};
export default FollowInfluencerList;
