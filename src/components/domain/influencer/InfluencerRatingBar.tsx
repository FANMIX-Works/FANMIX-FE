import { useMemo, Fragment } from 'react';

import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import { LiaStarSolid } from 'react-icons/lia';

import type { InfluencerRatingMetrics } from '@/types/domain/influencerType';

interface InfluencerRatingBarProps extends InfluencerRatingMetrics {}

const InfluencerRatingBar = ({
  contentScore,
  communicationScore,
  trustworthinessScore,
}: InfluencerRatingBarProps) => {
  const t = useTranslations('influencer_rating_bar');
  const { metrics, average } = useMemo(() => {
    const metricsArray = [
      { label: t('콘텐츠'), score: contentScore },
      { label: t('소통'), score: communicationScore },
      { label: t('신뢰'), score: trustworthinessScore },
    ];
    const avgScore = Math.round((contentScore + communicationScore + trustworthinessScore) / 3);
    return { metrics: metricsArray, average: avgScore };
  }, [t, contentScore, communicationScore, trustworthinessScore]);
  return (
    <div className="flex h-5 w-full sub1-sb">
      <h3 className="w-10 flex-shrink-0 gap-[2.5px] bg-orange-600 flex-center">
        <LiaStarSolid className="h-3 w-3" />
        <span>{average}</span>
      </h3>
      <ul className="flex w-full items-center gap-2.5 px-2.5 orange-600-gradient">
        {metrics.map((metric, index) => (
          <Fragment key={metric.label}>
            <li className="gap-1 flex-center">
              <label className="sub1-r">{metric.label}</label>
              <span>{metric.score}</span>
            </li>
            {index !== metrics.length - 1 && (
              <Separator orientation="vertical" className="h-3 w-[1px] bg-orange-200" />
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default InfluencerRatingBar;
