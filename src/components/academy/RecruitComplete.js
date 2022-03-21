import React from 'react';
import { Link } from "react-router-dom";

export default function RecruitComplete() {
  return (
    <div className="recruit-compl-wrapper">
      <div className="inner-box">
        <ul class="cont-navi">
          <li><a href="#none" class="nav-home">HOME</a></li>
          <li><span class="nav-sub">아카데미</span></li>
          <li><span class="nav-sub">인재채용</span></li>
        </ul>
        <div className="c-top-title complete-page">
          <h2>인재 채용 안내</h2>
          <h3>__엑스퍼트아카데미는 실력있는 강사님과 매니저를 선발 합니다.</h3>
        </div>
        <div class="inner-box complete-page">
          <div class="complete-contents">
            <div class="img"><img src="/images/img_care_03_01.png" alt="완료" /></div>
            <div class="complete-title">지원해 주셔서 감사합니다.<br/>담당자 확인후 연락드리겠습니다.</div>
            <p class="complete-desc">문의사항이 있는 경우 문의하기 게시판이나 02-2152-3915~4으로 연락 주세요</p>
          </div>
          <Link to="/">
          <div className="c-btn-box complete-main-btn">
            <button className="btn-type2"><span>메인으로</span></button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
