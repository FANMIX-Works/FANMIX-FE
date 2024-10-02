'use client';

import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { VscSearch } from 'react-icons/vsc';
import CategorySearchResult from './CategorySearchResult';
// import QuickLinksNavigation from './QuickLinksNavigation';
import InfluencerSearchResult from './InfluencerSearchResult';

const MainSearch = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <VscSearch
          aria-label="메인 검색"
          className="h-[22px] w-[22px] hover:scale-transition-105"
        />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="flex h-full justify-center bg-black px-5 pt-9 text-white">
        <div className="w-full md:w-[768px]">
          <SheetHeader className="mb-8">
            <SheetTitle className="text-orange-600 body1-sb">FANMIX 브랜딩 카피</SheetTitle>
            <SheetDescription className="text-neutral-400 body3-r">
              FAN과 Influencer가 MIX되는 공간
            </SheetDescription>
          </SheetHeader>
          <section aria-label="검색어 입력" className="mb-[60px]">
            <div className="relative w-full">
              <Input
                className="h-11 w-full border-neutral-300 bg-neutral-900 py-[13px] pl-10 pr-3 text-white body2-r placeholder:text-neutral-500"
                placeholder="인플루언서 / 커뮤니티 검색"
                type="text"
                inputMode="text"
                enterKeyHint="send"
              />
              <button type="submit" className="absolute left-3 top-[13px]">
                <VscSearch className="h-[18px] w-[18px] text-white" />
              </button>
            </div>
          </section>
          <section aria-label="검색결과">
            <div>
              <h2 className="mb-5 text-neutral-500 body2-m">검색 제안</h2>
              {/* <QuickLinksNavigation /> */}
              <div className="flex flex-col gap-y-6">
                <InfluencerSearchResult />
                <CategorySearchResult />
              </div>
            </div>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainSearch;
