import React from "react";
import Config from "./Config";
import "./Introduce.css";
import Awesome from "./Awesome.jsx";

function Introduce() {
  return (
    <div>
      <Config />
      <Awesome />
      <div className='Bottom-bannerImg1'>
        <p className='IntroduceTxt'>
          취업자부터 직장인까지 커리어 성장을 목표하는 분들을 위해 소수 인원도
          수강 가능한 공개교육 프로그램입니다.
          <br />
          계층별,HRD교육뿐만아니라IT인재양성교육까지
          최신트렌드교육을반영하여수준높은교육을제공합니다.
        </p>
      </div>
      <div className='Bottom-bannerImg2'>
        <div className='iconBoxWrapper1'>
          <img
            className='icon_inBanner1'
            src='/images/academy/ICON1.png'
            alt='#'
          />
          <p>교육 문의 엑스퍼트컨설팅 공개교육사업팀</p>
        </div>
        <div className='iconBoxWrapper2'>
          <img
            className='icon_inBanner2'
            src='/images/academy/ICON2.png'
            alt='#'
          />
          <p>이메일 : open@exc.co.kr</p>
        </div>
        <div className='iconBoxWrapper3'>
          <img
            className='icon_inBanner3'
            src='/images/academy/ICON3.png'
            alt='#'
          />
          <p>전화번호 : 02-2152-3915~4</p>
        </div>
        <div className='iconBoxWrapper4'>
          <img
            className='icon_inBanner4'
            src='/images/academy/ICON4.png'
            alt='#'
          />
          <p>팩스번호 : 02-1234-5678</p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
