import React from "react";
import { Button, FormGroup } from "reactstrap";
import "./AccountWithdrawal.css";
import HeadTitle from "./HeadTitle";
import SideMenu from "./SideMenu";

function AccountWithdrawal() {
  const user1 = { name: "강동원", id: "expert", gender: "남" };
  return (
    <div>
      <div className="inner-box account-wrap1">
        <HeadTitle />
        <div className="flex-box">
          <SideMenu />
          <div className="account-contentBox">
            <h2 className="pageTitle">회원탈퇴</h2>
            <p className="account-subtitle">
              회원탈퇴시 고객님의 회원정보는 모두 삭제 됩니다.
            </p>
            <p className="account-subtitle">
              서비스 부분의 불편한 부분이나 건의사항이 있으시면 적극
              반영하겠습니다.
            </p>
            <div className="account-userinfo">
              <p className="account-Imp">
                {" "}
                성명: <span>{user1.name}</span>
              </p>
              <p className="account-Imp">
                {" "}
                아이디: <span>{user1.id}</span>
              </p>
            </div>

            <form className="form">
              <h3>탈퇴사유</h3>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="간단하게 사유를 작성해 주세요."
                  id="floatingTextarea2"
                  style={{ height: "200px" }}
                ></textarea>
                <label for="floatingTextarea2">
                  예시: 이용안함 / 서비스 불만족 / 재가입
                </label>
              </div>
            </form>
            <form className="form">
              <h3>탈퇴확인을 위한 비밀번호 입력</h3>
              <input
                className="form-control"
                id="password-check"
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </form>
            <Button className="form-btn">탈퇴하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountWithdrawal;
