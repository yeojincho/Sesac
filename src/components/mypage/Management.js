import React from "react";
import { Link } from "react-router-dom";
import { Label, FormGroup, Input, Button, Form } from "reactstrap";
import "./Management.css";
import SideMenu from "./SideMenu";

function Management() {
  return (
    <div className="inner-box Management-wrap1">
      <SideMenu />
      <div className="Management-contentBox">
        <div className="Management-inform">
          <p className="Management-infoTitle">회원정보 관리</p>
          <p className="Management-infoTitle">필수정보</p>
          <p>성명 : 홍길동 </p>
          <p>아이디 : expert</p>
          <p> 성별:남</p>
          <Form className="Management-infoForm">
            <FormGroup>
              <p className="Management-infoTitle">부가정보1</p>
              <Label for="exampleEmail">휴대전화</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"> 메일주소 </Label>
              <Input type="email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"> 생년월일 </Label>
              <Input type="date" id="select" />
            </FormGroup>
            <p className="Management-service">메일링서비스</p>
            <FormGroup check>
              <Input type="checkbox" id="Management-checkbox" />
              수신받음
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">회원구분 </Label>
              <Label for="exampleSelect"></Label>
              <Input id="Management-select" name="select" type="select">
                <option>교육담당자</option>
                <option>일반</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <p className="infoTitle">부가정보2</p>
              <Label for="exampleEmail">회사명</Label>
              <Input id="Management-exampleEmail" name="email" type="email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"> 부서명 </Label>
              <Input id="examplePassword" name="password" type="password" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"> 직함 </Label>
              <Input id="examplePassword" name="password" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"> 회사전화 </Label>
              <Input id="examplePassword" name="password" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"> 회사주소 </Label>
              <Input id="examplePassword" name="password" type="text" />
            </FormGroup>
          </Form>
          <div className="Management-bottomBtn">
            <Button>확인</Button>
            <Link to="/manage/withdrawal">회원탈퇴</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Management;
