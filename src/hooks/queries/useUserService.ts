import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '@/stores/userStore';
import { userService } from '@/services/userService';
import { useInformationToast } from '../useInformationToast';
import type {
  UpdateMyBirthYearRequest,
  UpdateMyGenderRequest,
  UpdateMyIntroduceRequest,
  UpdateMyNationalityRequest,
  UpdateMyNicknameRequest,
  UpdateMyProfileImageRequest,
  UserDetailResponse,
} from '@/types/service/userServiceType';

export const useUpdateMyProfileImage = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation<UserDetailResponse, AxiosError, UpdateMyProfileImageRequest>({
    mutationFn: userService.updateMyProfileImage,
    onSuccess: (data) => {
      setUser({ profileImgUrl: data.data.profileImgUrl });
      showConfirmToast('프로필 이미지 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('프로필 이미지 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyNickname = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation<UserDetailResponse, AxiosError, UpdateMyNicknameRequest>({
    mutationFn: userService.updateMyNickname,
    onSuccess: (data) => {
      setUser({ nickName: data.data.nickName });
      showConfirmToast('닉네임 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('닉네임 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyIntroduce = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation<UserDetailResponse, AxiosError, UpdateMyIntroduceRequest>({
    mutationFn: userService.updateMyIntroduce,
    onSuccess: (data) => {
      setUser({ introduce: data.data.introduce });
      showConfirmToast('자기소개 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('자기소개 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyGender = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation<UserDetailResponse, AxiosError, UpdateMyGenderRequest>({
    mutationFn: userService.updateMyGender,
    onSuccess: (data) => {
      setUser({ gender: data.data.gender });
      showConfirmToast('성별 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('성별 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyBirthYear = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation<UserDetailResponse, AxiosError, UpdateMyBirthYearRequest>({
    mutationFn: userService.updateMyBirthYear,
    onSuccess: (data) => {
      setUser({ birthYear: data.data.birthYear });
      showConfirmToast('출생연도 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('출생연도 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyNationality = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation<UserDetailResponse, AxiosError, UpdateMyNationalityRequest>({
    mutationFn: userService.updateMyNationality,
    onSuccess: (data) => {
      setUser({ nationality: data.data.nationality });
      showConfirmToast('국적 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('국적 수정에 실패했어요.');
    },
  });
};
