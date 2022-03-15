import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

import './menu.css';

export default function Menu({close}) {
  // $("a").on('click',function(){
  //   alert('?');
  // })
  return (
  <div class="header-menu-wrap" >
    <div class="header-menu-btn">
			<a href="#none" class="btn-close" onClick={close}></a>
		</div>
		<div class="header-menu-cont">
			
			<div class="header-top-area" >
				<ul class="header-top-sub">
					<li><Link to="/" onClick={close}><img src="/images/main/ico_my_info.png" alt="로그인" />로그인</Link></li>
					<li><Link to="/join" onClick={close}><img src="/images/main/ico_edit.png" alt="회원가입" />회원가입</Link></li>
				</ul>
			</div>

			<div class="header-gnb-menu tab-box">
				<div class="gnb-menu-left">
					<ul class="gnb-left-depth2 tab">
						<li class="on"><button><span>공개과정</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><Link to="/" onClick={close}>월간교육일정</Link></li>
              <li><Link to="/" onClick={close}>계층교육</Link></li>
              <li><Link to="/" onClick={close}>직무역량</Link></li>
              <li><Link to="/" onClick={close}>DX교육</Link></li>
              <li><Link to="/" onClick={close}>진단</Link></li>
              <li><Link to="/" onClick={close}>일반</Link></li>
            </ul>
					</ul>
          <ul class="gnb-left-depth2 tab">
            <li><button><span>취업과정</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><Link to="/" onClick={close}>소개</Link></li>
              <li><Link to="/" onClick={close}>모집중인 과정</Link></li>
            </ul>
          </ul>
          <ul class="gnb-left-depth2 tab">
            <li><button><span>Ex콘텐츠</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><Link to="/" onClick={close}>이벤트</Link></li>
              <li><Link to="/" onClick={close}>과정후기</Link></li>
              <li><Link to="/" onClick={close}>EXC뷰</Link></li>
            </ul>
          </ul>
				</div>
				<div class="gnb-menu-right tab-cont">
          <ul class="gnb-left-depth2 tab">
            <li><button><span>고객센터</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><Link to="/" onClick={close}>공지사항</Link></li>
              <li><Link to="/" onClick={close}>문의하기</Link></li>
              <li><Link to="/" onClick={close}>자주묻는 질문</Link></li>
              <li><Link to="/" onClick={close}>오시는 길</Link></li>
            </ul>
          </ul>
          <ul class="gnb-left-depth2 tab">
            <li><button><span>아카데미</span></button></li>
            <ul class="gnb-menu-depth3 tab-item active">
              <li><Link to="/" onClick={close}>아카데미 소개</Link></li>
              <li><Link to="/" onClick={close}>강사소개</Link></li>
              <li><Link to="/" onClick={close}>HR샵</Link></li>
              <li><Link to="/" onClick={close}>제휴제안</Link></li>
              <li><Link to="/" onClick={close}>인재채용</Link></li>
            </ul>
          </ul>

				</div>
			</div>
		</div>
		
	</div>
  )
}
