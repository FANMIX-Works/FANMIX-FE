'use client';
import { useTranslations } from 'next-intl';

import MessageText from '@/components/common/MessageText';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import ImageReviewCardWithRatingBar from '@/components/domain/influencer/ImageReviewCardWithRatingBar';

import type { ImageReviewCardData } from '@/types/domain/reviewType';

interface ReviewHistoryProps {
  reviewHistoryData: ImageReviewCardData[] | undefined;
  isLoading: boolean;
  isError: boolean;
}
const ReviewHistory = ({ reviewHistoryData, isLoading, isError }: ReviewHistoryProps) => {
  const t = useTranslations('my_activity_history_page');

  if (isLoading) return <ComponentSpinner className="h-full flex-center" />;
  if (isError)
    return (
      <MessageText
        className="h-full"
        message={'나의 리뷰를 불러오는데 실패했어요.\n다시 시도해 주세요'}
      />
    );
  if (!reviewHistoryData || reviewHistoryData.length === 0)
    return <MessageText className="h-full" message="아직 내가 작성한 리뷰가 없어요." />;
  return (
    <div className="h-full w-full overflow-y-auto pb-8 pt-5 scrollbar-hide-smooth">
      <ul className="flex w-full flex-col items-center gap-[30px]">
        {reviewHistoryData.map((review) => (
          <li key={review.reviewId} className="w-full">
            <ImageReviewCardWithRatingBar reviewData={review} />
          </li>
        ))}
      </ul>
      <MessageText className="mb-8 mt-7" message={t('모든 내용을 확인했어요')} />
    </div>
  );
};

export default ReviewHistory;
