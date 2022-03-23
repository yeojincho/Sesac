import React from "react";
import { Button } from "reactstrap";
import "./ChangePw.css";
import SideMenu from "./SideMenu";
import HeadTitle from "./HeadTitle";

function ChangePw() {
  return (
    <div className="ChangePw-wrap1">
      <HeadTitle />
      <div className="inner-box">
        <ul class="cont-navi">
          <li>
            <a href="#none" class="nav-home">
              HOME
            </a>
          </li>
          <li>
            <span class="nav-sub">마이페이지</span>
          </li>
          <li>
            <span class="nav-sub">비밀번호 변경</span>
          </li>
        </ul>
        <div className="flex-box">
          <SideMenu />
          <div className="ChangePw-contentBox">
            <h2 className="pageTitle">비밀번호변경</h2>
            <p className="ChangePw-subtitle">
              비밀번호 변경을 위해 현재 비밀번호를 입력해 주세요
            </p>

            <div className="mrgn-left">
              <form className="ChangePwFormNow">
                <label for="recent-password"> 현재 비밀번호 </label>
                <input
                  class="form-control"
                  id="recent-password"
                  type="password"
                  aria-label="email address"
                />
                <label for="recent-password"> 새로운 비밀번호 </label>
                <input
                  class="form-control"
                  id="recent-password"
                  type="password"
                  aria-label="email address"
                />
                <label for="recent-password"> 새로운 비밀번호 확인</label>
                <input
                  class="form-control"
                  id="recent-password"
                  type="password"
                  aria-label="email address"
                />
              </form>

              <Button
                className="form-btn"
                onClick={() => {
                  alert("비밀번호가 변경되었습니다");
                }}
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePw;
