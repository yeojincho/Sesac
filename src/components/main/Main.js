/* 
  화면     : 메인 
*/


import React from 'react';
import $ from 'jquery';

import MainBanner from './MainBanner';
import MainContents from './MainContents';
import MainBottom from './MainBottom';

import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import './main.css';



export default function Main({isMobile}) {
  return (
    <div className="main-wrapper">
      <MainBanner />
      <MainContents />
      {
        !isMobile && 
        <MainBottom />
      }
    </div>
  )
}
