import { DOM_IDS } from '@/constants/domIdentifiers';

export default function MyPage() {
  return (
    <main id={DOM_IDS.CURRENT_SCROLL_PAGE} className="h-full w-full px-5">
      마이페이지
    </main>
  );
}
