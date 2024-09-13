import OnePickInfluencer from '@/components/features/influencer/onePickInfluencer/OnePickInfluencer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { DOM_IDS } from '@/constants/domIdentifiers';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { VscChevronRight } from 'react-icons/vsc';

export default function MyPage() {
  const t = useTranslations('my_page');
  const data = {
    userNickName: '닉네임이다',
    imageSrc: '', // 비워질 경우, fallback으로 이름 첫글자 표시
  };
  const onePickData = {
    influencerName: '으뜸언니',
    imageSrc: '', // 비워질 경우, fallback으로 이름 첫글자 표시
  };

  return (
    <main id={DOM_IDS.CURRENT_SCROLL_PAGE} className="h-full w-full pt-7 page-scrollable-container">
      <section
        aria-label="사용자 프로필"
        className="mx-5 mb-4 flex h-[100px] items-center justify-between py-3 pl-4 pr-2.5 fanmix-gradient">
        <div className="gap-3.5 flex-center">
          <Avatar className="h-[76px] w-[76px] flex-shrink-0">
            <AvatarImage src={data.imageSrc} alt="유저 프로필 사진" />
            <AvatarFallback className="bg-orange-300/40 text-h1-sb">
              {data.userNickName[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <h2 className="text-h2-sb">{data.userNickName}</h2>
            <p className="text-body3-r text-orange-200">0000000@gmail.com</p>
          </div>
        </div>
        <VscChevronRight className="h-5 w-5 hover:scale-transition-105" />
      </section>
      <section aria-label="한줄 소개" className="mx-5 mb-8">
        <p className="text-body3-r">
          한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개
          텍스트 한줄소개 텍스트 한줄소개
        </p>
      </section>
      <section aria-label="원픽 인플루언서" className="mb-12">
        <OnePickInfluencer onePickData={onePickData} />
      </section>
      <Separator className="h-[6px] bg-neutral-900" />
      <nav aria-label="사용자 메뉴" className="mx-5 mb-9 mt-9">
        <ul className="flex flex-col justify-center gap-6 text-body1-r">
          {/* 활동 내역 path 확정되면 routes.ts 상수로 변경하기 */}
          <Link href="" className="h-6">
            {t('활동내역')}
          </Link>
          <Link href={ROUTES.FOLLOW.PATH} className="h-6">
            {t('팔로우')}
          </Link>
          {/* 고객센터는 기획자한테 전달받은 링크 열어주기 */}
          <a href="https://naver.com" className="h-6" target="_blank" rel="noopener noreferrer">
            {t('고객센터')}
          </a>
        </ul>
      </nav>
      <Separator className="h-[6px] bg-neutral-900" />
      <footer className="mx-5 mt-6">
        <button className="text-body2-r text-neutral-400">{t('로그아웃')}</button>
      </footer>
    </main>
  );
}
