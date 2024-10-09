import { useSpecificInfluencerAllReviews } from '@/hooks/queries/useReviewService';
import {
  SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES,
  type SpecificInfluencerReviewsSortType,
} from '@/types/domain/reviewType';
import { useState } from 'react';

export const useSpecificInfluencerReview = (influencerId: number) => {
  const [sort, setSort] = useState<SpecificInfluencerReviewsSortType>(
    SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.LATEST,
  );
  const { data, isLoading, isError } = useSpecificInfluencerAllReviews({
    influencerId,
    sort: sort,
  });

  const sortButtons = [
    {
      label: '최신순',
      isSelected: sort === SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.LATEST,
      onClick: () => setSort(SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.LATEST),
    },
    {
      label: '추천순',
      isSelected: sort === SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.RECOMMENDED,
      onClick: () => setSort(SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.RECOMMENDED),
    },
  ];

  return {
    reviewListData: data,
    isLoading,
    isError,
    sortButtons,
  };
};
