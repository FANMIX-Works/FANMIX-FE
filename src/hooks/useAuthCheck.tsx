'use client';

import { useRouter } from '@/i18n/routing';
import { useCallback } from 'react';

import { useAuthStore } from '@/stores/authStore';
import { useModalStore } from '@/stores/modalStore';

import MessageBox from '@/components/common/MessageBox';

export const useAuthCheck = () => {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const openModal = useModalStore((state) => state.openModal);
  const showLoginModal = useCallback(() => {
    openModal(
      <MessageBox
        title={'로그인 후 이용할 수 있어요.'}
        buttons={[
          { text: '뒤로', color: 'gray' },
          {
            text: '로그인 하기',
            color: 'lime',
            onClick: () => {
              router.push('/auth/login');
            },
          },
        ]}
      />,
    );
  }, [openModal, router]);

  const checkAuthAndProceed = useCallback(
    (callback: () => void) => {
      if (isLoggedIn) {
        callback();
      } else {
        showLoginModal();
      }
    },
    [isLoggedIn, showLoginModal],
  );

  return { checkAuthAndProceed, isLoggedIn };
};
