import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <>
      <div className="menuTitle-box">
        <h1>마이페이지</h1>
        <p>{}님 엑스퍼트아카데미에 오실걸 환영 합니다.</p>
      </div>
      <div className="flex-box">
        <div className="sideMenuBox">
          <ul className="info">
            회원정보
            <li>
              <Link to="/manage">- 회원정보관리</Link>
            </li>
            <li>
              <Link to="/changepw">- 비밀번호 변경</Link>
            </li>
          </ul>
          <ul className="info">
            수강정보
            <li>
              <Link to="/confirmclass">- 수강신청 확인/취소</Link>
            </li>
            <li>
              <Link to="/classlist">- 수강 내역</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
