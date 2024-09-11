'use client';

import { cn } from '@/lib/utils';

import { Link, usePathname } from '@/i18n/routing';
import { LiaHomeSolid, LiaBookmark, LiaEnvelope, LiaUser } from 'react-icons/lia';

const BottomNavigation = () => {
  const pathname = usePathname();
  const navItems = [
    { label: '홈', icon: LiaHomeSolid, path: '/' },
    { label: '팔로우', icon: LiaBookmark, path: '/follow' },
    { label: '팬채널', icon: LiaEnvelope, path: '/fan-channel' },
    { label: '마이', icon: LiaUser, path: '/my' },
  ];
  return (
    <nav className="absolute bottom-0 z-10 flex h-[80px] w-full justify-between bg-darkgray/70 px-5 backdrop-blur-[4px]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.path}>
            <div className="h-14 w-14 gap-[2px] text-sub1-m text-neutral-400 flex-col-center">
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
