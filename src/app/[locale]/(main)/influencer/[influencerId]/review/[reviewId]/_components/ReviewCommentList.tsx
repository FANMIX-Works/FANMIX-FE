'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useInfluencerReviewDetailWithComments } from '@/hooks/queries/useReviewService';

import { Separator } from '@/components/ui/separator';

import ReviewCommentCard from './ReviewCommentCard';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

interface ReviewCommentListProps {
  influencerId: number;
  reviewId: number;
  defaultCommentList: {
    commentId: number;
    commenterId: number;
    commenterNickName: string;
    commentContent: string;
    isMyComment: boolean;
    isDeleted: boolean;
    commentDate: string;
  }[];
}
const ReviewCommentList = ({
  influencerId,
  reviewId,
  defaultCommentList,
}: ReviewCommentListProps) => {
  const [commentList, setCommentList] = useState(defaultCommentList);

  // #20241010.syjang, 서버 데이터로 먼저 렌더링 해놓기떄문에 isLoading은 생략
  const { data, isLoading, isError, isSuccess } = useInfluencerReviewDetailWithComments({
    influencerId,
    reviewId,
  });

  useEffect(() => {
    if (isSuccess) {
      if (data && data.data && data.data.commentList) {
        setCommentList(data.data.commentList);
      }
    }
  }, [data, isSuccess]);
  if (isLoading) {
    return (
      <div className="h-full flex-center">
        <ComponentSpinner />
      </div>
    );
  }
  if (isError) {
    return (
      <p className="h-full whitespace-pre-wrap text-center text-neutral-500 flex-center body3-r">
        {'댓글을 불러오는데 문제가 발생했어요.\n다시 시도해 주세요.'}
      </p>
    );
  }
  if (commentList.length === 0) {
    return <p className="h-full text-neutral-500 flex-center body3-r">첫 댓글을 작성해주세요.</p>;
  }
  return (
    <ul>
      {commentList.map((comment, index) => (
        <li
          key={comment.commentId}
          className={cn('w-full px-5 pt-5', comment.isMyComment && 'bg-neutral-800')}>
          <ReviewCommentCard influencerId={influencerId} reviewId={reviewId} {...comment} />
          {index + 1 !== commentList.length && <Separator className="h-[0.7px] bg-neutral-600" />}
        </li>
      ))}
    </ul>
  );
};

export default ReviewCommentList;
