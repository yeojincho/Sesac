import React, { useState } from "react";
import { Link, Switch } from "react-router-dom";
import SideMenu from "./sidebar/SideMenu";
import RegiConfirm from "./RegiConfirm";
import MyClassList from "./MyClassList";
import AccountWithdrawal from "./ AccountWithdrawal";

const MyPageAll = () => {
  return (
    <>
      <div className="menuTitle-box">
        <h1>마이페이지</h1>
        <p>{}님 엑스퍼트아카데미에 오실걸 환영 합니다.</p>
      </div>
      <div className="flex-box">
        <SideMenu />
        <MyClassList />
      </div>
    </>
  );
};

export default MyPageAll;
