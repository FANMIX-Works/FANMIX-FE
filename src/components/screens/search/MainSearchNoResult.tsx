import { ROUTES } from '@/constants/routes';
import React from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { useTranslations } from 'use-intl';

// 검색 결과가 없을 때 보여줄 메뉴 리스트
const noResultsMenu = [
  { id: 1, name: '인플루언서 찾기', path: ROUTES.INFLUENCER_INDEX.PATH },
  { id: 2, name: "Editor's Pick", path: '' },
  { id: 3, name: '한줄 리뷰', path: '' },
  { id: 4, name: '팬 채널', path: ROUTES.FAN_CHANNEL_INDEX.PATH },
  { id: 5, name: '커뮤니티', path: ROUTES.COMMUNITY_INDEX.PATH },
];

const handleAlert = (item: { name: string; path: string }) => {
  if (item.name === "Editor's Pick") {
    alert('준비 중인 기능입니다.');
  }
};

const MainSearchNoResult = ({ headerText }: { headerText: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t: any = useTranslations('search_menu');
  return (
    <ul className="mt-[24px] flex flex-col text-neutral-200 body2-r">
      <p className="mb-5 text-neutral-500 body2-m">{headerText}</p>
      {noResultsMenu.map((item) => (
        <li key={item.id} className="mb-6 flex cursor-pointer items-center h2-m">
          <a href={item.path} className="flex items-center" onClick={() => handleAlert(item)}>
            <VscChevronRight className="mr-[12px]" />
            {t(item.name)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MainSearchNoResult;
