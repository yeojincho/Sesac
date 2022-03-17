import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./sidemenu.css";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <>
      <div className="sideMenuBox">
        <ul className="info">
          <em>회원정보</em>
          <li>
            <NavLink
              to="/manage"
              activeStyle={{ fontWeight: "bold", color: "#03A65A" }}
            >
              회원정보관리
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/changepw"
              activeStyle={{ fontWeight: "bold", color: "#03A65A" }}
            >
              비밀번호 변경
            </NavLink>
          </li>
        </ul>
        <ul className="info">
          <em>수강정보</em>
          <li>
            <NavLink
              to="/confirmclass"
              activeStyle={{ fontWeight: "bold", color: "#03A65A" }}
            >
              수강신청 확인/취소
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classlist"
              activeStyle={{ fontWeight: "bold", color: "#03A65A" }}
            >
              수강 내역
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
