/* 
  화면     : 메인 > 헤더
*/

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

import LoginPop from "../main/popup/Login";
import "./header.css";

export default function Header({ isLogin }) {
  /* 헤더 메뉴 fixed */
  $(window).on('scroll',function() {
      var window = $(this).scrollTop();

      if(70 <= window) {
        $("nav").addClass("fixed");
        $(".btn-screen-top").addClass("show");
        $(".btn-screen-top").removeClass("hide");
      } else {
        $("nav").removeClass("fixed");
        $(".btn-screen-top").removeClass("show");
        $(".btn-screen-top").addClass("hide");
      }
  })

  /* 로그인 팝업 */
  const [LoginPopOpen, setLoginPopOpen] = useState(false);
  const openLoginPopFn = () => setLoginPopOpen(true);
  const closeLoginPopFn = () => setLoginPopOpen(false);

  /* 로그아웃 */
  const logoutFn = () => {
    // 로그인 세션 삭제
    sessionStorage.removeItem("user_id");
    document.location.replace("/");
  };



  /* 메뉴 닫힘 (임시)*/
  const[subMenuClose,setSubMenuClose] = useState(false);
  const subMenuCloseFn = () => {
    setSubMenuClose(!subMenuClose);
    $('.gnb').css('pointer-events','none');
  }
  useEffect(()=>{
    setTimeout(()=>{ $('.gnb').css('pointer-events','auto'); }, 1000);
  }, [subMenuClose]);


  /* 검색 롤링*/
  const [searchTxt, setSearchTxt] = useState("");
  const isRollingFn = () => {
    $(".top-rolling").hide();
  }
  const rollingShowFn = () => {
    if(searchTxt === ""){
      $(".top-rolling").show();
    }
  }

  return (
    <>
      <header className="header-wrapper">
        <div className="header-top">
          <div className="inner-box header-inner">
            <h1 className="top-logo">
              <a href="/">엑스퍼트아카데미</a>
            </h1>
            <div className="top-search" onBlur={rollingShowFn} onClick={isRollingFn}>
              <div className="top-search-box">
                <input type="text" className="top-search-input" id="search" onChange={(e)=>{setSearchTxt(e.target.value)}} />
                <a className="top-search-btn"><img src="/images/search.png" alt="search" /></a>
                <div className="top-rolling">
                    <span className="rolling-item">빅테이터</span>
                    <span className="rolling-item">파이썬</span>
                    <span className="rolling-item">프론트엔드</span>
                </div>
              </div>
            </div>
            <div className="top-btn">
              <Link to="/sample" onClick={subMenuCloseFn}>공통샘플</Link>
              {!isLogin ? (
                <>
                  <a href="#" onClick={openLoginPopFn}>
                    로그인
                  </a>
                  <Link to="/join">회원가입</Link>
                </>
              ) : (
                <>
                <Link to="/manage">마이페이지</Link>
                  <a href="#" onClick={logoutFn}>
                    로그아웃
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        {/* 헤더 top */}

        <nav className="header-bottom">
          <ul className="inner-box gnb" >
            <li className="depth1">
              <Link to="/">공개과정</Link>
              <ul className="depth2" >
                <li>
                  <Link to="/program" onClick={subMenuCloseFn}>월간교육일정</Link>
                </li>
                <li>
                  <Link to="" onClick={subMenuCloseFn}>계층교육</Link>
                </li>
                <li>
                  <Link to="/" onClick={subMenuCloseFn}>직무역량</Link>
                </li>
                <li>
                  <Link to="/" onClick={subMenuCloseFn}>DX교육</Link>
                </li>
                <li>
                  <Link to="/" onClick={subMenuCloseFn}>진단</Link>
                </li>
                <li>
                  <Link to="/" onClick={subMenuCloseFn}>일반</Link>
                </li>
              </ul>
            </li>
            <li className="depth1">
              <Link to="/job">취업과정</Link>
              <ul class="depth2">
                <li>
                  <Link to="/job" onClick={subMenuCloseFn}>소개</Link>
                </li>
                <li>
                  <Link to="/jobrecruit" onClick={subMenuCloseFn}>모집중인 과정</Link>
                </li>
              </ul>
            </li>
            <li className="depth1">
              <Link to="/">Ex콘텐츠</Link>
              <ul className="depth2">
                <li>
                  <Link to="/" onClick={subMenuCloseFn}>이벤트</Link>
                </li>
                <li>
                  <Link to="/" onClick={subMenuCloseFn}>과정후기</Link>
                </li>
                <li>
                  <Link to="/" onClick={subMenuCloseFn}>EXC뷰</Link>
                </li>
              </ul>
            </li>
            <li className="depth1">
              <Link to="/notice">고객센터</Link>
              <ul className="depth2">
                <li>
                  <Link to="/notice" onClick={subMenuCloseFn}>공지사항</Link>
                </li>
                <li>
                  <Link to="/question" onClick={subMenuCloseFn}>문의하기</Link>
                </li>
                <li>
                  <Link to="/faq" onClick={subMenuCloseFn}>자주묻는 질문</Link>
                </li>
                <li>
                  <Link to="/visit" onClick={subMenuCloseFn}>오시는 길</Link>
                </li>
              </ul>
            </li>
            <li className="depth1">
              <Link to="/">아카데미</Link>
              <ul className="depth2">
                <li>
                  <Link to="/" onClick={subMenuCloseFn}>아카데미 소개</Link>
                </li>
                <li>
                  <Link to="/teacherinfo" onClick={subMenuCloseFn}>강사소개</Link>
                </li>
                <li>
                  <Link to="/hrstore" onClick={subMenuCloseFn}>HR샵</Link>
                </li>
                <li>
                  <Link to="/Partnership" onClick={subMenuCloseFn}>제휴제안</Link>
                </li>
                <li>
                  <Link to="/Recruit" onClick={subMenuCloseFn}>인재채용</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* 헤더 bottom */}
        <a className="btn-screen-top" href='#'><span>TOP</span></a>
      </header>

      <LoginPop open={LoginPopOpen} close={closeLoginPopFn} />
    </>
  );
}
