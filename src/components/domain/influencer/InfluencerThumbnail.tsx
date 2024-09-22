import Image from 'next/image';
import { useId } from 'react';
import { FaCheck } from 'react-icons/fa6';

export interface InfluencerThumbnailProps {
  influencerId: string;
  name: string;
  imageSrc: string;
  isVerified: boolean;
}

const InfluencerThumbnail = ({
  influencerId,
  name,
  imageSrc,
  isVerified,
}: InfluencerThumbnailProps) => {
  const figureId = useId();
  return (
    <figure
      className="relative h-[130px] w-28 shrink-0 cursor-pointer"
      aria-labelledby={`${figureId}-influencer-${influencerId}`}>
      <Image
        src={imageSrc}
        alt={`인플루언서 ${name}의 프로필 이미지`}
        fill
        className="object-cover"
      />

      <figcaption
        id={`${figureId}-influencer-${influencerId}`}
        className="absolute bottom-0 flex h-[60px] w-full items-end justify-center pb-2 text-white neutral-800-gradient body3-sb">
        {name}
        {isVerified && <span className="sr-only">(인증된 인플루언서)</span>}
      </figcaption>
      {isVerified && (
        <>
          <div
            className="absolute right-[4.25px] top-[6.25px] h-[17.5px] w-[17.5px] rounded-full bg-lime-400 pt-0.5 flex-center"
            aria-hidden="true">
            <FaCheck className="h-3 w-3 text-black" />
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-lime-400" aria-hidden="true" />
        </>
      )}
    </figure>
  );
};

export default InfluencerThumbnail;
