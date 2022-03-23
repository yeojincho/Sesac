import React from 'react';
import { Link } from "react-router-dom";

import './join.css';

export default function JoinComplete() {
  return (
    <div className="join-wrapper">
      <div className='orderPage-bigTitle'>
        <div className="inner-box">
          <h3 className='orderPage-h3'>
            <b>회원가입</b>
          </h3>
          <span className='orderPage-span'>
            __엑스퍼트아카데미에 오신 것을 환영합니다.
          </span>
        </div>
      </div>
      <div className="inner-box complete-page join-inner">
        <ul class="cont-navi">
          <li><a href="#none" class="nav-home">HOME</a></li>
          <li><span class="nav-sub">회원가입</span></li>
        </ul>
        <section>
          <div className="join-cont">
            <div className="join-step">
              <ol>
                <li><span className="num">01</span> 회원 구분</li>
                <li><span className="num">02</span> 회원 정보</li>
                <li className="on"><span className="num">03</span> 가입 완료</li>
              </ol>
            </div>
          </div>
        </section>
        <div className="complete-contents">
          <div className="img"><img src="/images/img_care_03_01.png" alt="완료" /></div>
          <div className="complete-title">회원가입이 완료되었습니다.</div>
          <p className="complete-desc">엑스퍼트 아카데미에 오신것을 환영합니다. </p>
        </div>
        <Link to="/">
        <div className="c-btn-box complete-main-btn">
            <button className="btn-type2"><span>메인으로</span></button>
        </div>
        </Link>
      </div>
    </div>
  )
}
