import React from 'react'
import $ from 'jquery';
import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore, { Navigation, Pagination,Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination,Autoplay])

export default function MainBanner() {
  /*  배너 재생 btn */
  const swiperPauseFn = () => {
    let autoplay = $('.main-banner-swiper')[0].swiper.autoplay;
    let isRunning = autoplay.running;
    if(isRunning){
      //일시정지
      autoplay.stop();
      $('.swiper-pause img').attr('src','/images/main/play.png');
    }else{
      //재생
      autoplay.start();
      $('.swiper-pause img').attr('src','/images/main/pause.png');
    }

  }
  return (
    <div className="main-banner inner-box">
      <Swiper className="main-banner-swiper"
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ 
          delay: 2000,
          disableOnInteraction	 : false
          
        }}
      >
        <SwiperSlide><img src="http://www.excacademy.co.kr/images/main_banner/BN20211005173717FE73891M.jpg" alt="1" /></SwiperSlide>
        <SwiperSlide><img src="http://www.excacademy.co.kr/images/main_banner/BN20210517184142Z7LLRJHE.gif" alt="2" /></SwiperSlide>
        <SwiperSlide><img src="	http://www.excacademy.co.kr/images/main_banner/BN20220107112150AA4L2RMJ.jpg" alt="3" /></SwiperSlide>
        
        <div className="swiper-pause" onClick={swiperPauseFn}>
          <img src="/images/main/pause.png" alt="재생" />
        </div>
      </Swiper>
    </div>
  )
}
