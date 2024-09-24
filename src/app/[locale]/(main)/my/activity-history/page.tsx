import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

import UserAvatar from '@/components/domain/user/UserAvatar';
import SlideBarTabs from '@/components/common/SlideBarTabs';

import MyReview from './_components/MyReview';
import MyPost from './_components/MyPost';

import { BOARD_TYPE } from '@/types/domain/board';

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
      content: <MyPost posts={postData} />,
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

const postData = [
  {
    postId: '1',
    boardType: BOARD_TYPE.FAN,
    boardName: '테일러 스위프트',
    content: '근데 아마도 사실은',
    interaction: {
      likesCount: 0,
      dislikesCount: 100,
      commentsCount: 2,
      createdAt: new Date(),
    },
  },
  {
    postId: '2',
    boardType: BOARD_TYPE.COMMUNITY,
    boardName: '뷰티',
    content: '유튜브는 재밌던데 문제는',
    interaction: {
      likesCount: 30,
      dislikesCount: 0,
      commentsCount: 22,
      createdAt: new Date(),
    },
  },
  {
    postId: '3',
    boardType: BOARD_TYPE.FAN,
    boardName: '테일러 스위프트',
    content:
      '테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은 테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은',
    interaction: {
      likesCount: 10,
      dislikesCount: 0,
      commentsCount: 2,
      createdAt: new Date(),
    },
  },
  {
    postId: '4',
    boardType: BOARD_TYPE.FAN,
    boardName: '테일러 스위프트',
    content:
      '테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은 테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은',
    interaction: {
      likesCount: 3,
      dislikesCount: 0,
      commentsCount: 0,
      createdAt: new Date(),
    },
  },
  {
    postId: '5',
    boardType: BOARD_TYPE.FAN,
    boardName: '테일러 스위프트',
    content:
      '테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은 테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은',
    interaction: {
      likesCount: 0,
      dislikesCount: 0,
      commentsCount: 2,
      createdAt: new Date(),
    },
  },
  {
    postId: '6',
    boardType: BOARD_TYPE.COMMUNITY,
    boardName: '뷰티',
    content: '유튜브는 재밌던데 문제는',
    interaction: {
      likesCount: 30,
      dislikesCount: 0,
      commentsCount: 22,
      createdAt: new Date(),
    },
  },
  {
    postId: '7',
    boardType: BOARD_TYPE.COMMUNITY,
    boardName: '뷰티',
    content: '유튜브는 재밌던데 문제는',
    interaction: {
      likesCount: 30,
      dislikesCount: 0,
      commentsCount: 22,
      createdAt: new Date(),
    },
  },
  {
    postId: '8',
    boardType: BOARD_TYPE.COMMUNITY,
    boardName: '만화',
    content: '유튜브는 재밌던데 문제는',
    interaction: {
      likesCount: 30,
      dislikesCount: 0,
      commentsCount: 22,
      createdAt: new Date(),
    },
  },
  {
    postId: '9',
    boardType: BOARD_TYPE.FAN,
    boardName: '달달',
    content: '유튜브는 재밌던데 문제는',
    interaction: {
      likesCount: 30,
      dislikesCount: 0,
      commentsCount: 22,
      createdAt: new Date(),
    },
  },
];
