import { usePathname } from '@/i18n/routing';
import { ROUTES, type RouteLabel } from '@/constants/routes';

// pathname에 해당하는 LABEL을 찾는 함수
const useCurrentRouteLabel = (): [RouteLabel, boolean] => {
  const pathname = usePathname();

  const route = Object.values(ROUTES).find((route) => route.PATH === pathname);
  if (route) {
    return [route.LABEL, route.HAS_PREV_BTN];
  } else {
    // 정의되지 않은 루트일 경우, 홈으로 표시하여 아이콘 보여지게 처리
    return [ROUTES.HOME.LABEL, ROUTES.HOME.HAS_PREV_BTN];
  }
};

export default useCurrentRouteLabel;