import Image from 'next/image';

import { VscPassFilled } from 'react-icons/vsc';

import InteractionStats from './InteractionStats';
import InfluencerRatingBar from './InfluencerRatingBar';

import type { InfluencerReview } from '@/types/domain/influencerType';

interface InfluencerReviewCardProps {
  data: InfluencerReview;
}

const InfluencerReviewCard = ({ data }: InfluencerReviewCardProps) => {
  const interactionData = {
    likesCount: data.likesCount,
    dislikesCount: data.dislikesCount,
    commentsCount: data.commentsCount,
    createdAt: data.createdAt,
  };
  return (
    <article className="flex h-[124px] w-full gap-4">
      <figure aria-label="인플루언서 사진" className="relative h-[124px] w-[100px] flex-shrink-0">
        <Image
          priority
          src={data.influencer.imageSrc}
          alt="인플루언서의 프로필 이미지"
          fill
          sizes="100px"
          className="object-cover"
        />
      </figure>
      <div className="w-full overflow-hidden">
        <header aria-label="인플루언서 이름" className="mb-1.5 flex items-center gap-1">
          <h1 className="body2-sb">{data.influencer.name}</h1>
          <VscPassFilled className="h-[18px] w-[18px] text-lime-400" />
        </header>
        <div className="flex flex-col gap-[14px]">
          <section aria-label="인플루언서 평가 점수">
            <InfluencerRatingBar {...data.rating} />
          </section>
          <section
            aria-label="한줄 리뷰"
            className="flex h-[60px] w-full flex-col justify-center gap-1.5 bg-neutral-800 p-2.5">
            <p className="truncate body3-m">{data.content}</p>
            <footer>
              <InteractionStats {...interactionData} />
            </footer>
          </section>
        </div>
      </div>
    </article>
  );
};

export default InfluencerReviewCard;
