'use client';
import { useMyOnePickInfluencer } from '../_hooks/useMyOnePickInfluencer';

import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import OnePickInfluencer from '@/components/domain/influencer/OnePickInfluencer';

const MyOnePickInfluencer = () => {
  const { onePickData, isLoading, isError } = useMyOnePickInfluencer();

  if (isLoading) return <ComponentSpinner />;
  if (isError)
    return (
      <p className="whitespace-pre-wrap text-center text-neutral-500 flex-center body3-r">
        {'원픽 인플루언서를 불러오는데 문제가 발생했어요.\n다시 시도해 주세요.'}
      </p>
    );
  if (!onePickData) return null;

  // 원픽 데이터 가져오기..
  return <OnePickInfluencer {...onePickData} communityId={onePickData?.fanChannelId || null} />;
};

export default MyOnePickInfluencer;
