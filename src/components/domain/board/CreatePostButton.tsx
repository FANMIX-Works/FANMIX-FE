import { VscAdd } from 'react-icons/vsc';

const CreatePostButton = () => {
  const handleNewPost = () => {
    console.log('post 생성 페이지로 이동시키기');
  };
  return (
    <button
      aria-label="최상단 이동 버튼"
      className="absolute right-5 top-[-84px] h-[60px] w-[60px] rounded-full flex-center fanmix-gradient blur-10-shadow"
      onClick={handleNewPost}>
      <VscAdd className="h-[22px] w-[22px]" />
    </button>
  );
};
export default CreatePostButton;
