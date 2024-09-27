'use client';

import { VscSend } from 'react-icons/vsc';
import UserAvatar from '@/components/domain/user/UserAvatar';

interface UserProfileProps {
  imageSrc: string;
  userNickName: string;
}
const UserProfile = ({ imageSrc, userNickName }: UserProfileProps) => {
  const handleClickSendDM = () => {
    alert('DM 기능은 준비중입니다.');
  };
  return (
    <div className="flex h-[66px] items-center justify-between gap-4 bg-neutral-800">
      <div className="flex items-center gap-3 px-2.5 py-[9px]">
        <UserAvatar size={48} imageSrc={imageSrc} userNickName={userNickName} />
        <h2 className="h2-sb">{userNickName}</h2>
      </div>
      <div className="h-full w-10 flex-center fanmix-gradient">
        <VscSend className="h-5 w-5 hover:scale-transition-105" onClick={handleClickSendDM} />
      </div>
    </div>
  );
};

export default UserProfile;
