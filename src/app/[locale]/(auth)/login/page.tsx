'use client';

import { useRouter } from '@/i18n/routing';
import { RiCloseLargeLine } from 'react-icons/ri';
import LogoImg from '@/assets/logo/logo_vertical.svg';
import { FcGoogle } from 'react-icons/fc';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui/button';

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
        <p className="flex items-center justify-end p-3 pb-0">
          <RiCloseLargeLine className="mt-[10px] h-6 w-6 cursor-pointer" />
        </p>
        <div>
          <Swiper
            className="mt-[58px] h-[450px] w-[394px]"
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}>
            <SwiperSlide className="flex items-center justify-center">
              <div className="flex h-full w-full items-center justify-center">
                <LogoImg className="mb-[119px] mt-[120px] max-h-full max-w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Button className="mb-[25px] mt-[50px] flex h-[52px] w-[353px] items-center justify-center bg-[#262626] hover:bg-[#171717]">
          <FcGoogle className="mr-4 h-5 w-5" />
          <span className="button-r">Google 계정으로 시작하기</span>
        </Button>
        <button onClick={handleGoBack}>뒤로가기</button>
      </div>
    </main>
  );
}
