import { cn } from '@/lib/utils';

const MAX_SCORE = 10;

const ReviewScoreCard = () => {
  const average = 10;
  const metrics = [
    { label: '콘텐츠', score: 10 },
    { label: '소통', score: 3 },
    { label: '신뢰', score: 4 },
  ];
  return (
    <div
      aria-label="리뷰 평균 점수"
      className="h-[135px] w-full items-center gap-12 bg-orange-700/20 pl-8 pr-4 flex-center">
      <figure className="relative h-[88px] w-24">
        <div className="text-[50px] font-semibold leading-[70px] text-orange-500">{average}</div>
        <figcaption className={cn('absolute bottom-[-5px] right-[10px]', average > 9 && 'right-0')}>
          <div className="absolute left-[-40px] top-[-10px] h-[1px] w-[50px] rotate-[-45deg] transform bg-white/50" />
          <span className="text-white/50 h2-m">{MAX_SCORE}</span>
        </figcaption>
      </figure>
      <ul
        aria-label="세부 평가 항목"
        className="flex flex-col justify-center gap-3 text-neutral-400 sub1-m">
        {metrics.map((metric) => (
          <li key={metric.label} className="flex flex-col justify-center gap-[5px]">
            <label>{metric.label}</label>
            <ScoreBar score={metric.score} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewScoreCard;

interface ScoreBarProps {
  score: number;
}
const ScoreBar = ({ score }: ScoreBarProps) => {
  return (
    <div className="flex items-center gap-[3px]">
      {[...Array(MAX_SCORE)].map((_, index) => (
        <div
          key={index}
          className={cn('h-[3px] w-[14px]', index < score ? 'bg-orange-600' : 'bg-neutral-600')}
        />
      ))}
    </div>
  );
};
