import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import CommunityBanner from './_components/CommunityBanner';
import CommunityPostList from './_components/CommunityPostList';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('커뮤니티'),
  };
}

export default function CommunityPage({
  params: { communityId },
}: {
  params: { communityId: string };
}) {
  console.log(communityId);
  return (
    <div className="pt-[35px]">
      <div>태그들, Link로 만들어서 페이지 이동시키기</div>
      <CommunityBanner communityId={parseInt(communityId)} />
      <CommunityPostList />
    </div>
  );
}
