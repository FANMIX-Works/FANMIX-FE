import CommentCard, { type CommentCardProps } from '@/components/domain/board/CommentCard';

interface MyCommentProps {
  comments: CommentCardProps[];
}
const MyComment = ({ comments }: MyCommentProps) => {
  return (
    <div className="h-full w-full overflow-y-auto pt-5 scrollbar-hide-smooth">
      <ul className="flex w-full flex-col items-center gap-[3px]">
        {comments.map((comment) => (
          <li key={comment.commentId} className="w-full">
            <CommentCard {...comment} />
          </li>
        ))}
      </ul>
      <div className="mb-8 mt-7 text-center text-neutral-500 body3-r">모든 내용을 확인했습니다</div>
    </div>
  );
};

export default MyComment;
