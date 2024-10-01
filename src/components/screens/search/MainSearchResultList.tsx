import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { useDebounce } from '@/hooks/useDebounce';
import { categoryNameData, categoryNameDataTypes } from '@/constants/categoryNameData';
import { VscSymbolConstant } from 'react-icons/vsc';

interface ResultListTypeProps {
  keyword: string;
  headerText: string;
}

const MainSearchResultList = ({ keyword, headerText }: ResultListTypeProps) => {
  const router = useRouter();
  const debouncedKeyword: string = useDebounce(keyword, 500);
  const locale = useLocale();

  const filteredCategories = categoryNameData?.filter((category: categoryNameDataTypes) =>
    category.label.includes(debouncedKeyword),
  );

  return (
    <ul className="mt-[24px] flex flex-col text-neutral-200 body2-r">
      {filteredCategories?.length > 0 ? (
        <>
          <p className="mb-5 text-neutral-500 body2-m">{headerText}</p>
          {filteredCategories.map((res: categoryNameDataTypes) => (
            <li
              className="mb-6 flex cursor-pointer items-center h2-m"
              key={res.id}
              onClick={() => router.push(`/${res?.id}`)}>
              <VscSymbolConstant className="mr-[12px] text-orange-500" />
              {locale === 'ko' ? res?.label : res?.enLabel}
            </li>
          ))}
        </>
      ) : (
        <p className="mt-[44px] text-neutral-500 body2-m">검색 결과가 존재하지 않습니다.</p>
      )}
    </ul>
  );
};

export default MainSearchResultList;
