import { Link } from '@/i18n/routing';
import { VscChevronRight } from 'react-icons/vsc';

import UserAvatar from '../avatar/UserAvatar';

interface MyProfileProps {
  imageSrc: string;
  userNickName: string;
  introduction: string;
}

const MyProfile = ({ imageSrc, userNickName, introduction }: MyProfileProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/my/edit"
        className="flex h-[100px] items-center justify-between py-3 pl-4 pr-2.5 fanmix-gradient">
        <div className="gap-3.5 flex-center">
          <UserAvatar size={76} imageSrc={imageSrc} userNickName={userNickName} />
          <div className="flex flex-col justify-center">
            <h2 className="text-h2-sb">{userNickName}</h2>
            <p className="text-body3-r text-orange-200">0000000@gmail.com</p>
          </div>
        </div>
        <VscChevronRight className="h-5 w-5 hover:scale-transition-105" />
      </Link>
      <p className="text-body3-r">{introduction}</p>
    </div>
  );
};

export default MyProfile;
