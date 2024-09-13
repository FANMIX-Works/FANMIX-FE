'use client';

import { useEffect, useMemo, useState } from 'react';
import { LiaHomeSolid, LiaBookmark, LiaGem, LiaUser } from 'react-icons/lia';

import { ROUTES } from '@/constants/routes';
import useScrollDirection from '@/hooks/useScrollDirection';

const useBottomNavigationState = () => {
  const { scrollDirection, scrollPosition } = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 모바일에서 스크롤 시, 최상단/최하단일 때 추가로 스크롤 되었다가 되돌아가는 경우때문에 top, bottom 포지션 추가하여 visible 여부 설정
    // 최상단일 때 : show / 최하단일 때 : pb를 주기 때문에, 네비게이션 보이도록 설정
    if (scrollDirection === 'down' && scrollPosition !== 'top') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollDirection, scrollPosition]);

  const bottomNavigationItems = useMemo(
    () => [
      { label: ROUTES.HOME.LABEL, icon: LiaHomeSolid, path: ROUTES.HOME.PATH },
      { label: ROUTES.FOLLOW.LABEL, icon: LiaBookmark, path: ROUTES.FOLLOW.PATH },
      { label: ROUTES.FANCHANNEL.LABEL, icon: LiaGem, path: ROUTES.FANCHANNEL.PATH },
      { label: ROUTES.MYPAGE.LABEL, icon: LiaUser, path: ROUTES.MYPAGE.PATH },
    ],
    [],
  );

  return { bottomNavigationItems, isVisible };
};

export default useBottomNavigationState;
