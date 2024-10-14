import { Metadata } from 'next';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import SlideBarTabs from '@/components/common/SlideBarTabs';

import MyHistoryProfile from './_components/MyHistoryProfile';

import { commentData } from '@/constants/testData';

import MyReviewHistory from './_components/MyReviewHistory';
// import PostHistory from '@/components/domain/user/activityHistory/PostHistory';
import CommentHistory from '@/components/domain/user/activityHistory/CommentHistory';

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
  const t = useTranslations('my_activity_history_page');
  const tabs = [
    {
      value: '1',
      label: t('내 한줄 리뷰'),
      content: <MyReviewHistory />,
    },
    // {
    //   value: '2',
    //   label: t('내 글'),
    //   content: <PostHistory />,
    // },
    {
      value: '3',
      label: t('내 댓글'),
      content: <CommentHistory comments={commentData} />,
    },
  ];

  return (
    <div className="m-5 h-[calc(100%-130px)] pb-20 pt-[35px]">
      <section aria-label="유저 정보" className="h-[54px]">
        <MyHistoryProfile />
      </section>
      <section aria-label="활동 내역 탭" className="h-full pt-5">
        <SlideBarTabs tabs={tabs} defaultValue="1" />
      </section>
    </div>
  );
}
