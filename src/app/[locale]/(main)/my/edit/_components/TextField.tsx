import { useInformationToast } from '@/hooks/useInformationToast';
import { cn } from '@/lib/utils';

interface TextFieldProps {
  label: string;
  value: string;
  placeholder: string;
  updateFn: (newValue: string) => void;
}

const TextField = ({ label, value, placeholder, updateFn }: TextFieldProps) => {
  const { showErrorToast } = useInformationToast();

  const handleClickTextField = () => {
    const newValue = prompt(`새로운 ${label}을(를) 입력해주세요.`, value.toString());
    if (newValue === null) return; // 취소 버튼 클릭
    if (newValue && newValue !== value) {
      // 새로운 값이 입력되었고, 기존 값과 다를 때
      updateFn(newValue);
    } else {
      // 값이 비어있거나 기존 값과 같을 때
      showErrorToast('올바른 값을 입력해주세요.');
    }
  };
  return (
    <div
      className={cn('cursor-pointer bg-neutral-800 px-3 py-2.5 body3-r', !value && 'text-white/40')}
      onClick={handleClickTextField}>
      {value || placeholder}
    </div>
  );
};
export default TextField;
