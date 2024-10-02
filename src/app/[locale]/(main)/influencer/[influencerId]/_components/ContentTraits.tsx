import { useMemo } from 'react';

import { Separator } from '@/components/ui/separator';
import { ENERGY, ORIGINALITY, TONE } from '@/constants/contentTraits';

// #20240929.syjang, 컴포넌트 정리 필요
interface ContentTraitsProps {
  originalityScore: number; // 대중적-독창적
  toneScore: number; // 가벼운-진지한
  energyScore: number; // 차분한-역동적
}

const ContentTraits = ({
  originalityScore = 5,
  toneScore = 5,
  energyScore = 5,
}: ContentTraitsProps) => {
  const traitList = useMemo(
    () => [ORIGINALITY[originalityScore - 1], TONE[toneScore - 1], ENERGY[energyScore - 1]],
    [originalityScore, toneScore, energyScore],
  );

  return (
    <ul className="flex-center">
      {traitList.map(({ LABEL, ICON }, index) => (
        <li key={LABEL} className="flex flex-1 items-center">
          <div className="flex-1 gap-0.5 text-lime-400 flex-col-center">
            <ICON className="h-[22px] w-[22px]" />
            <div className="text-white body2-m">{LABEL}</div>
          </div>
          {index !== traitList.length - 1 && (
            <Separator
              orientation="vertical"
              className="mx-0.5 h-[60px] w-[1px] flex-shrink-0 bg-neutral-500"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContentTraits;
