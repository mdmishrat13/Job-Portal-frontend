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
    <Swiper className='pb-[50px] grid grid-cols-2 '
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
    //   navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='py-3 hover:mt-[-5px] cursor-pointer transition-all ease-in'><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-blue-500 text-center'/> <h2 className='font-bold'>Web Development</h2> <p>10 jobs available</p></h1> </SwiperSlide>
      <SwiperSlide className='py-3 hover:mt-[-5px] cursor-pointer ease-in transition-all'><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-blue-500 text-center'/> <h2 className='font-bold'>Web Development</h2> <p>10 jobs available</p></h1> </SwiperSlide>
      <SwiperSlide className='py-3 hover:mt-[-5px] cursor-pointer ease-in transition-all'><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-blue-500 text-center'/> <h2 className='font-bold'>Web Development</h2> <p>10 jobs available</p></h1> </SwiperSlide>
      <SwiperSlide className='py-3 hover:mt-[-5px] cursor-pointer ease-in transition-all'><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-blue-500 text-center'/> <h2 className='font-bold'>Web Development</h2> <p>10 jobs available</p></h1> </SwiperSlide>
      <SwiperSlide className='py-3 hover:mt-[-5px] cursor-pointer ease-in transition-all'><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-blue-500 text-center'/> <h2 className='font-bold'>Web Development</h2> <p>10 jobs available</p></h1> </SwiperSlide>
      <SwiperSlide className='py-3 hover:mt-[-5px] cursor-pointer ease-in transition-all'><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-blue-500 text-center'/> <h2 className='font-bold'>Web Development</h2> <p>10 jobs available</p></h1> </SwiperSlide>
      <SwiperSlide className='py-3 hover:mt-[-5px] cursor-pointer ease-in transition-all'><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-blue-500 text-center'/> <h2 className='font-bold'>Web Development</h2> <p>10 jobs available</p></h1> </SwiperSlide>
      <SwiperSlide className='py-3 hover:mt-[-5px] cursor-pointer ease-in transition-all'><h1 className="h-[150px] bg-white rounded-lg drop-shadow-md text-center text-dark-500 flex justify-center items-center flex-col"> <TbDeviceDesktopAnalytics className='text-6xl text-blue-500 text-center'/> <h2 className='font-bold'>Web Development</h2> <p>10 jobs available</p></h1> </SwiperSlide>
    </Swiper>
  );
};