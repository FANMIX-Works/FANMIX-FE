'use client';

import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useTranslations } from 'next-intl';
import { useInformationToast } from '@/hooks/useInformationToast';
import { useCreateInfluencerReviewComment } from '@/hooks/queries/useReviewService';

const commentSchema = z.object({
  commentContent: z.string().min(1),
});

type CommentFormData = z.infer<typeof commentSchema>;

export const useReviewCommentForm = (influencerId: number, reviewId: number) => {
  const t = useTranslations('review_page');
  const { showErrorToast } = useInformationToast();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    mode: 'onChange',
  });

  const createCommentMutation = useCreateInfluencerReviewComment();
  const onSubmit = async (data: CommentFormData) => {
    console.log(data);
    try {
      await createCommentMutation.mutateAsync({
        influencerId,
        reviewId,
        content: data.commentContent,
      });
    } catch {
      showErrorToast('댓글 작성에 실패했습니다.', '다시 시도해 주세요.');
    } finally {
      reset();
    }
  };

  const onError = () => {
    showErrorToast(t('댓글을 입력해 주세요'), t('댓글 내용을 입력한 후 다시 시도해 주세요'));
  };

  return {
    register,
    handleSubmit,
    isValid,
    onSubmit,
    onError,
  };
};
