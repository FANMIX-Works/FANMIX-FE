export interface LoginRequest {
  code: string;
}

export interface LoginResponse {
  status: string;
  customCode: string | null;
  data: {
    accessToken: string;
    refreshToken: string;
    userId: string;
    nickName: string;
    email: string;
  };
  message: string | null;
}
