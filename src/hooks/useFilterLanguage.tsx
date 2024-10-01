import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { categoryDataTypes } from '@/constants/categoryNameData';

const langDecide = (lang: string) => {
  const koreanPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const englishPattern = /[a-zA-Z]/;
  const specialPattern = /[0-9!@#\\$%\\^\\&*)\\(+=._-]+$/;

  if (koreanPattern.test(lang)) {
    return 'korean';
  }
  if (englishPattern.test(lang)) {
    return 'english';
  }
  if (specialPattern.test(lang)) {
    return 'special';
  }
  return 'unknown';
};

// 제네릭 타입을 사용하는 useFilterData 훅
export const useFilterLanguage = <T extends categoryDataTypes>(
  filterText: string,
  data: T[],
): T[] => {
  const [filteredData, setFilteredData] = useState<T[]>([]);

  const debouncedFilterText = useDebounce(filterText, 500); // 300ms 딜레이 적용

  useEffect(() => {
    const languageType = langDecide(debouncedFilterText);
    const lowerCaseEng = debouncedFilterText.toLowerCase();

    // 필터링 로직
    let result: T[] = [];

    switch (languageType) {
      case 'korean':
      case 'special':
        result = data.filter((item) => item.ko.includes(debouncedFilterText));
        break;
      case 'english':
        result = data.filter((item) => item.en.toLowerCase().includes(lowerCaseEng));
        break;
      default:
        console.error('Unknown language type:', languageType);
        result = [];
    }

    // 필터된 데이터를 상태에 저장
    setFilteredData(result);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // filterText와 data가 변경될 때마다 useEffect 실행
  }, [debouncedFilterText]);

  return filteredData; // 필터링된 데이터를 반환
};
