import React from 'react';

import './join.css';

export default function JoinComplete() {
  return (
    <div className="join-wrapper">
      <div className="inner-box complete-page join-inner">
        <div className="top-title">
          <h2>회원가입</h2>
          <h3>__회원가입 구분</h3>
        </div>
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
          <p className="complete-desc">엑스퍼트 아카데미에 오신것을 환영합니다.<br/>최고의 품질 어쩌고 </p>
        </div>
        <div className="c-btn-box complete-main-btn">
          <button className="btn-type2" onClick={()=>{document.location.href = '/';}} ><span>메인으로</span></button>
        </div>
      </div>
    </div>
  )
}
