import SlideBarTabs from '@/components/common/SlideBarTabs';
import { useTranslations } from 'next-intl';

const PopularContentTabs = () => {
  const t = useTranslations('main_page');

  // #20240921.syjang, tabs 내부 데이터를 부모로부터 받아올지, 여기서 데이터 땡겨올지 고민 필요
  const tabs = [
    {
      value: '1',
      label: t('인기 글'),
      content: <div className="mt-2.5 w-full text-center">인기 글 내역</div>,
    },
    {
      value: '2',
      label: t('인기 리뷰'),
      content: <div className="mt-2.5 w-full text-center">인기 리뷰 내역</div>,
    },
  ];
  return <SlideBarTabs tabs={tabs} defaultValue="1" />;
};

export default PopularContentTabs;
