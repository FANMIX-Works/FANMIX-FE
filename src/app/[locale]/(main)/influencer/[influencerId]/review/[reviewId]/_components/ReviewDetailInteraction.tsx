'use client';

import { useEffect, useState } from 'react';
import InteractionStats from '@/components/domain/board/InteractionStats';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';
import { useInfluencerReviewDetailWithComments } from '@/hooks/queries/useReviewService';

interface ReviewDetailInteractionProps {
  influencerId: number;
  reviewId: number;
  defaultInteractionData: {
    reviewLikeCount: number;
    reviewDislikeCount: number;
    reviewCommentsCount: number;
  };
}
const ReviewDetailInteraction = ({
  influencerId,
  reviewId,
  defaultInteractionData,
}: ReviewDetailInteractionProps) => {
  const [interactionData, setInteractionData] = useState(defaultInteractionData);

  const { data, isSuccess } = useInfluencerReviewDetailWithComments({
    influencerId,
    reviewId,
  });

  useEffect(() => {
    if (isSuccess) {
      if (data && data.data && data.data.review) {
        const { review: reviewData } = data.data;
        const interactionData = {
          reviewLikeCount: reviewData.reviewLikeCount,
          reviewDislikeCount: reviewData.reviewDislikeCount,
          reviewCommentsCount: reviewData.reviewCommentsCount,
        };
        setInteractionData(interactionData);
      }
    }
  }, [data, isSuccess]);

  return (
    <InteractionStats
      boardCardType={BOARD_CARD_TYPE.REVIEW}
      {...{
        likesCount: interactionData.reviewLikeCount,
        dislikesCount: interactionData.reviewDislikeCount,
        commentsCount: interactionData.reviewCommentsCount,
      }}
    />
  );
};

export default ReviewDetailInteraction;
