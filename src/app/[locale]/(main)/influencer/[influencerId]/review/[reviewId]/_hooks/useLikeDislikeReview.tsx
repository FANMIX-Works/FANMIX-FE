'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useModalStore } from '@/stores/modalStore';

import MessageBox from '@/components/common/MessageBox';
import { useInformationToast } from '@/hooks/useInformationToast';

export const BUTTON_ACTION = {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE',
} as const;
type ButtonAction = keyof typeof BUTTON_ACTION;

export const useLikeDislikeReview = (
  reviewId: string,
  initialIsLiked: boolean,
  initialIsDisliked: boolean,
) => {
  const t = useTranslations('review_page');

  const openModal = useModalStore((state) => state.openModal);
  const { showErrorToast } = useInformationToast();

  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isDisliked, setIsDisliked] = useState(initialIsDisliked);

  const handleClickAction = (action: ButtonAction) => {
    if (isLiked || isDisliked) {
      showErrorToast(
        t(`이미 ${isLiked ? '추천' : '비추천'}한 리뷰입니다`),
        t('한 번 평가한 리뷰는 다시 평가할 수 없습니다'),
      );
      return;
    }
    const isClickLiked = action === BUTTON_ACTION.LIKE;
    openModal(
      <MessageBox
        title={t(`정말 ${isClickLiked ? '추천' : '비추천'}하시겠어요?`)}
        description={t(
          `한줄리뷰는 한번 ${isClickLiked ? '추천' : '비추천'}하면 다시 바꿀 수 없어요`,
        )}
        buttons={[
          { text: t('취소'), color: 'gray' },
          {
            text: isClickLiked ? t('추천') : t('비추천'),
            color: isClickLiked ? 'orange' : 'white',
            onClick: () => {
              alert(`${reviewId} ${isClickLiked ? '추천' : '비추천'}`);
              if (isClickLiked) {
                setIsLiked(true);
              } else {
                setIsDisliked(true);
              }
            },
          },
        ]}
      />,
    );
  };

  return {
    isLiked,
    isDisliked,
    handleClickAction,
  };
};
