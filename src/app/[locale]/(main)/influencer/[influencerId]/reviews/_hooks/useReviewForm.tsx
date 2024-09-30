'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modalStore';
import MessageBox from '@/components/common/MessageBox';
import ScoreSelectBox from '../_components/ScoreSelectBox';
import { useTranslations } from 'next-intl';

const reviewSchema = z.object({
  reviewContent: z.string().min(1),
  contentsRating: z.number().min(1).max(10),
  communicationRating: z.number().min(1).max(10),
  trustRating: z.number().min(1).max(10),
});

type ReviewFormData = z.infer<typeof reviewSchema>;
type MetricKey = keyof Omit<ReviewFormData, 'reviewContent'>;

const useReviewForm = (isModify: boolean, defaultReviewData?: ReviewFormData) => {
  const t = useTranslations('review_form');
  const { openModal, closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: defaultReviewData || {
      reviewContent: '',
      contentsRating: 0,
      communicationRating: 0,
      trustRating: 0,
    },
    mode: 'onChange',
  });

  const contentsRating = watch('contentsRating');
  const communicationRating = watch('communicationRating');
  const trustRating = watch('trustRating');

  const onSubmit = (data: ReviewFormData) => {
    console.log(data);
    // TODO: 제출 로직 추가
    openSuccessMessage();
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

  const openSuccessMessage = () => {
    openModal(
      <MessageBox
        title={isModify ? t('한줄리뷰가 수정되었어요') : t('한줄리뷰가 등록되었어요')}
        buttons={[{ text: t('확인'), variant: 'primary' as const }]}
      />,
    );
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    isValid,
    handleClickMetric,
    metricList,
  };
};

export default useReviewForm;
