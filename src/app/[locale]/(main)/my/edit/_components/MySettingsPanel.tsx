'use client';

import { Switch } from '@/components/ui/switch';
import { useUserStore } from '@/stores/userStore';

import { useTranslations } from 'next-intl';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

const MySettingsPanel = () => {
  const t = useTranslations('my_page_edit_page');
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <ComponentSpinner />;
  }
  const profileInfo = [
    { label: t('닉네임'), value: user.nickName },
    { label: t('내 소개'), value: user?.introduce },
    { label: t('성별'), value: user.gender },
    { label: t('출생연도'), value: user.birthYear },
    { label: t('국적'), value: user.nationality },
  ];

  return (
    <div>
      <ul aria-label="사용자 기본 정보" className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-6">
        {profileInfo.map((row) => (
          <li key={row.label} className="contents">
            {/* 클릭 시 모달 or select 박스 뜨게 수정 필요 */}
            <div className="flex pt-2 text-neutral-200 body3-m">{row.label}</div>
            <div className="bg-neutral-800 px-4 py-2.5 body3-r">{row.value}</div>
          </li>
        ))}
      </ul>
      <div aria-label="인플루언서 모드" className="my-[42px] flex items-center justify-between">
        <label htmlFor="influencer-mode" className="text-neutral-200 body3-m">
          {t('인플루언서 모드')}
        </label>
        <div className="gap-2.5 flex-center">
          <span className="text-neutral-200 body3-sb">OFF</span>
          <Switch id="influencer-mode" disabled />
        </div>
      </div>
    </div>
  );
};

export default MySettingsPanel;
