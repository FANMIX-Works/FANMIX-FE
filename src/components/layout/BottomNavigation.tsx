'use client';

import { memo } from 'react';

import { cn } from '@/lib/utils';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { LiaAngleUpSolid } from 'react-icons/lia';

import { getRootPath } from '@/lib/text';

import { useMainScrollTop } from './hooks/useMainScrollTop';
import { useBottomNavigationState } from './hooks/useBottomNavigationState';

interface BottomNavigationProps {
  mainRef: React.RefObject<HTMLElement>;
}

const BottomNavigation = ({ mainRef }: BottomNavigationProps) => {
  const t = useTranslations('bottom_nav');
  const pathname = usePathname();
  const currentRoot = getRootPath(pathname);
  const { bottomNavigationItems, showBottomNav, showTopFAB } = useBottomNavigationState(mainRef);
  const { handleScrollToTop } = useMainScrollTop(mainRef); // 최상단으로 스크롤하는 함수

  return (
    <nav
      className={cn(
        'z-5 absolute bottom-0 flex h-20 w-full justify-between bg-neutral-800/70 px-5 transition-transform duration-300 ease-in-out blur-10-shadow',
        showBottomNav ? 'translate-y-0' : 'translate-y-full', // 스크롤 방향에 따라 슬라이드 효과
      )}>
      {bottomNavigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentRoot === item.root;
        return (
          <Link href={item.root} key={item.root}>
            <div className="h-14 w-14 gap-[2px] text-neutral-400 flex-col-center sub1-m hover:scale-transition-105">
              <Icon className={cn('h-6 w-6', isActive && 'text-orange-600')} />
              <span className={cn(isActive && 'text-white sub1-sb')}>{t(item.label)}</span>
            </div>
          </Link>
        );
      })}
      {showTopFAB && (
        <button
          aria-label="최상단 이동 버튼"
          className="absolute right-5 top-[-84px] h-[60px] w-[60px] rounded-full bg-orange-700/70 flex-center"
          onClick={handleScrollToTop}>
          <LiaAngleUpSolid className="h-[22px] w-[22px]" />
        </button>
      )}
    </nav>
  );
};

export default memo(BottomNavigation);
