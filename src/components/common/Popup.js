import React from 'react';
import Draggable from 'react-draggable';
import { useCookies } from 'react-cookie';
import './popup.css';

import { useState } from "react";

export default function Popup() {
  
  /* 팝업 쿠키 */
  const [cookies, setCookie] = useCookies(['popupCookie']);
  const popupCookie = cookies.popupCookie;
  const [todayNotShow, setTodayNotShow] = useState(false);
  
  
  /* 팝업 닫기 */
  const [popOpen, setPopOpen] = useState(true);
  const closePopFn = () => {
    setPopOpen(false);
    //하루동안 보지않기 체크시, 쿠키 생성
    if(todayNotShow){
      let now = new Date();
      let after1m = new Date();
      after1m = after1m.setMinutes(now.getMinutes() + 1);
      console.log(after1m);
      //date = date.setDate(date.getDate() + 1);
      //date = date.setMinutes(date.getMinutes() + 1);
      setCookie('popupCookie', 'test', { 
        path: '/' ,
        expire: after1m

      });
    }
  }
  return (
    <>
    {popupCookie !== "test" && popOpen &&
      <Draggable  >
        <div className="popup-wrapper">
          <span className="main-pop-title">공지팝업</span>
          <img src="/images/main/mainpopup.png" alt="공지팝업" />
          <button className="btn-popup-close" onClick={closePopFn}>닫기</button>
          <div className="c-inp-chk-box popup-chkbox">
            <input type="checkbox" id="dcList01" className="inp-chk" onChange={(e) =>setTodayNotShow(e.target.checked)}/>
            <label htmlFor="dcList01">오늘 하루 보지않기</label>
            <span className="text-close"onClick={closePopFn}>닫기</span>
          </div>
      </div>
      </Draggable>
    }
    </>
  )
}
