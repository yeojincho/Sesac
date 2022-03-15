import React from "react";
import { Label, FormGroup, Input, Button } from "reactstrap";
import "./ChangePw.css";
import SideMenu from "./sidebar/SideMenu";

function ChangePw() {
  return (
    <div>
      <div className="inner-box wrap1">
        <SideMenu />
        <div className="contentBox">
          <h2 className="Imp">비밀번호변경</h2>
          <p>비밀번호 변경을 위해 현재 비밀번호를 입력해 주세요</p>
          <FormGroup className="FormNow">
            <Label for="exampleEmail" className="Imp">
              현재비밀번호
            </Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup className="FormNow">
            <Label for="examplePassword" className="Imp">
              {" "}
              새로운 비밀번호{" "}
            </Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup className="FormNow">
            <Label for="examplePassword" className="Imp">
              {" "}
              새로운 비밀번호 확인{" "}
            </Label>
            <Input type="text" className="inputEnd" />
          </FormGroup>
          <Button>확인</Button>
        </div>
      </div>
    </div>
  );
}

export default ChangePw;
