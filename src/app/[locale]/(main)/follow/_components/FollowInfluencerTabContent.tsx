'use client';
import SortOptionsList from '@/components/common/SortOptionsList';
import FollowInfluencerList from './FollowInfluencerList';

import { useFollowInfluencerSortOptions } from '../_hooks/useFollowInfluencerSortOptions';

const FollowInfluencerTabContent = () => {
  const { sort, sortButtons } = useFollowInfluencerSortOptions();

  return (
    <div className="mt-5 flex h-full flex-col">
      <SortOptionsList sortButtons={sortButtons} />
      <FollowInfluencerList sort={sort} />
    </div>
  );
};
export default FollowInfluencerTabContent;
