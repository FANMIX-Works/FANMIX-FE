import InfluencerThumbnail, {
  type InfluencerThumbnailProps,
} from '@/components/domain/influencer/InfluencerThumbnail';
import { ScrollBar } from '@/components/ui/scroll-area';
import { ScrollArea } from '@radix-ui/react-scroll-area';

interface InfluencerShowcaseProps {
  influencers: InfluencerThumbnailProps[]; // influencerList에서 변경
}

const InfluencerShowcase = ({ influencers }: InfluencerShowcaseProps) => {
  return (
    <ScrollArea className="w-full">
      <ul className="flex gap-1">
        {influencers.map((influencer) => (
          <li key={influencer.influencerId}>
            <InfluencerThumbnail {...influencer} />
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default InfluencerShowcase;