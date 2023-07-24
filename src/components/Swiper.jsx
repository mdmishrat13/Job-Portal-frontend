import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import {TbDeviceDesktopAnalytics} from 'react-icons/tb'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper className='pb-[50px]'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
    //   navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-center'/> <h2>Management</h2> <p>10 jobs available</p></h1> </SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-2</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-3</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-4</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-5</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-6</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-7</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-8</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-9</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-10</h1></SwiperSlide>
      <SwiperSlide><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500">Slide-11</h1></SwiperSlide>
    </Swiper>
  );
};