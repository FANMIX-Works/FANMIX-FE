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
import { categoryData, categoryDataTypes } from '@/constants/categoryData';
import { useFilterLanguage } from '@/hooks/useFilterLanguage';
import { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { VscChevronRight } from 'react-icons/vsc';

const MainSearch = () => {
  const [filterText, setFilterText] = useState<string>('');
  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };
  const filteredData = useFilterLanguage<categoryDataTypes>(filterText, categoryData);

  // 검색 결과가 없을 때 보여줄 메뉴 리스트
  const noResultsMenu = [
    { id: 1, name: '인플루언서 찾기', link: 'https://www.naver.com' },
    { id: 2, name: "Editor's Pick", link: 'https://www.naver.com' },
    { id: 3, name: '한줄 리뷰', link: 'https://www.naver.com' },
    { id: 4, name: '팬 채널', link: 'https://www.naver.com' },
    { id: 5, name: '커뮤니티', link: 'https://www.naver.com' },
  ];
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
          {/* 검색바 영역 */}
          <IconInput
            svgIcon={<VscSearch />}
            placeholder="인플루언서 / 커뮤니티 검색"
            onChange={(e) => onChangeSearchValue(e)}
            value={filterText}
          />
          <hr />
          {/* 검색 결과 영역 */}
          {filteredData?.length > 0 ? (
            // 검색 결과가 있을 때의 영역
            <ul className="flex flex-col gap-4 text-neutral-200 body2-r">
              <p className="text-neutral-500 body2-m">검색 제안</p>
              {filteredData.map((res: categoryDataTypes) => (
                <li key={res?.id}>
                  {res?.ko} / {res?.en}
                </li>
              ))}
            </ul>
          ) : (
            // 검색 결과가 없을 때의 영역
            <ul className="flex flex-col gap-4 text-neutral-200 body2-r">
              <p className="text-neutral-500 body2-m">바로가기</p>
              {noResultsMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="flex items-center">
                    <VscChevronRight className="mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainSearch;
