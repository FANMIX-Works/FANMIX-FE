'use client';
import { useMemo } from 'react';

import { useMyFollowedInfluencers } from '@/hooks/queries/useFollowService';
import { type MyFollowedInfluencerSortType } from '@/types/domain/followType';

export const useFollowInfluencerList = (sort: MyFollowedInfluencerSortType) => {
  const { data, isLoading, isError } = useMyFollowedInfluencers({ sort });

  const onePickPrioritizedInfluencers = useMemo(() => {
    if (!data?.data) return [];

    // OnePick 인플루언서를 먼저 필터링
    const onePicks = data.data.filter((item) => item.isOnePick);
    // 나머지 인플루언서 필터링
    const nonOnePicks = data.data.filter((item) => !item.isOnePick);

    // OnePick 인플루언서를 앞에 두고 나머지를 뒤에 배치
    return [...onePicks, ...nonOnePicks];
  }, [data]);

  return {
    influencerListData: onePickPrioritizedInfluencers,
    isLoading,
    isError,
    isEmpty: onePickPrioritizedInfluencers.length === 0,
  };
};
