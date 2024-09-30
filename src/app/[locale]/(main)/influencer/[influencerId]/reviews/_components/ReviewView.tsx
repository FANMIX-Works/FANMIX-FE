import { Dispatch } from 'react';

import { Button } from '@/components/ui/button';
import MetricsText from './MetricsText';

import { type ReviewMode, REVIEW_MODE } from '@/types/domain/influencerType';
import { useTranslations } from 'next-intl';

type ReviewViewProps = {
  setReviewMode: Dispatch<React.SetStateAction<ReviewMode>>;
};
const ReviewView = ({ setReviewMode }: ReviewViewProps) => {
  const t = useTranslations('review_view');
  const testData = {
    contentsRating: 3,
    communicationRating: 4,
    trustRating: 4,
  };

  // 수정/삭제 로직은 훅으로 분리하기
  const handleDeleteReview = () => {
    alert('삭제~');
  };
  const handleEditReview = () => {
    setReviewMode(REVIEW_MODE.EDIT);
  };

  return (
    <div className="flex flex-col justify-center gap-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <h2 className="body3-m">{t('내 한줄리뷰')}</h2>
          <span className="text-neutral-400 sub2-m">24.09.05</span>
        </div>
        <MetricsText {...testData} />
      </div>
      <div className="min-h-[76px] w-full bg-neutral-800 p-2 body3-r">
        내 글 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 내 글 텍스트 텍스트 텍스트 텍스트 트
        내 글 텍스트 텍스트 텍스트 텍스트
      </div>
      <div className="w-full gap-2 flex-center">
        <Button variant="outline" className="h-[34px] flex-1 body3-r" onClick={handleDeleteReview}>
          {t('삭제하기')}
        </Button>
        <Button variant="white" className="h-[34px] flex-1 body3-m" onClick={handleEditReview}>
          {t('수정하기')}
        </Button>
      </div>
    </div>
  );
};
export default ReviewView;
