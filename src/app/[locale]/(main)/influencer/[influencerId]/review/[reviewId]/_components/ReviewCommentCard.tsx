import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';
import { useModalStore } from '@/stores/modalStore';
import { useInformationToast } from '@/hooks/useInformationToast';

import { VscChromeClose } from 'react-icons/vsc';
import MessageBox from '@/components/common/MessageBox';

import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';
import { useDeleteInfluencerReviewComment } from '@/hooks/queries/useReviewService';

interface DeleteCommentProps {
  isMyComment: boolean;
}
const DeleteComment = ({ isMyComment }: DeleteCommentProps) => {
  const t = useTranslations('review_page');
  return (
    <header className="flex w-full items-center text-neutral-400">
      <span className="text-neutral-500 body3-r">
        {isMyComment ? t('삭제한 댓글이에요') : t('삭제된 댓글이에요')}
      </span>
    </header>
  );
};

interface ReviewCommentCardProps {
  influencerId: number;
  reviewId: number;
  commentId: number;
  commenterNickName: string;
  commentContent: string;
  commentDate: string;
  isDeleted: boolean;
  isMyComment: boolean;
}

const ReviewCommentCard = ({
  influencerId,
  reviewId,
  commentId,
  commenterNickName,
  commentContent,
  commentDate,
  isDeleted,
  isMyComment,
}: ReviewCommentCardProps) => {
  const t = useTranslations('review_page');

  // 댓글 삭제 로직 훅으로 빼기, 삭제 시 리액트쿼리 캐시데이터 수정하기
  const openModal = useModalStore((state) => state.openModal);
  const { showConfirmToast, showErrorToast } = useInformationToast();

  const deleteCommentMutation = useDeleteInfluencerReviewComment();
  const handleDeleteComment = async (influencerId: number, reviewId: number, commentId: number) => {
    openModal(
      <MessageBox
        title={t('정말 삭제하시겠어요?')}
        description={t('삭제한 한줄리뷰는 다시 복구할 수 없어요')}
        buttons={[
          {
            text: t('삭제'),
            color: 'orange',
            onClick: async () => {
              try {
                await deleteCommentMutation.mutateAsync({
                  influencerId,
                  reviewId,
                  commentId,
                });
                showConfirmToast('댓글이 정상적으로 삭제되었어요.');
              } catch {
                showErrorToast('댓글 삭제에 실패했어요', '다시 시도해 주세요');
              }
            },
          },
          { text: t('취소'), color: 'gray' },
        ]}
      />,
    );
  };

  return (
    <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
      {isDeleted ? (
        <DeleteComment isMyComment={isMyComment} />
      ) : (
        <>
          <header
            className={cn(
              'flex w-full items-center justify-between',
              isMyComment ? 'text-orange-500' : 'text-neutral-400',
            )}>
            <span className="body3-r">{commenterNickName}</span>
            <div className="gap-x-2 flex-center">
              <time className="sub2-m">{formatDateToYYMMDD(parseISOToDate(commentDate))}</time>
              {isMyComment && (
                <VscChromeClose
                  className="h-[18px] w-[18px] text-white hover:scale-transition-105"
                  onClick={() => {
                    handleDeleteComment(influencerId, reviewId, commentId);
                  }}
                />
              )}
            </div>
          </header>
          <p className="text-neutral-200 body2-r">{commentContent}</p>
        </>
      )}
    </div>
  );
};

export default ReviewCommentCard;
