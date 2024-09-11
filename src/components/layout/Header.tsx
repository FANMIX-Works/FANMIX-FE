import MainSearch from '../features/mainSearch/MainSearch';
import ExpandableMenu from '../features/expandableMenu/ExpandableMenu';

const Header = () => {
  return (
    <header className="mt-[10px] flex h-[25px] w-full flex-shrink-0 items-center justify-between bg-slate-800 px-5">
      <h2 className="text-h2-sb text-neutral-300">마이페이지</h2>
      <nav className="gap-[18px] text-white flex-center">
        <MainSearch />
        <ExpandableMenu />
      </nav>
    </header>
  );
};

export default Header;
