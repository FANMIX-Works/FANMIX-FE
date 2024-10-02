import BoardTypeLabel from '@/components/domain/board/BoardTypeLabel';
import { SheetClose } from '@/components/ui/sheet';
import { BOARD_TYPE } from '@/types/domain/boardType';

const SearchResult = () => {
  const handleClick = () => {
    alert('커뮤니티로 이동');
  };
  return (
    <ul className="flex flex-col justify-center gap-y-6 h2-m">
      <li className="cursor-pointer" onClick={handleClick}>
        <SheetClose className="w-full">
          <BoardTypeLabel
            boardType={BOARD_TYPE.COMMUNITY}
            boardName="유네린"
            iconSize={20}
            className="gap-x-3 text-white"
          />
        </SheetClose>
      </li>
    </ul>
  );
};
export default SearchResult;
