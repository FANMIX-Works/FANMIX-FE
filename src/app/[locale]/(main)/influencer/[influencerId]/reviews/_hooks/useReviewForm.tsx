'use client';

import { Dispatch } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useModalStore } from '@/stores/modalStore';

import MessageBox from '@/components/common/MessageBox';
import ScoreSelectBox from '../_components/ScoreSelectBox';

import { useInformationToast } from '@/hooks/useInformationToast';
import { useCreateInfluencerReveiw } from '@/hooks/queries/useReviewService';
import {
  REVIEW_MODE,
  reviewFormSchema,
  type ReviewMode,
  type ReviewFormData,
  type MyLatestReview,
} from '@/types/domain/reviewType';
import { formatDateToISO } from '@/lib/date'; // 임시로 import, 백엔드에서 데이터 돌려주면 이거 없앨거임

type MetricKey = keyof Omit<ReviewFormData, 'content'>;

export const useReviewForm = (
  influencerId: number,
  setReviewMode: Dispatch<React.SetStateAction<ReviewMode>>,
  setMyLatestReviewData: Dispatch<React.SetStateAction<MyLatestReview | null>>,
  isModify: boolean,
  defaultReviewData: MyLatestReview | null,
) => {
  const t = useTranslations('review_form');
  const { openModal, closeModal } = useModalStore();
  const { showErrorToast } = useInformationToast();
  const defaultReviewFormValues = {
    content: defaultReviewData?.reviewContent || '',
    contentsRating: defaultReviewData?.contentsRating || 0,
    communicationRating: defaultReviewData?.communicationRating || 0,
    trustRating: defaultReviewData?.trustRating || 0,
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: defaultReviewFormValues,
    mode: 'onChange',
  });

  const contentsRating = watch('contentsRating');
  const communicationRating = watch('communicationRating');
  const trustRating = watch('trustRating');

  const createReviewMutation = useCreateInfluencerReveiw();
  const onSubmit = async (reviewData: ReviewFormData) => {
    try {
      await createReviewMutation.mutateAsync({ influencerId, reviewData });
      // TODO: 제출 로직 추가
      alert('onSubmit의 await, 리뷰생성 성공');

      openModal(
        <MessageBox
          title={isModify ? t('한줄리뷰가 수정되었어요') : t('한줄리뷰가 등록되었어요')}
          buttons={[{ text: t('확인'), color: 'lime' }]}
        />,
      );

      setMyLatestReviewData({
        reviewId: 1, //이거 백엔드에서 돌려줘야함
        isBefore15Days: false, //마지막 리뷰 15일 전인지 후인지
        contentsRating: reviewData.contentsRating,
        communicationRating: reviewData.communicationRating,
        trustRating: reviewData.trustRating,
        reviewDate: formatDateToISO(new Date()), // 이거 백엔드에서 돌려줘야함
        reviewContent: reviewData.content,
      });
      setReviewMode(REVIEW_MODE.VIEW);
    } catch {
      // 여기서 useToast 하기
      alert('onSubmit의 await, 리뷰 생성 실패');
    }
  };

  const onError = () => {
    showErrorToast(
      t('리뷰를 완성해 주세요'),
      t('내용과 모든 항목의 점수를 입력해야 한줄 리뷰를 등록할 수 있습니다'),
    );
  };

  const handleSelectMetricScore = (metricKey: MetricKey, selectScore: number) => {
    setValue(metricKey, selectScore, { shouldValidate: true });
    closeModal();
  };

  const handleClickMetric = (title: string, metricKey: MetricKey, metricScore: number) => {
    openModal(
      <ScoreSelectBox
        title={title}
        defaultScore={metricScore}
        handleSelectScore={(selectScore) => handleSelectMetricScore(metricKey, selectScore)}
      />,
    );
  };

  const metricList: Array<{ key: MetricKey; label: string; score: number }> = [
    { key: 'contentsRating', label: t('콘텐츠'), score: contentsRating },
    { key: 'communicationRating', label: t('소통'), score: communicationRating },
    { key: 'trustRating', label: t('신뢰'), score: trustRating },
  ];

  return {
    register,
    handleSubmit,
    onSubmit,
    onError,
    isValid,
    handleClickMetric,
    metricList,
  };
};
