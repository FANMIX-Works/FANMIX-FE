import { useEffect, useState } from 'react';

import { useMyLatestReviewForInfluencer } from '@/hooks/queries/useReviewService';
import { REVIEW_MODE, type ReviewMode, type MyLatestReview } from '@/types/domain/reviewType';

export const useMyReview = (influencerId: number) => {
  const { data, isError, isLoading } = useMyLatestReviewForInfluencer(influencerId);
  const [myLatestReviewData, setMyLatestReviewData] = useState<MyLatestReview | null>(null);
  const [reviewMode, setReviewMode] = useState<ReviewMode>(REVIEW_MODE.VIEW);

  useEffect(() => {
    if (data?.data) {
      setMyLatestReviewData(data.data);
      setReviewMode(REVIEW_MODE.VIEW);
    } else {
      setReviewMode(REVIEW_MODE.FORM_CREATE);
    }
  }, [data]);

  return {
    myLatestReviewData,
    setMyLatestReviewData,
    reviewMode,
    setReviewMode,
    isError,
    isLoading,
  };
};
