import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('한줄 리뷰'),
  };
}

export default function InfluencerReviewPage({
  params: { influencerId, reviewId },
}: {
  params: { influencerId: string; reviewId: string };
}) {
  return <div>{`${influencerId}, 인플루언서 한줄리뷰, ${reviewId} 상세 페이지`}</div>;
}
