import React from 'react'
import $ from 'jquery';
import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore, { Navigation, Pagination,Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination,Autoplay])

export default function MainBottom() {
  return (
    <>
    <div className="inner-box main-middle-banner">
      <img src="	http://www.excacademy.co.kr/images/layout/sub2_visual.jpg" alt="" />
      <div className='c-btn-box main-middel-banner-btn'>
        <button className="btn-type1 small" ><span>자세히 보기</span></button>
      </div>
    </div>

    <div className="inner-box main-bottom">
        <div className="main-notice">
          <div className="text-box">
            <span className="b-title">공지사항</span>
            <span className="b-comment">엑스퍼트아카데미를 소식을 전합니다.</span>
          </div>
          <div className="main-notice-list">
            <ul>
              <li>
                <p class="list-text">
                  <a href="#none">1월 공지사항입니다.</a>
                </p>
                <div class="list-date">2019.01.01</div>
              </li>
              <li>
                <p class="list-text">
                  <a href="#none">1월 공지사항입니다.</a>
                </p>
                <div class="list-date">2019.01.01</div>
              </li>
              <li>
                <p class="list-text">
                  <a href="#none">1월 공지사항입니다.</a>
                </p>
                <div class="list-date">2019.01.01</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-hr">
          <div className="text-box">
            <span className="b-title">HR샵</span>
            <span className="b-comment">교육에 필요한 옵션및 상품정보를 제공합니다.</span>
          </div>
          <div className="hr-list">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              scrollbar={{ draggable: true }}
              pagination={{ clickable: true }}
              autoplay={{ 
                delay: 2000,
                disableOnInteraction	 : false
                
              }}
            >
              <SwiperSlide><img src="/images/main/1.jpg" alt="1" /></SwiperSlide>
              <SwiperSlide><img src="/images/main/2.jpg" alt="2" /></SwiperSlide>
              <SwiperSlide><img src="/images/main/3.jpg" alt="3" /></SwiperSlide>
              <SwiperSlide><img src="/images/main/1.jpg" alt="3" /></SwiperSlide>
              <SwiperSlide><img src="/images/main/2.jpg" alt="3" /></SwiperSlide>
              <SwiperSlide><img src="/images/main/3.jpg" alt="3" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
