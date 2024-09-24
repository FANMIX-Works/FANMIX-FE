import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

import MyReview from './_components/MyReview';
import UserAvatar from '@/components/domain/user/UserAvatar';
import SlideBarTabs from '@/components/common/SlideBarTabs';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('활동내역'),
  };
}

export default function MyActivityHistoryPage() {
  const data = {
    userNickName: '닉네임이다',
    imageSrc: '', // 비워질 경우, fallback으로 이름 첫글자 표시
    introduction:
      '한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개',
  };

  const tabs = [
    {
      value: '1',
      label: '내 한줄리뷰',
      content: <MyReview reviews={reviewData} />,
    },
    {
      value: '2',
      label: '내 글',
      content: <div>내 글</div>,
    },
    {
      value: '3',
      label: '내 댓글',
      content: <div>내 댓글</div>,
    },
  ];

  return (
    <div className="m-5 h-[calc(100%-130px)]">
      <section aria-label="유저 정보" className="h-[54px]">
        <div className="flex items-center gap-3.5">
          <UserAvatar size={54} imageSrc={data.imageSrc} userNickName={data.userNickName} />
          <div className="flex flex-col justify-center gap-0.5">
            <h2 className="body1-sb">{data.userNickName}</h2>
            <p className="text-neutral-500 body3-r">0000000@gmail.com</p>
          </div>
        </div>
      </section>
      <section aria-label="활동 내역 탭" className="h-full pt-5">
        <SlideBarTabs tabs={tabs} defaultValue="1" />
      </section>
    </div>
  );
}

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
    interaction: { likesCount: 33, dislikesCount: 1, commentsCount: 100, createdAt: new Date() },
  },
  {
    reviewId: '2',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: false,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워', // 한줄리뷰 내용
    interaction: {
      likesCount: 33,
      dislikesCount: 1,
      commentsCount: 100,
      createdAt: new Date(),
    },
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
    interaction: { likesCount: 33, dislikesCount: 1, commentsCount: 100, createdAt: new Date() },
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
    content: '언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워', // 한줄리뷰 내용
    interaction: { likesCount: 33, dislikesCount: 1, commentsCount: 100, createdAt: new Date() },
  },
  {
    reviewId: '5',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: true,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워', // 한줄리뷰 내용
    interaction: { likesCount: 33, dislikesCount: 1, commentsCount: 100, createdAt: new Date() },
  },
];
