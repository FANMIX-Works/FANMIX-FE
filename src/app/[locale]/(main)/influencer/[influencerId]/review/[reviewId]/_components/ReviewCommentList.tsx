import { Separator } from '@/components/ui/separator';
import { VscChromeClose } from 'react-icons/vsc';

const ReviewCommentList = () => {
  return (
    <ul className="w-full bg-neutral-800">
      <li className="w-full bg-orange-700/[8%] px-5 pt-5">
        <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
          <header className="flex w-full items-center justify-between text-orange-500">
            <span className="body3-r">댓글 작성 유저</span>
            <div className="gap-x-2 flex-center">
              <span className="sub2-m">24.09.05</span>
              <VscChromeClose className="h-[18px] w-[18px] text-white hover:scale-transition-105" />
            </div>
          </header>
          <p className="text-neutral-200 body2-r">
            한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용
          </p>
        </div>
        <Separator className="h-[0.7px] bg-neutral-600" />
      </li>
      <li className="w-full px-5 pt-5">
        <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
          <header className="flex w-full items-center justify-between text-neutral-400">
            <span className="body3-r">댓글 작성 유저</span>
            <span className="sub2-m">24.09.05</span>
          </header>
          <p className="text-neutral-200 body2-r">
            한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용
          </p>
        </div>
        <Separator className="h-[0.7px] bg-neutral-600" />
      </li>
      <li className="w-full px-5 pt-5">
        <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
          <header className="flex w-full items-center justify-between text-neutral-400">
            <span className="body3-r">댓글 작성 유저</span>
            <span className="sub2-m">24.09.05</span>
          </header>
          <p className="text-neutral-200 body2-r">
            한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용
          </p>
        </div>
        <Separator className="h-[0.7px] bg-neutral-600" />
      </li>
      <li className="w-full px-5 pt-5">
        <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
          <header className="flex w-full items-center justify-between text-neutral-400">
            <span className="body3-r">댓글 작성 유저</span>
            <span className="sub2-m">24.09.05</span>
          </header>
          <p className="text-neutral-200 body2-r">
            한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용
          </p>
        </div>
        <Separator className="h-[0.7px] bg-neutral-600" />
      </li>
      <li className="w-full px-5 pt-5">
        <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
          <header className="flex w-full items-center justify-between text-neutral-400">
            <span className="body3-r">댓글 작성 유저</span>
            <span className="sub2-m">24.09.05</span>
          </header>
          <p className="text-neutral-200 body2-r">
            한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용
          </p>
        </div>
      </li>
      <li className="w-full bg-orange-700/[8%] px-5 pt-5">
        <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
          <header className="flex w-full items-center justify-between text-orange-500">
            <span className="body3-r">댓글 작성 유저</span>
            <div className="gap-x-2 flex-center">
              <span className="sub2-m">24.09.05</span>
              <VscChromeClose className="h-[18px] w-[18px] text-white hover:scale-transition-105" />
            </div>
          </header>
          <p className="text-neutral-200 body2-r">
            한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용
          </p>
        </div>
        <Separator className="h-[0.7px] bg-neutral-600" />
      </li>
      <li className="w-full bg-orange-700/[8%] px-5 pt-5">
        <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
          <header className="flex w-full items-center justify-between text-orange-500">
            <span className="body3-r">댓글 작성 유저</span>
            <div className="gap-x-2 flex-center">
              <span className="sub2-m">24.09.05</span>
              <VscChromeClose className="h-[18px] w-[18px] text-white hover:scale-transition-105" />
            </div>
          </header>
          <p className="text-neutral-200 body2-r">
            한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용 한줄댓글에 달린 댓글내용
          </p>
        </div>
        <Separator className="h-[0.7px] bg-neutral-600" />
      </li>
    </ul>
  );
};

export default ReviewCommentList;
