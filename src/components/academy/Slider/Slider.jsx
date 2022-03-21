import "./Slider.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function OrderPages() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        autoplay={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        loopedSlides={1}
        modules={[FreeMode, Navigation, Thumbs]}
        className='productSlider inner-box swiper-slide'
      >
        <SwiperSlide>
          <img src='/images/bigdata.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/coding2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/coding.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/desktop.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ui.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ui_ux.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/main/2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/main/1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slideImg'>
          <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        autoplay={true}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        loopedSlides={1}
        className='productSlider -box swiper-slide smallProducts '
      >
        <SwiperSlide>
          <img src='/images/bigdata.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/coding2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/coding.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/desktop.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ui.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ui_ux.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/main/2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/main/1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
