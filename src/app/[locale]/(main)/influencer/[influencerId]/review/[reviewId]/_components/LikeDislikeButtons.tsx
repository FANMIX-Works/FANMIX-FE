'use client';

import { useTranslations } from 'next-intl';
import { VscThumbsdown, VscThumbsup } from 'react-icons/vsc';

interface LikeDislikeButtonsProps {
  reviewId: string;
}
const LikeDislikeButtons = ({ reviewId }: LikeDislikeButtonsProps) => {
  const t = useTranslations('review_page');

  // 좋아요/싫어요 로직은 훅으로 분리하기
  // 버튼 누르기 전 메시지창 띄우고 확인받아야함.
  const handleClickLike = () => {
    alert(reviewId + ' 추천');
  };
  const handleClickDislike = () => {
    alert(reviewId + ' 비추천');
  };
  return (
    <div className="flex w-full items-center justify-end gap-x-2 px-5">
      <button
        className="gap-x-[3px] rounded-[8px] border border-orange-500 px-2.5 py-2 text-orange-500 flex-center body3-m"
        onClick={handleClickLike}>
        <VscThumbsup className="h-[18px] w-[18px]" />
        <span>{t('추천')}</span>
      </button>
      <button
        className="gap-x-[3px] rounded-[8px] border border-neutral-300 px-2.5 py-2 text-neutral-300 flex-center body3-m"
        onClick={handleClickDislike}>
        <VscThumbsdown className="h-[18px] w-[18px]" />
        <span>{t('비추천')}</span>
      </button>
    </div>
  );
};

export default LikeDislikeButtons;
