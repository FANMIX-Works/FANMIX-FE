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
  console.log(`${influencerId}, 인플루언서 한줄리뷰, ${reviewId} 상세 페이지`);
  return (
    <div className="pt-[55px]">
      <section aria-label="리뷰 상세 내용">
        <article>
          <header></header>
          <p>
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          </p>
          <footer></footer>
          <div>
            <button>추천</button>
            <button>비추천</button>
          </div>
        </article>
      </section>
      <section aria-label="리뷰 추천, 비추천"></section>
      <section aria-label="리뷰 댓글 리스트">
        <div className="h-[2000px] w-full bg-red-50">d</div>
      </section>
      <section className="sticky bottom-0 h-6 w-full bg-orange-300"></section>
    </div>
  );
}
