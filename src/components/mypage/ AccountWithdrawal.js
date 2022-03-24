import React from "react";
import { Button, FormGroup } from "reactstrap";
import "./AccountWithdrawal.css";
import HeadTitle from "./HeadTitle";
import SideMenu from "./SideMenu";

function AccountWithdrawal() {
  const user1 = { name: "강동원", id: "expert", gender: "남" };

  /* 로그아웃 */
  const WithdrawalFn = () => {
    alert("회원탈퇴가 완료되었습니다.");
    // 로그인 세션 삭제
    sessionStorage.removeItem("user_id");
    document.location.replace("/");
  };
  return (
    <div>
      <div className="account-wrap1">
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
              <span class="nav-sub">회원정보 관리</span>
            </li>
            <li>
              <span class="nav-sub">회원탈퇴</span>
            </li>
          </ul>
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
                <div class="form">
                  <label htmlFor="withdrawals">회원탈퇴</label>
                  <textarea
                    class="form-control"
                    placeholder="간단하게 사유를 작성해 주세요. 예시: 이용안함 / 서비스 불만족 / 재가입"
                    id="withdrawal"
                    style={{ height: "200px" }}
                  ></textarea>
                </div>
              </form>
              <form className="form">
                <label htmlFor="password-check">
                  탈퇴확인을 위한 비밀번호 입력
                </label>
                <input
                  className="form-control"
                  id="password-check"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </form>
              <Button className="form-btn" onClick={WithdrawalFn}>
                탈퇴하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountWithdrawal;
