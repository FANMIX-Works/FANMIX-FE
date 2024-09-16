'use client';

import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';

import useInfluencerMode from '../hooks/useInfluencerMode';

interface UserSettingsPanelProps {
  userData: {
    userNickName: string;
    introduction: string;
    gender: string;
    birthYear: number;
    nationality: string;
  };
}

const UserSettingsPanel = ({ userData }: UserSettingsPanelProps) => {
  const { isInfluencerModeActive, handleChangeInfluencerMode } = useInfluencerMode(false);

  const profileInfo = [
    { label: '닉네임', value: userData.userNickName },
    { label: '내 소개', value: userData.introduction },
    { label: '성별', value: userData.gender },
    { label: '출생연도', value: userData.birthYear },
    { label: '국적', value: userData.nationality },
  ];

  return (
    <div>
      <ul aria-label="사용자 기본 정보" className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-6">
        {profileInfo.map((row) => (
          <li key={row.label} className="contents">
            {/* 클릭 시 모달 or select 박스 뜨게 수정 필요 */}
            <div className="flex pt-2 text-body3-m text-neutral-200">{row.label}</div>
            <div className="bg-neutral-800 px-4 py-2.5 text-body3-r">{row.value}</div>
          </li>
        ))}
      </ul>
      <div aria-label="인플루언서 모드" className="my-[42px] flex items-center justify-between">
        <label htmlFor="influencer-mode" className="text-body3-m text-neutral-200">
          인플루언서 모드
        </label>
        <div className="gap-2.5 flex-center">
          <span
            className={cn(
              'text-body3-sb',
              isInfluencerModeActive ? 'text-orange-600' : 'text-neutral-200',
            )}>
            {isInfluencerModeActive ? 'ON' : 'OFF'}
          </span>
          <Switch
            id="influencer-mode"
            checked={isInfluencerModeActive}
            onCheckedChange={handleChangeInfluencerMode}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPanel;
