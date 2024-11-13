'use client';

// import CreateCommentForm from '@/components/domain/board/CreateCommentForm';

interface CommunityPostCommentFormProps {
  communityId: number;
  postId: number;
}

const CommunityPostCommentForm = ({ communityId, postId }: CommunityPostCommentFormProps) => {
  console.log(communityId, postId);
  return (
    <footer className="absolute bottom-0 h-[75px] w-full fanmix-gradient">
      {/* <CreateCommentForm onSubmit={() => {}} useFormRegister={{}} isValid={true} /> */}
    </footer>
  );
};

export default CommunityPostCommentForm;
