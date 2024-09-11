export const ROUTES = {
  HOME: { PATH: '/', LABEL: 'home' },
  FOLLOW: { PATH: '/follow', LABEL: 'follow' },
  FANCHANNEL: { PATH: '/fan-channel', LABEL: 'fanChannel' },
  MYPAGE: { PATH: '/my', LABEL: 'myPage' },
} as const;

// ROUTES 객체의 타입을 정의
type RouteKey = keyof typeof ROUTES;

// ROUTES 객체의 값 타입을 추출
type RouteValue = (typeof ROUTES)[RouteKey];

// LABEL의 타입을 추출
export type RouteLabel = RouteValue['LABEL'];
