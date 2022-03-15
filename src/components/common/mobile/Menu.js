import React from 'react';

import './menu.css';

export default function Menu({close}) {
  return (
  <div class="header-menu-wrap" >
    <div class="header-menu-btn">
			<a href="#none" class="btn-close" onClick={close}></a>
		</div>
		<div class="header-menu-cont">
			
			{/* <div class="header-top-area" >
				<ul class="header-top-sub">
					<li><a href="#none"><span class="ico"><img src="../assets/images/header/icon/ico_sub_myroom.png" alt="마이룸" /></span>마이룸</a></li>
					<li><a href="#none"><span class="ico"><img src="../assets/images/header/icon/ico_sub_story_write.png" alt="스토리 쓰기" /></span>스토리 쓰기</a></li>
				</ul>
			</div> */}

			<div class="header-gnb-menu tab-box">
				<div class="gnb-menu-left">
					<ul class="gnb-left-depth2 tab">
						<li class="on"><button><span>공개과정</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><a href="#none">월간교육일정</a></li>
              <li><a href="#none">계층교육</a></li>
              <li><a href="#none">직무역량</a></li>
              <li><a href="#none">DX교육</a></li>
              <li><a href="#none">진단</a></li>
              <li><a href="#none">일반</a></li>
            </ul>
					</ul>
          <ul class="gnb-left-depth2 tab">
            <li><button><span>취업과정</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><a href="#none">소개</a></li>
              <li><a href="#none">모집중인 과정</a></li>
            </ul>
          </ul>
          <ul class="gnb-left-depth2 tab">
            <li><button><span>Ex콘텐츠</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><a href="#none">이벤트</a></li>
              <li><a href="#none">과정후기</a></li>
              <li><a href="#none">EXC뷰</a></li>
            </ul>
          </ul>
				</div>
				<div class="gnb-menu-right tab-cont">
          <ul class="gnb-left-depth2 tab">
            <li><button><span>고객센터</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><a href="#none">공지사항</a></li>
              <li><a href="#none">문의하기</a></li>
              <li><a href="#none">자주묻는 질문</a></li>
              <li><a href="#none">오시는 길</a></li>
            </ul>
          </ul>
          <ul class="gnb-left-depth2 tab">
            <li><button><span>아카데미</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><a href="#none">아카데미 소개</a></li>
              <li><a href="#none">강사소개</a></li>
              <li><a href="#none">HR샵</a></li>
              <li><a href="#none">제휴제안</a></li>
              <li><a href="#none">인재채용</a></li>
            </ul>
          </ul>

				</div>
			</div>
		</div>
		
	</div>
  )
}
