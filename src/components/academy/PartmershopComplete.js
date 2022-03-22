import React from "react";
import { Link } from "react-router-dom";

export default function PartmershopComplete() {
  return (
    <div className='recruit-compl-wrapper'>
      <div className='inner-box'>
        <ul class='cont-navi'>
          <li>
            <a href='#none' class='nav-home'>
              HOME
            </a>
          </li>
          <li>
            <span class='nav-sub'>아카데미</span>
          </li>
          <li>
            <span class='nav-sub'>제휴제안</span>
          </li>
        </ul>
        <div class='inner-box complete-page'>
          <div class='complete-contents'>
            <div class='img'>
              <img src='/images/img_care_03_01.png' alt='완료' />
            </div>
            <div class='complete-title'>
              제휴제안이 정상적으로 신청 되었습니다.
              <br />
              담당자 확인후 연락드리겠습니다.
            </div>
            <p class='complete-desc'>
              문의사항이 있는 경우 문의하기 게시판이나 02-2152-3915~4으로 연락
              주세요
            </p>
          </div>
          <Link to='/'>
            <div className='c-btn-box complete-main-btn'>
              <button className='btn-type2'>
                <span>메인으로</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
