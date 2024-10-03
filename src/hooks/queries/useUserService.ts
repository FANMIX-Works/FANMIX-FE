import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { useInformationToast } from '../useInformationToast';
import type {
  UpdateMyBirthYearRequest,
  UpdateMyIntroduceRequest,
  UpdateMyNationalityRequest,
  UpdateMyNicknameRequest,
  UpdateMyProfileImageRequest,
  UserDetailResponse,
} from '@/types/service/userServiceType';
import { useUserStore } from '@/stores/userStore';

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

  return useMutation<UserDetailResponse, AxiosError, UpdateMyNicknameRequest>({
    mutationFn: userService.updateMyNickname,
    onSuccess: () => {
      showConfirmToast('닉네임 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('닉네임 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyIntroduce = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();

  return useMutation<UserDetailResponse, AxiosError, UpdateMyIntroduceRequest>({
    mutationFn: userService.updateMyIntroduce,
    onSuccess: () => {
      showConfirmToast('자기소개 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('자기소개 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyGender = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();

  return useMutation<UserDetailResponse, AxiosError, UpdateMyBirthYearRequest>({
    mutationFn: userService.updateMyBirthYear,
    onSuccess: () => {
      showConfirmToast('성별 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('성별 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyBirthYear = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();

  return useMutation<UserDetailResponse, AxiosError, UpdateMyBirthYearRequest>({
    mutationFn: userService.updateMyBirthYear,
    onSuccess: () => {
      showConfirmToast('출생연도 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('출생연도 수정에 실패했어요.');
    },
  });
};

export const useUpdateMyNationality = () => {
  const { showConfirmToast, showErrorToast } = useInformationToast();

  return useMutation<UserDetailResponse, AxiosError, UpdateMyNationalityRequest>({
    mutationFn: userService.updateMyNationality,
    onSuccess: () => {
      showConfirmToast('국적 수정에 성공했어요.');
    },
    onError: () => {
      showErrorToast('국적 수정에 실패했어요.');
    },
  });
};
