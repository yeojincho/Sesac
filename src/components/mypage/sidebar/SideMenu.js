import "./sidemenu.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MyClassList from "../MyClassList";
import SidebarItem from "./SidebarItem";

function SideMenu() {
  const pathName = useLocation().pathname;
  const menus = [
    { name: "회원정보관리", path: "/mypage/userinfo" },
    { name: "비밀번호 변경", path: "/mypage/changepw" },
    { name: "수강신청 확인/취소", path: "/mypage/confirmclass" },
    { name: "수강내역", path: "/mypage/classlist" },
  ];

  return (
    <div className="sideMenuBox">
      {menus.map((menu, idx) => {
        return (
          <Link to={menu.path} key={idx}>
            <SidebarItem
              menu={menu}
              isActive={pathName === menu.path ? true : false}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default SideMenu;
