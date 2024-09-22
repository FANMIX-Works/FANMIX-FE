import { useTranslations } from 'next-intl';

import SlideBarTabs from '@/components/common/SlideBarTabs';
import InfluencerReviewCard from '@/components/domain/influencer/InfluencerReviewCard';

import type { InfluencerReview } from '@/types/domain/influencerType';

const PopularContentTabs = () => {
  const t = useTranslations('main_page');

  // #20240921.syjang, tabs 내부 데이터를 부모로부터 받아올지, 여기서 데이터 땡겨올지 고민 필요
  const tabs = [
    {
      value: '1',
      label: t('인기 글'),
      content: <div className="mt-2.5 w-full text-center">인기 글 내역</div>,
    },
    {
      value: '2',
      label: t('인기 리뷰'),
      content: <PopularReview reviews={reviewData} />,
    },
  ];
  return <SlideBarTabs tabs={tabs} defaultValue="2" />;
};

export default PopularContentTabs;

interface PopularReview {
  reviews: InfluencerReview[];
}

const PopularReview = ({ reviews }: PopularReview) => {
  return (
    <ul className="mt-6 w-full gap-6 flex-col-center">
      {reviews.map((review) => (
        <li key={review.reviewId} className="w-full">
          <InfluencerReviewCard data={review} />
        </li>
      ))}
    </ul>
  );
};

// 테스트 데이터.
const reviewData = [
  {
    reviewId: '1',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: true,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워', // 한줄리뷰 내용
    likesCount: 33,
    dislikesCount: 1,
    commentsCount: 100,
    createdAt: new Date(),
  },
  {
    reviewId: '2',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: true,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워', // 한줄리뷰 내용
    likesCount: 33,
    dislikesCount: 1,
    commentsCount: 100,
    createdAt: new Date(),
  },
  {
    reviewId: '3',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: true,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워', // 한줄리뷰 내용
    likesCount: 33,
    dislikesCount: 1,
    commentsCount: 100,
    createdAt: new Date(),
  },
  {
    reviewId: '4',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: true,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워 언니 단발 귀여워', // 한줄리뷰 내용
    likesCount: 33,
    dislikesCount: 1,
    commentsCount: 100,
    createdAt: new Date(),
  },
];
