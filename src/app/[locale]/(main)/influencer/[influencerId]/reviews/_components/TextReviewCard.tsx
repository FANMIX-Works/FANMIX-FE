import InteractionStats from '@/components/domain/board/InteractionStats';
import { Separator } from '@/components/ui/separator';
import { formatDateToYYMMDD } from '@/lib/date';
import { cn } from '@/lib/utils';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

interface TextReviewCardProps {
  isMyReview?: boolean;
}
const TextReviewCard = ({ isMyReview }: TextReviewCardProps) => {
  return (
    <article
      className={cn(
        'flex w-full cursor-pointer flex-col justify-center py-[15px]',
        isMyReview && 'bg-orange-700/[8%]',
      )}>
      <aside className="mb-[5px] flex items-center justify-between">
        <span className={cn('sub1-r', isMyReview ? 'text-orange-500' : 'text-neutral-300')}>
          작성한 유저 이름
        </span>
        <span className={cn('sub2-m', isMyReview ? 'text-orange-500' : 'text-neutral-400')}>
          {formatDateToYYMMDD(new Date())}
        </span>
      </aside>
      <h1 className="mb-2.5 body2-r">
        내 글 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 내 글 텍스트 텍스트 텍스트 텍스트
        텍스트 텍스트
      </h1>
      <footer className="flex w-full items-center justify-between">
        <InteractionStats
          boardCardType={BOARD_CARD_TYPE.REVIEW}
          {...{ likesCount: 3, dislikesCount: 4, commentsCount: 10 }}
        />
        <span className="text-neutral-400 sub2-m">
          <ul className="gap-2 flex-center">
            <li className="flex items-center gap-2">
              <span>콘텐츠 10</span>
              <Separator orientation="vertical" className="h-2.5 bg-neutral-400" />
            </li>
            <li className="flex items-center gap-2">
              <span>소통 10</span>
              <Separator orientation="vertical" className="h-2.5 bg-neutral-400" />
            </li>
            <li className="flex items-center gap-2">
              <span>신뢰 10</span>
            </li>
          </ul>
        </span>
      </footer>
    </article>
  );
};

export default TextReviewCard;
