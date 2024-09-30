'use client';

import { cn } from '@/lib/utils';
import { VscIndent } from 'react-icons/vsc';
import useReviewForm from '../_hooks/useReviewForm';
import { useTranslations } from 'next-intl';

interface ReviewFormProps {
  isModify?: boolean;
  defaultReviewData?: {
    reviewContent: string;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
  };
}

const ReviewForm = ({ isModify = false, defaultReviewData }: ReviewFormProps) => {
  const t = useTranslations('review_form');
  const { register, handleSubmit, onSubmit, isValid, handleClickMetric, metricList } =
    useReviewForm(isModify, defaultReviewData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2.5 flex h-[76px] w-full">
        <textarea
          {...register('reviewContent')}
          className="h-full flex-1 resize-none bg-neutral-800 p-2 body3-r placeholder:text-neutral-500 placeholder:sub1-r focus:border-none focus:outline-none focus:ring-0"
          placeholder={t(
            '한번 남긴 한줄 리뷰는 15일 이내에 삭제가 가능합니다 가장 최근에 남긴 리뷰만 점수에 반영됩니다',
          )}
        />
        <button
          type="submit"
          disabled={!isValid}
          className={cn(
            'h-full w-10 flex-shrink-0 flex-center',
            isValid ? 'fanmix-gradient' : 'cursor-not-allowed bg-neutral-400',
          )}>
          <VscIndent className="h-[22px] w-[22px]" />
        </button>
      </div>
      <div className="w-full gap-[7px] flex-center">
        {metricList.map((metric) => (
          <button
            key={metric.key}
            className={cn(
              'box-border h-[34px] flex-1 gap-[5px] border flex-center body3-r',
              metric.score > 0 ? 'border-orange-500' : 'border-neutral-400 text-neutral-400',
            )}
            onClick={() => handleClickMetric(metric.label, metric.key, metric.score)}>
            {metric.label}
            {metric.score > 0 && <span className="text-orange-500 body3-m">{metric.score}</span>}
          </button>
        ))}
      </div>
    </form>
  );
};

export default ReviewForm;
