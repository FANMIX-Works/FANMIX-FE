'use client';

import { useRouter } from '@/i18n/routing';
import { RiCloseLargeLine } from 'react-icons/ri';
import LogoImg from '@/assets/logo/logo_login.svg';
import { FcGoogle } from 'react-icons/fc';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function LoginPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="h-full w-full bg-gradient">
      <div>
        <p className="flex items-center justify-end">
          <RiCloseLargeLine className="closeIcon" />
        </p>
        <div>
          <Swiper
            className="mt-10 imgArea"
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}>
            <SwiperSlide className="flex h-full items-center justify-center">
              <div className="flex h-full w-full items-center justify-center">
                <LogoImg className="max-h-full max-w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex-col-center">
        <button className="flex items-center justify-center loginBtn hover:hover-loginBtn">
          <FcGoogle className="mr-4 h-5 w-5" />
          <span className="text-black-54 font-semibold">Google 계정으로 시작하기</span>
        </button>
        <button onClick={handleGoBack}>뒤로가기</button>
      </div>
    </main>
  );
}
