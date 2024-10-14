import { useUserStore } from '@/stores/userStore';
import { useUserReviewHistory } from '@/hooks/queries/useUserService';

export const useMyReviewHistory = () => {
  const user = useUserStore((state) => state.user);
  const { data, isLoading, isError } = useUserReviewHistory({ userId: user?.userId || 0 });

  // 리뷰 아이디가 있는 것만 필터링
  const validReviews = data?.data.filter((review) => review.reviewId);

  return {
    reviewHistoryData: validReviews,
    isLoading,
    isError,
  };
};
