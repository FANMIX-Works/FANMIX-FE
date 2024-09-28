import { Metadata, Viewport } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('인플루언서'),
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FF5B46',
};

export default function InfluencerPage({
  params: { influencerId },
}: {
  params: { influencerId: string };
}) {
  return <div>{`${influencerId}, 인플루언서 상세 페이지`}</div>;
}
