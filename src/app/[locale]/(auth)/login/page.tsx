'use client';

import { useRouter } from '@/i18n/routing';
import { VscChromeClose } from 'react-icons/vsc';
import LogoImg from '@/assets/logo/logo_vertical.svg';
import { FcGoogle } from 'react-icons/fc';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function LoginPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="h-full w-full dark-gradient">
      <div className="flex items-center justify-end p-3 pb-0">
        <VscChromeClose className="mt-[10px] h-6 w-6 scale-transition-105" onClick={handleGoBack} />
      </div>
      <Swiper
        className="mt-[58px] h-[450px] w-[394px]"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <LogoImg className="mb-[119px] mt-[167px] max-h-full max-w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>

      <div className="mx-5 flex flex-col items-center">
        <button className="mb-[24px] mt-[50px] flex h-[52px] w-full items-center justify-center bg-neutral-800 hover:bg-neutral-900">
          <FcGoogle className="mr-4 h-5 w-5" />
          <span className="button-r">Google 계정으로 시작하기</span>
        </button>
        <button onClick={handleGoBack}>뒤로가기</button>
      </div>
    </main>
  );
}
