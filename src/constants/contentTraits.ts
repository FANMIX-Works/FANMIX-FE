import {
  LiaEllo,
  LiaJira,
  LiaWaterSolid,
  LiaStreamSolid,
  LiaHashtagSolid,
  LiaDatabaseSolid,
  LiaFeatherAltSolid,
} from 'react-icons/lia';

export const ORIGINALITY = [
  { LABEL: '매우 대중적', ICON: LiaEllo },
  { LABEL: '대중적', ICON: LiaEllo },
  { LABEL: '보편적', ICON: LiaHashtagSolid },
  { LABEL: '독창적', ICON: LiaJira },
  { LABEL: '매우 독창적', ICON: LiaJira },
];

export const TONE = [
  { LABEL: '매우 가벼움', ICON: LiaFeatherAltSolid },
  { LABEL: '가벼움', ICON: LiaFeatherAltSolid },
  { LABEL: '균형적', ICON: LiaHashtagSolid },
  { LABEL: '진지한', ICON: LiaDatabaseSolid },
  { LABEL: '매우 진지한', ICON: LiaDatabaseSolid },
];

export const ENERGY = [
  { LABEL: '매우 차분한', ICON: LiaWaterSolid },
  { LABEL: '차분한', ICON: LiaWaterSolid },
  { LABEL: '조화로운', ICON: LiaHashtagSolid },
  { LABEL: '역동적', ICON: LiaStreamSolid },
  { LABEL: '매우 역동적', ICON: LiaStreamSolid },
];
