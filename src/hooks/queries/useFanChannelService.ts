import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { fanChannelService } from '@/services/fanChannelService';
import type {
  AllFanChannelsRequest,
  AllFanChannelsResponse,
} from '@/types/service/fanChannelServiceType';

// 내가 팔로우하는 인플루언서 리스트
export const useMyFollowedInfluencers = ({ sort }: AllFanChannelsRequest) => {
  return useQuery<AllFanChannelsResponse, AxiosError>({
    queryKey: ['allFanChannels', sort],
    queryFn: () => fanChannelService.allFanChannels({ sort }),
  });
};
