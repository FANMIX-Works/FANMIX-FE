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
import QuickLinksNavigation from './QuickLinksNavigation';

const MainSearch = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <VscSearch
          aria-label="메인 검색"
          className="h-[22px] w-[22px] hover:scale-transition-105"
        />
      </SheetTrigger>
      <SheetContent side="bottom" className="h-full bg-black px-5 pt-9 text-left text-white">
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
          <h2 className="sr-only">검색 결과</h2>
          <div>
            <h3 className="mb-5 text-neutral-500 body2-m">검색제안</h3>
            <QuickLinksNavigation />
            {/* <ul className='flex flex-col justify-center gap-y-6 h2-m'>
              <li>
                <LiaGem className='w-[22px] h-[22px] text-lime-400'/>
                <
              </li>
            </ul> */}
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default MainSearch;
