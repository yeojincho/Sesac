import React from "react";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <ul className="info">
        회원정보
        <li>
          <button>- 회원정보관리</button>
        </li>
        <li>
          <button>- 비밀번호 변경</button>
        </li>
      </ul>
      <ul className="info">
        수강정보
        <li>
          <button>- 수강신청 확인/취소</button>
        </li>
        <li>
          <button>- 수강 내역</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
