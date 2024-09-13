// LABEL = 다국어 파일 키값, topTItle, bottomNav 공용
export const ROUTES = {
  HOME: { PATH: '/', LABEL: '홈', HAS_PREV_BTN: false },
  FOLLOW: { PATH: '/follow', LABEL: '팔로우', HAS_PREV_BTN: false },
  FAN_CHANNEL: { PATH: '/fan-channel', LABEL: '팬채널', HAS_PREV_BTN: false },
  MYPAGE: { PATH: '/my', LABEL: '마이페이지', HAS_PREV_BTN: false },
  MYPAGE_EDIT: { PATH: '/my/edit', LABEL: '내 정보 수정', HAS_PREV_BTN: true },
} as const;

// ROUTES 객체의 타입을 정의
type RouteKey = keyof typeof ROUTES;

// ROUTES 객체의 값 타입을 추출
type RouteValue = (typeof ROUTES)[RouteKey];

// LABEL의 타입을 추출
export type RouteLabel = RouteValue['LABEL'];
