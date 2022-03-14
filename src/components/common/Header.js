/* 
  화면     : 메인 > 헤더
*/

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import LoginPop from "../main/popup/Login";
import "./header.css";

export default function Header({ isLogin }) {
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

  return (
    <>
      <header className="header-wrapper">
        <div className="header-top">
          <div className="inner-box header-inner">
            <h1 className="top-logo">
              <a href="/">엑스퍼트아카데미</a>
            </h1>
            <div className="top-search">
              <input
                type="text"
                className="top-search-input"
                placeholder="빅테이터"
              />
              <a className="top-search-btn">
                <img src="/images/search.png" alt="search" />
              </a>
            </div>
            <div className="top-btn">
              {!isLogin ? (
                <>
                  <a href="#" onClick={openLoginPopFn}>
                    로그인
                  </a>
                  <Link to="/join">회원가입</Link>
                </>
              ) : (
                <>
                  <Link to="/mypage">마이페이지</Link>
                  <a href="#" onClick={logoutFn}>
                    로그아웃
                  </a>
                </>
              )}
              <button className="sitemap">+sitemap</button>
            </div>
          </div>
        </div>
        {/* 헤더 top */}

        <nav className="header-bottom">
          <ul className="inner-box gnb">
            <li className="depth1">
              <Link to="/sample1">공개과정</Link>
              <ul class="depth2">
                <li>
                  <Link to="/sample1">월간교육일정</Link>
                </li>
                <li>
                  <Link to="/sample1">계층교육</Link>
                </li>
                <li>
                  <Link to="/sample1">직무역량</Link>
                </li>
                <li>
                  <Link to="/sample1">DX교육</Link>
                </li>
                <li>
                  <Link to="/sample1">진단</Link>
                </li>
                <li>
                  <Link to="/sample1">일반</Link>
                </li>
              </ul>
            </li>
            <li className="depth1">
              <Link to="/sample2">취업과정</Link>
              <ul class="depth2">
                <li>
                  <Link to="/sample2">소개</Link>
                </li>
                <li>
                  <Link to="/sample2">모집중인 과정</Link>
                </li>
              </ul>
            </li>
            <li className="depth1">
              <Link to="/">Ex콘텐츠</Link>
              <ul class="depth2">
                <li>
                  <Link to="/">이벤트</Link>
                </li>
                <li>
                  <Link to="/test">과정후기</Link>
                </li>
                <li>
                  <Link to="/">EXC뷰</Link>
                </li>
              </ul>
            </li>
            <li className="depth1">
              <Link to="/">고객센터</Link>
              <ul class="depth2">
                <li>
                  <Link to="/">공지사항</Link>
                </li>
                <li>
                  <Link to="/test">문의하기</Link>
                </li>
                <li>
                  <Link to="/">자주묻는 질문</Link>
                </li>
                <li>
                  <Link to="/">오시는 길</Link>
                </li>
              </ul>
            </li>
            <li className="depth1">
              <Link to="/">아카데미</Link>
              <ul class="depth2">
                <li>
                  <Link to="/">아카데미 소개</Link>
                </li>
                <li>
                  <Link to="/test">강사소개</Link>
                </li>
                <li>
                  <Link to="/myclass">내역</Link>
                </li>
                <li>
                  <Link to="/confirm">확인취소</Link>
                </li>
                <li>
                  <Link to="/change">비번변경</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* 헤더 bottom */}
      </header>

      <LoginPop open={LoginPopOpen} close={closeLoginPopFn} />
    </>
  );
}
