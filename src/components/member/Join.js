import React from 'react';
import { Link } from 'react-router-dom';

import './join.css';

export default function Join() {
  return (
    <div className="join-wrapper">
      <div className="inner-box join-inner">
        <div className="top-title">
          <h2>회원가입</h2>
          <h3>__회원가입 구분</h3>
        </div>

        <section>
          <div className="join-cont">
            <div class="join-step">
              <ol>
                <li class="on"><span class="num">01</span> 회원 구분</li>
                <li><span class="num">02</span> 회원 정보</li>
                <li><span class="num">03</span> 가입 완료</li>
              </ol>
            </div>
            <div className="join-gubun">
              <p>회원가입 유형을 선택해 주세요.</p>
              <div className="join-gubun-btn">
                <Link to="/join/form">
                  <img src="/images/member/group.png" alt="교육담당자" />
                  <span>기업 및 단체 교육 담당자</span>
                </Link>
                <Link to="/join/form">
                  <img src="/images/member/person.png" alt="개인" />
                  <span>일반 개인회원</span>
                </Link>
              </div>
            </div>
            <ul class="dot-list">
              <li>교육담당자는 사내직원들의 교육을 일괄적으로 신청이 가능 합니다.</li>
              <li>교육, 세미나에 대한 자료를 이메일로 받아보실 수 있습니다.</li>
              <li>마이페이지 등의 서비스로 교육신청 및 이력을 체계적으로 관리할 수 있습니다.</li>
              <li>교육 알리미 서비스 등 다양한 혜택 및 이벤트를 받아보실 수 있습니다</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
