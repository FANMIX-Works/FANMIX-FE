import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { reviewService } from '@/services/reviewService';
import type {
  AllInfluencersAllReviewsRequest,
  AllInfluencersAllReviewsResponse,
  CreateInfluencerReviewRequest,
  CreateInfluencerReviewResponse,
  DeleteInfluencerReviewRequest,
  MyLatestReviewForInfluencerResponse,
  SpecificInfluencerAllReviewsRequest,
  SpecificInfluencerAllReviewsResponse,
  UpdateInfluencerReviewRequest,
  UpdateInfluencerReviewResponse,
} from '@/types/service/reviewServiceType';
import { useUserStore } from '@/stores/userStore';

// 내 가장 최근 리뷰
export const useMyLatestReviewForInfluencer = (influencerId: number) => {
  return useQuery<MyLatestReviewForInfluencerResponse, AxiosError>({
    queryKey: ['myLatestReviewForInfluencer', influencerId],
    queryFn: () => reviewService.myLatestReviewForInfluencer(influencerId),
    enabled: !!influencerId,
  });
};

// 인플루언서 리뷰 생성
export const useCreateInfluencerReveiw = () => {
  const queryClient = useQueryClient();
  const user = useUserStore((state) => state.user);

  return useMutation<CreateInfluencerReviewResponse, AxiosError, CreateInfluencerReviewRequest>({
    mutationFn: reviewService.createInfluencerReview,
    onSuccess: ({ data }, variables) => {
      const influencerId = variables.influencerId;
      const reviewId = data.reviewId;

      // submit할 때 돌려받은 데이터로 리액트쿼리 리뷰 캐시 데이터 수정하기
      const newReviewData = {
        reviewId: reviewId,
        reviewerId: user?.userId || 0,
        reviewerNickName: user?.nickName || '',
        averageRating: (data.contentsRating + data.communicationRating + data.trustRating) / 3,
        contentsRating: data.contentsRating,
        communicationRating: data.communicationRating,
        trustRating: data.trustRating,
        reviewDate: data.reviewDate,
        reviewContent: data.reviewContent,
        reviewLikeCount: 0,
        reviewDislikeCount: 0,
        reviewCommentsCount: 0,
        isMyReview: true,
        isLiked: false,
        isDisliked: false,
      };

      // 최신순일 때
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'LATEST'],
        (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            data: [newReviewData, ...oldData.data], // 가장 앞에 추가
          };
        },
      );

      // 추천순일 때
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'RECOMMENDED'],
        (oldData) => {
          if (!oldData) return oldData;

          // reviewLikeCount-reviewDislikeCount 가 0이하가 되는 지점의 가장 앞에 추가
          const insertIndex = oldData.data.findIndex(
            (review) => review.reviewLikeCount - review.reviewDislikeCount <= 0,
          );

          const newData = [...oldData.data];
          if (insertIndex === -1) {
            // 만약 모든 리뷰의 추천 수가 0보다 크다면 맨 뒤에 추가
            newData.push(newReviewData);
          } else {
            // 찾은 인덱스에 새 리뷰 삽입
            newData.splice(insertIndex, 0, newReviewData);
          }

          return {
            ...oldData,
            data: newData,
          };
        },
      );
    },
  });
};

// 인플루언서 리뷰 수정
export const useUpdateInfluencerReveiw = () => {
  return useMutation<UpdateInfluencerReviewResponse, AxiosError, UpdateInfluencerReviewRequest>({
    mutationFn: reviewService.updateInfluencerReview,
    onSuccess: () => {
      // submit할 때 돌려받은 데이터로 리액트쿼리 전체 리뷰 캐시 데이터 수정하기, 또는 백엔드에서 돌려준 데이터로..
      // setQueryData
    },
  });
};

// 인플루언서 리뷰 삭제
export const useDeleteInfluencerReveiw = () => {
  const queryClient = useQueryClient();

  return useMutation<null, AxiosError, DeleteInfluencerReviewRequest>({
    mutationFn: reviewService.deleteInfluencerReview,
    onSuccess: (_, variables) => {
      const influencerId = variables.influencerId;
      const deleteRequestReviewId = variables.reviewId;

      // 내 최신리뷰 다시 가져와서 상태에 맞게 리렌더링되게 해야함
      queryClient.invalidateQueries({
        queryKey: ['myLatestReviewForInfluencer', variables.influencerId],
      });

      // 특정 인플루언서의 전체리뷰 쿼리의 캐시데이터 수정하기
      // 구조 상, MyReview에서 ReviewList의 sort 값을 가지고 있기 복잡함 (할 순 있는데, 굳이.. 싶음)
      // => 그냥 sort에 두 값 다 넣어서 확인하기
      // 최신순일 때
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'LATEST'],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            data: oldData.data.filter((review) => review.reviewId !== deleteRequestReviewId),
          };
        },
      );

      // 추천순일 때
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'RECOMMENDED'],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            data: oldData.data.filter((review) => review.reviewId !== deleteRequestReviewId),
          };
        },
      );
    },
  });
};

// 특정 인플루언서의 전체 리뷰
export const useSpecificInfluencerAllReviews = ({
  influencerId,
  sort,
}: SpecificInfluencerAllReviewsRequest) => {
  return useQuery<SpecificInfluencerAllReviewsResponse, AxiosError>({
    queryKey: ['specificInfluencerAllReviews', influencerId, sort],
    queryFn: () =>
      reviewService.specificInfluencerAllReviews({
        influencerId,
        sort,
      }),
    enabled: !!influencerId,
  });
};

// 전체 인플루언서의 전체 리뷰
export const useAllInfluencersAllReviews = ({ sort }: AllInfluencersAllReviewsRequest) => {
  return useQuery<AllInfluencersAllReviewsResponse, AxiosError>({
    queryKey: ['allInfluencersAllReviews', sort],
    queryFn: () =>
      reviewService.allInfluencersAllReviews({
        sort,
      }),
    enabled: !!sort,
  });
};
