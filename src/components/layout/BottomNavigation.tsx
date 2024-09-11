'use client';

import { cn } from '@/lib/utils';
import { LiaHomeSolid, LiaBookmark, LiaEnvelope, LiaUser } from 'react-icons/lia';

import { ROUTES } from '@/constants/routes';
import { Link, usePathname } from '@/i18n/routing';

const BottomNavigation = () => {
  const pathname = usePathname();
  const navItems = [
    { label: '홈', icon: LiaHomeSolid, path: ROUTES.HOME },
    { label: '팔로우', icon: LiaBookmark, path: ROUTES.FOLLOW },
    { label: '팬채널', icon: LiaEnvelope, path: ROUTES.FANCHANNEL },
    { label: '마이', icon: LiaUser, path: ROUTES.MY },
  ];
  return (
    <nav className="z-5 absolute bottom-0 flex h-[80px] w-full justify-between bg-darkgray/70 px-5 backdrop-blur-[4px]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.path}>
            <div className="h-14 w-14 gap-[2px] text-sub1-m text-neutral-400 flex-col-center hover:scale-transition-105">
              <Icon className={cn('h-6 w-6', isActive && 'text-orange-1')} />
              <span className={cn(isActive && 'sb text-white')}>{item.label}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
