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
import './banner.css';


import Config from '../academy/Introduce/Config';
import Popup from '../../components/common/Popup';

export default function Main({isMobile}) {
  return (
    <div className="main-wrapper">
      {
        !isMobile ?
        (<>
          <div className="main-banner-box">
            <Config />
            <MainBanner />
          </div>
          <MainContents />
          <MainBottom />
          <Popup />
        </>)
        :
        (<>
          <MainBanner />
          <MainContents />
        </>)
      }
    </div>
  )
}
