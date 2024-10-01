'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import IconInput from '@/components/common/SearchInput';
import { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import MainSearchResultList from './MainSearchResultList';
import MainSearchNoResult from './MainSearchNoResult';

const MainSearch = () => {
  const [keyWord, setKeyword] = useState<string>('');
  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

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
        className="background flex h-full flex-col items-center justify-between bg-black text-white">
        <div className="flex w-full max-w-3xl flex-col gap-6">
          <SheetHeader className="items-start">
            <SheetTitle className="items-start text-orange-600 body1-sb">
              FANMIX 브랜딩 카피
            </SheetTitle>
            <SheetDescription className="items-start text-neutral-400 body3-r">
              FAN과 인플루언서가 함께하는 공간과 같은 서브 카피
            </SheetDescription>
          </SheetHeader>
          <IconInput
            svgIcon={<VscSearch />}
            placeholder="인플루언서 / 커뮤니티 검색"
            onChange={(e) => onChangeSearchValue(e)}
            value={keyWord}
          />
          {keyWord !== '' ? (
            <MainSearchResultList keyword={keyWord} headerText="검색 제안" />
          ) : (
            <MainSearchNoResult headerText="바로가기" />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainSearch;
