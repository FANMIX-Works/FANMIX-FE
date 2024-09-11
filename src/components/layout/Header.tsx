import { VscSearch, VscMenu } from 'react-icons/vsc';

const Header = () => {
  return (
    <header className="mt-[10px] flex h-[25px] w-full flex-shrink-0 items-center justify-between bg-slate-800 px-5">
      <h2 className="text-h2-sb text-neutral-300">마이페이지</h2>
      <nav className="gap-[18px] text-white flex-center">
        <VscSearch className="h-[22px] w-[22px] hover:scale-transition-105" />
        <VscMenu className="h-6 w-6 hover:scale-transition-105" />
      </nav>
    </header>
  );
};

export default Header;
