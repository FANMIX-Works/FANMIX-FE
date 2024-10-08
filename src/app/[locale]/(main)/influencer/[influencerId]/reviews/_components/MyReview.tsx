'use client';

import { useEffect, useState } from 'react';

import ReviewView from './ReviewView';
import ReviewForm from './ReviewForm';

import { useAuthStore } from '@/stores/authStore';
import { useMyLatestReviewForInfluencer } from '@/hooks/queries/useReviewService';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import { REVIEW_MODE, type MyLatestReview, type ReviewMode } from '@/types/domain/reviewType';

interface MyReviewProps {
  influencerId: number;
}
const MyReview = ({ influencerId }: MyReviewProps) => {
  // 0. 로그인 상태인지 아닌지 판단하기
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // 1. useQuery로 내 최신 댓글 가져오기
  const { data, isError, isLoading } = useMyLatestReviewForInfluencer(influencerId);
  const [myLatestReveiwData, setMyLatestReviewData] = useState<MyLatestReview | null>(null);
  // 2. 글 결과에 따라 reviewMode 바꿔주기
  const [reviewMode, setReviewMode] = useState<ReviewMode>(REVIEW_MODE.VIEW);

  useEffect(() => {
    if (data?.data) {
      // 최근 리뷰가 있음 -> 15일이 지났든, 안지났든 뷰 모드로 + 내 리뷰 데이터 저장
      setMyLatestReviewData(data.data);
      setReviewMode(REVIEW_MODE.VIEW);
    } else {
      // 최근 리뷰가 없음 -> 폼 모드
      setReviewMode(REVIEW_MODE.FORM);
    }
  }, [data]);
  if (isLoading)
    return (
      <div className="mt-10 w-full">
        <ComponentSpinner />
      </div>
    );
  if (!isLoggedIn)
    return (
      <div className="mt-10 w-full text-neutral-500 flex-center body3-r">
        리뷰 작성 기능은 로그인 후 이용할 수 있어요.
      </div>
    );
  if (isError) {
    return (
      <div className="mt-10 w-full text-neutral-500 flex-center body3-r">
        내 최근 한줄리뷰를 가져오는데 문제가 생겼어요.
      </div>
    );
  }
  return (
    <div>
      {reviewMode === REVIEW_MODE.VIEW && myLatestReveiwData ? (
        <ReviewView
          setReviewMode={setReviewMode}
          setMyLatestReviewData={setMyLatestReviewData}
          reviewData={myLatestReveiwData}
        />
      ) : (
        <ReviewForm
          influencerId={influencerId}
          setReviewMode={setReviewMode}
          setMyLatestReviewData={setMyLatestReviewData}
          defaultReviewData={myLatestReveiwData}
        />
      )}
    </div>
  );
};

export default MyReview;
