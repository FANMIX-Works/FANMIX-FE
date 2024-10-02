'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import useFanChannelAccess from '@/hooks/useFanChannelAccess';

interface GoFanChannelButtonProps {
  children: React.ReactNode;
  communityId: string;
  isFollowing?: boolean;
  className?: string;
}

const GoFanChannelButton = ({
  children,
  communityId,
  isFollowing,
  className,
}: GoFanChannelButtonProps) => {
  const { checkAccessAndNavigate } = useFanChannelAccess();

  return (
    <Button
      variant="destructive"
      className={cn(
        'h-9 px-4 py-2 body3-m',
        !isFollowing &&
          'border border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500/10',
        className,
      )}
      onClick={() => checkAccessAndNavigate(communityId, isFollowing)}>
      {children}
    </Button>
  );
};

export default GoFanChannelButton;
