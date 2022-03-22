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
    <div className="main-banner ">
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
        <SwiperSlide>
          <div className="main-frame">
            <div className="panel">
              <h1 className="panel-top-title">Power BI</h1>
              <p className="panel-desc">데이터 활용과 시각화를 위한</p>
              <h3 className="panel-title">누구나 쉽게 데이터 시각화!<br/>데이터 보고서 전문가처럼!</h3>
            </div>
            <img src="/images/main/data-science.png" alt="Power BI" className="panel-img" style={{width:'240px',height:'240px'}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-frame">
            <div className="panel">
              <h1 className="panel2-top-title">사내강사 양성과정</h1>
              <p className="panel-desc"></p>
              <h3 className="panel2-title">체계적인 교안작성부터<br/>고급스러운 보이스 트레이닝까지 한번에!</h3>
            </div>
            <img src="/images/main/classroom.png" alt="Power BI" className="panel-img" style={{width:'240px',height:'240px'}}/>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="main-frame">
            <div className="panel">
              <h1 className="panel2-top-title">Power BI</h1>
              <p className="panel2-desc">데이터 활용과 시각화를 위한</p>
              <h3 className="panel-title">누구나 쉽게 데이터 시각화!<br/>데이터 보고서 전문가처럼!</h3>
            </div>
          </div>
        </SwiperSlide> */}
        
        <div className="swiper-pause" onClick={swiperPauseFn}>
          <img src="/images/main/pause.png" alt="재생" />
        </div>
      </Swiper>
    </div>
  )
}
