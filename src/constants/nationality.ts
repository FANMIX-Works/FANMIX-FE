// 배열 값 == 다국어 키값
export const NATIONALITY_KEYS = [
  'KR',
  'JP',
  'CN',
  'VN',
  'TH',
  'ID',
  'MY',
  'SG',
  'PH',
  'IN',
  'KZ',
  'SA',
  'AE',
  'TR',
  'GB',
  'DE',
  'FR',
  'IT',
  'ES',
  'NL',
  'SE',
  'CH',
  'RU',
  'US',
  'CA',
  'MX',
  'BR',
  'AR',
  'AU',
  'NZ',
  'ZA',
  'EG',
  'NG',
  'OTHER',
] as const;

export type NationalityKey = (typeof NATIONALITY_KEYS)[number];
