'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import { z } from 'zod';
// const SEARCH_TYPE = {
//   INFLUENCER_NAME: 'INFLUENCER_NAME',
//   TAG: 'TAG',
// } as const;
// const SEARCH_SORT = {
//   VIEW_COUNT: 'VIEW_COUNT',
//   RATING: 'RATING',
//   LATEST_REVEIEW: 'LATEST_REVEIEW',
// } as const;
// type SearchType = keyof typeof SEARCH_TYPE;
// type SearchSort = keyof typeof SEARCH_SORT;

// const influencerSearchSchema = z.object({
//   searchType: z.enum(Object.keys(SEARCH_TYPE) as [SearchType, ...SearchType[]]),
//   keyword: z.string().min(1),
//   sort: z.enum(Object.keys(SEARCH_SORT) as [SearchSort, ...SearchSort[]]),
// });
// type InfluencerSearchFormData = z.infer<typeof influencerSearchSchema>;

const InfluencerSearchForm = () => {
  return (
    <div className="gap-x-2.5 flex-center">
      <Select>
        <SelectTrigger className="w-[82px] flex-shrink-0">
          <SelectValue placeholder="구분" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="INFLUENCER_NAME">활동명</SelectItem>
            <SelectItem value="TAG">태그</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input className="flex-1 border-none" placeholder="검색어를 입력하세요" />
    </div>
  );
};

export default InfluencerSearchForm;
