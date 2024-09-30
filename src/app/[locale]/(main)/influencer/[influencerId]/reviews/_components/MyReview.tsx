import TooltipBox from '@/components/common/TooltipBox';
import ReviewForm from './ReviewForm';

const MyReview = () => {
  return (
    <div>
      <div className="mb-2.5 flex items-center gap-1.5">
        <h2 className="body3-m">한줄리뷰 남기기</h2>
        <TooltipBox
          content={`인플루언서의 개인 신상과 관련된 내용 또는\n허위, 추측성, 원색적인 비난이 포함된 내용은\n사전 고지 없이 삭제 될 수 있어요.`}
        />
      </div>
      <ReviewForm />
    </div>
  );
};

export default MyReview;
