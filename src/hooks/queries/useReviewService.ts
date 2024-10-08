import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { reviewService } from '@/services/reviewService';
import type {
  CreateInfluencerReviewRequest,
  CreateInfluencerReviewResponse,
  MyLatestReviewForInfluencerResponse,
} from '@/types/service/reviewServiceType';

export const useMyLatestReviewForInfluencer = (influencerId: number) => {
  return useQuery<MyLatestReviewForInfluencerResponse, AxiosError>({
    queryKey: ['myLatestReviewForInfluencer', influencerId],
    queryFn: () => reviewService.myLatestReviewForInfluencer(influencerId),
    enabled: !!influencerId,
  });
};

export const useCreateInfluencerReveiw = () => {
  return useMutation<
    CreateInfluencerReviewResponse,
    AxiosError,
    { influencerId: number; reviewData: CreateInfluencerReviewRequest }
  >({
    mutationFn: ({ influencerId, reviewData }) =>
      reviewService.createInfluencerReview(influencerId, reviewData),
    onSuccess: () => {
      alert('리뷰 생성 성공, useMutation의 onSuccess');

      // submit할 때 돌려받은 데이터로 리액트쿼리 캐시데이터 수정하기
      // setQueryData
    },
  });
};
