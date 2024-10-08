import { Dispatch } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import MetricsText from '@/components/domain/influencer/MetricsText';

import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

import type { MyLatestReview } from '@/types/domain/reviewType';
import { type ReviewMode, REVIEW_MODE } from '@/types/domain/reviewType';

type ReviewViewProps = {
  setReviewMode: Dispatch<React.SetStateAction<ReviewMode>>;
  setMyLatestReviewData: Dispatch<React.SetStateAction<MyLatestReview | null>>;
  reviewData: MyLatestReview;
};
const ReviewView = ({
  setReviewMode,
  setMyLatestReviewData,
  reviewData: {
    reviewId,
    isBefore15Days,
    contentsRating,
    communicationRating,
    trustRating,
    reviewDate,
    reviewContent,
  },
}: ReviewViewProps) => {
  const t = useTranslations('review_view');

  const metricsData = {
    contentsRating,
    communicationRating,
    trustRating,
  };

  // 수정/삭제 로직은 훅으로 분리하기
  const handleDeleteReview = () => {
    alert(reviewId + '삭제~');
  };
  const handleEditReview = () => {
    setReviewMode(REVIEW_MODE.FORM);
  };
  const handlePostNewReview = () => {
    setMyLatestReviewData(null); // 새로 생성하니 defaultReviewData를 비우기 위해 null로 업데이트
    setReviewMode(REVIEW_MODE.FORM);
  };

  return (
    <div className="flex flex-col justify-center gap-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <h2 className="body3-m">{t('내 한줄리뷰')}</h2>
          <span className="text-neutral-400 sub2-m">
            {formatDateToYYMMDD(parseISOToDate(reviewDate))}
          </span>
        </div>
        <MetricsText {...metricsData} />
      </div>
      <p className="min-h-[76px] w-full bg-neutral-800 p-2 body3-r">{reviewContent}</p>
      {isBefore15Days ? (
        <div className="w-full gap-2 flex-center">
          <Button
            variant="outline"
            className="h-[34px] flex-1 body3-r"
            onClick={handleDeleteReview}>
            {t('삭제하기')}
          </Button>
          <Button variant="white" className="h-[34px] flex-1 body3-m" onClick={handleEditReview}>
            {t('수정하기')}
          </Button>
        </div>
      ) : (
        <div className="flex-center">
          <span className="flex-1 whitespace-break-spaces text-orange-500 sub1-r">
            {t('리뷰 작성 후 15일이 경과하여 수정, 삭제가 불가합니다')}
          </span>
          <Button
            variant="outline"
            className="h-[34px] w-[150px] flex-shrink-0 body3-m"
            onClick={handlePostNewReview}>
            {t('리뷰 새로 남기기')}
          </Button>
        </div>
      )}
    </div>
  );
};
export default ReviewView;
