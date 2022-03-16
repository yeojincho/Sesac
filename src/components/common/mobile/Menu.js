import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

import './menu.css';

export default function Menu({close}) {
  // $("a").on('click',function(){
  //   alert('?');
  // })
  return (
  <div className="header-menu-wrap" >
    <div className="header-menu-btn">
			<a href="#none" className="btn-close" onClick={close}></a>
		</div>
		<div className="header-menu-cont">
			
			<div className="header-top-area" >
				<ul className="header-top-sub">
					<li><Link to="/" onClick={close}><img src="/images/main/ico_my_info.png" alt="로그인" />로그인</Link></li>
					<li><Link to="/join" onClick={close}><img src="/images/main/ico_edit.png" alt="회원가입" />회원가입</Link></li>
				</ul>
			</div>

			<div className="header-gnb-menu">
				<div className="gnb-menu-left">
					<ul className="gnb-left-depth1">
						<li className="on"><button><span>공개과정</span></button></li>
            <ul className="gnb-menu-depth2">
              <li><Link to="/" onClick={close}>월간교육일정</Link></li>
              <li><Link to="/" onClick={close}>계층교육</Link></li>
              <li><Link to="/" onClick={close}>직무역량</Link></li>
              <li><Link to="/" onClick={close}>DX교육</Link></li>
              <li><Link to="/" onClick={close}>진단</Link></li>
              <li><Link to="/" onClick={close}>일반</Link></li>
            </ul>
					</ul>
          <ul className="gnb-left-depth1">
            <li><button><span>취업과정</span></button></li>
            <ul className="gnb-menu-depth2">
              <li><Link to="/" onClick={close}>소개</Link></li>
              <li><Link to="/" onClick={close}>모집중인 과정</Link></li>
            </ul>
          </ul>
          <ul className="gnb-left-depth1">
            <li><button><span>Ex콘텐츠</span></button></li>
            <ul className="gnb-menu-depth2">
              <li><Link to="/" onClick={close}>이벤트</Link></li>
              <li><Link to="/" onClick={close}>과정후기</Link></li>
              <li><Link to="/" onClick={close}>EXC뷰</Link></li>
            </ul>
          </ul>
				</div>
				<div className="gnb-menu-right">
          <ul className="gnb-left-depth1">
            <li><button><span>고객센터</span></button></li>
            <ul className="gnb-menu-depth2">
              <li><Link to="/" onClick={close}>공지사항</Link></li>
              <li><Link to="/" onClick={close}>문의하기</Link></li>
              <li><Link to="/" onClick={close}>자주묻는 질문</Link></li>
              <li><Link to="/" onClick={close}>오시는 길</Link></li>
            </ul>
          </ul>
          <ul className="gnb-left-depth1">
            <li><button><span>아카데미</span></button></li>
            <ul className="gnb-menu-depth2">
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
