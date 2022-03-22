import React, { useState } from "react";
import Config from "./Config";
import "./Introduce.css";
import Awesome from "./Awesome.jsx";

function Introduce() {
  const [ExpBtnQa, setExpBtnQa] = useState([
    "엑스퍼트컨설팅",
    "open@exc.co.kr",
    "02-2152-3915~4",
    "02-1234-5678",
  ]);

  return (
    <div>
      <Config />
      <Awesome />
      <div className='mainContents-info'>
        <img src='/images/academy/001.png' alt='' />
      </div>
      <div className='mainContents-info'>
        <img src='/images/academy/002.png' alt='' />
      </div>
      <div className='mainContents-info'>
        <img src='/images/academy/003.png' alt='' />
      </div>
      <div className='mainContents-info'>
        <img src='/images/academy/004.png' alt='' />
      </div>
      <div className='mainContents-info'>
        <img src='/images/academy/005.png' alt='' />
      </div>
      <div className='Bottom-bannerImg2'>
        <div className='iconBoxWrapper1'>
          <img
            className='icon_inBanner1'
            src='/images/academy/ICON1.png'
            alt='#'
          />
          <p>{ExpBtnQa[0]}</p>
        </div>
        <div className='iconBoxWrapper2'>
          <img
            className='icon_inBanner2'
            src='/images/academy/ICON2.png'
            alt='#'
          />
          <p>{ExpBtnQa[1]}</p>
        </div>
        <div className='iconBoxWrapper3'>
          <img
            className='icon_inBanner3'
            src='/images/academy/ICON3.png'
            alt='#'
          />
          <p>{ExpBtnQa[2]}</p>
        </div>
        <div className='iconBoxWrapper4'>
          <img
            className='icon_inBanner4'
            src='/images/academy/ICON4.png'
            alt='#'
          />
          <p>{ExpBtnQa[3]}</p>{" "}
        </div>
      </div>
      <div className='Bottom-bannerImg3'>
        <img src='/images/academy/007.png' alt='' />
      </div>
    </div>
  );
}

export default Introduce;
