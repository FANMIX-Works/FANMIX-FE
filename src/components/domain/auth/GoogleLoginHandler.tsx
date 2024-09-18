'use client';
import { memo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import useGoogleLogin from './hooks/useGoogleLogin';

const GoogleLoginHandler = () => {
  const searchParams = useSearchParams();
  const { sendAuthCodeToBackend } = useGoogleLogin();

  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      sendAuthCodeToBackend(code);
    }
  }, [code, sendAuthCodeToBackend]);

  return null;
};

export default memo(GoogleLoginHandler);
