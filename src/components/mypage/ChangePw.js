import React from "react";
import { Button } from "reactstrap";
import "./ChangePw.css";
import SideMenu from "./SideMenu";
import HeadTitle from "./HeadTitle";

function ChangePw() {
  return (
    <div>
      <div className="inner-box ChangePw-wrap1">
        <HeadTitle />
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

              <Button className="form-btn">확인</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePw;
