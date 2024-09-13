'use client';

import { memo } from 'react';

import Logo from '@/assets/logo/logo_symbol.svg';

import { useTranslations } from 'next-intl';
import useCurrentRouteLabel from '@/hooks/useCurrentRouteLabel';

import { ROUTES } from '@/constants/routes';
import { ExpandableMenu, MainAlarm, MainSearch } from '../features/header';

const Header = () => {
  const t = useTranslations('top_title');
  const currentLabel = useCurrentRouteLabel();

  return (
    <header className="mt-[10px] flex h-[25px] w-full flex-shrink-0 items-center justify-between px-5">
      <h1 className="text-h2-sb text-neutral-300">
        {currentLabel === ROUTES.HOME.LABEL ? <Logo className="h-6 w-6" /> : t(currentLabel)}
      </h1>
      <nav className="gap-[18px] text-white flex-center">
        <MainSearch />
        <MainAlarm />
        <ExpandableMenu />
      </nav>
    </header>
  );
};

export default memo(Header);
