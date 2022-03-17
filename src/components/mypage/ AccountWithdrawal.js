import React from "react";
import { Label, FormGroup, Input, Button } from "reactstrap";
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
            {/* <p className="account-Imp account-title">회원탈퇴</p> */}
            <h2 className="pageTitle">회원탈퇴</h2>
            <p className="account-subtitle">
              회원탈퇴시 고객님의 회원정보는 모두 삭제 됩니다.
            </p>
            <p className="account-subtitle">
              서비스 부분의 불편한 부분이나 건의사항이 있으시면 적극
              반영하겠습니다.
            </p>
            <div className="account-userinfo">
              <p className="account-Imp"> 성명: {user1.name}</p>
              <p className="account-Imp"> 아이디: {user1.id}</p>
            </div>

            <FormGroup className="form">
              <Label for="exampleText" className="account-Imp withdrwal-reason">
                탈퇴사유
              </Label>
              <Input
                className="account-FormText"
                id="exampleText"
                name="text"
                type="textarea"
                placeholder="간단하게 사유를 작성해 주세요
              예시: 이용안함 / 서비스 불만족 / 재가입"
              />
            </FormGroup>
            <FormGroup className="form">
              <Label for="exampleEmail">탈퇴확인을 위한 비밀번호 입력</Label>
              <Input className="account-FormPw" type="text" />
            </FormGroup>
            <Button className="form-btn">탈퇴하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountWithdrawal;
