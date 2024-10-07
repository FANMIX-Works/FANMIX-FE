import api from './fetch';
import type {
  InfluencerDetailResponse,
  MyLatestReviewForInfluencerResponse,
} from '@/types/service/influencerServiceType';

export const getInfluencerData = async (
  influencerId: string,
): Promise<InfluencerDetailResponse> => {
  return api.get<InfluencerDetailResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/influencers/${influencerId}`,
  );
};

export const getMyLatestReviewForInfluencer = async (
  influencerId: string,
): Promise<MyLatestReviewForInfluencerResponse> => {
  return api.get<MyLatestReviewForInfluencerResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/members/influencers/${influencerId}/reviews/latest`,
    { hasAuth: true },
  );
};
