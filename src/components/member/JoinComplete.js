import React from 'react';

import './join.css';

export default function JoinComplete() {
  return (
      <div class="inner-box complete-page">
        <div class="complete-contents">
          <div class="img"><img src="/images/img_care_03_01.png" alt="완료" /></div>
          <div class="complete-title">회원가입이 완료되었습니다.</div>
          <p class="complete-desc">엑스퍼트 아카데미에 오신것을 환영합니다.<br/>최고의 품질 어쩌고 </p>
        </div>
        <div className="c-btn-box complete-main-btn">
          <button className="btn-type2" onClick={()=>{document.location.href = '/';}} ><span>메인으로</span></button>
        </div>
      </div>
  )
}
