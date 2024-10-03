import { ax } from './axios';
import axios from 'axios';

import type { LoginRequest, LoginResponse } from '@/types/service/authServiceType';

// 로그인
export const login = async ({ code, redirectUri }: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await ax.post<LoginResponse>('/api/members/oauth/google', {
      code,
      redirectUri,
    });
    console.log('Login Response:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error?.response?.data?.customCode; // 백엔드 지정 오류 코드
      const errorMessage = error?.response?.data?.message; // 백엔드 지정 메시지
      console.error(`errorCode: ${errorCode}, errorMessage: ${errorMessage}`);
      throw error;
    }
    throw error;
  }
};

// 로그아웃
export const logout = async () => {
  try {
    const response = await ax.post('/api/members/logout');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error?.response?.data?.customCode; // 백엔드 지정 오류 코드
      const errorMessage = error?.response?.data?.message; // 백엔드 지정 메시지
      console.error(`errorCode: ${errorCode}, errorMessage: ${errorMessage}`);
      throw error;
    }
    throw error;
  }
};

// 회원탈퇴
export const deleteMember = async (id: string) => {
  try {
    const response = await axios.delete(`/api/members/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error?.response?.data?.customCode;
      const errorMessage = error?.response?.data?.message;
      console.error(`errorCode: ${errorCode}, errorMessage: ${errorMessage}`);
      throw error;
    }
    throw error;
  }
};
