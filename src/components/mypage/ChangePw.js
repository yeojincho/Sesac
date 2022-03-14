import React from "react";
import { Label, FormGroup, Input, Button } from "reactstrap";
import "./ChangePw.css";

function ChangePw() {
  return (
    <div>
      <div className='inner-box ChangePw-wrap1'>
        <div className='ChangePw-contentBox'>
          <p className='ChangePw-myTitle'>마이페이지 _____님 </p>
          <p className='ChangePw-myTitle'>
            엑스퍼트 아카데미에 오신걸 환영합니다.
          </p>
          <h2 className='ChangePw-Imp'>비밀번호변경</h2>
          <p>비밀번호 변경을 위해 현재 비밀번호를 입력해 주세요</p>
          <FormGroup className='ChangePw-FormNow'>
            <Label for='exampleEmail' className='ChangePw-Imp'>
              현재비밀번호
            </Label>
            <Input type='text' />
          </FormGroup>
          <FormGroup className='ChangePw-FormNow'>
            <Label for='examplePassword' className='ChangePw-Imp'>
              {" "}
              새로운 비밀번호{" "}
            </Label>
            <Input type='text' />
          </FormGroup>
          <FormGroup className='ChangePw-FormNow'>
            <Label for='examplePassword' className='ChangePw-Imp'>
              {" "}
              새로운 비밀번호 확인{" "}
            </Label>
            <Input type='text' className='ChangePw-inputEnd' />
          </FormGroup>
          <Button>확인</Button>
        </div>
      </div>
    </div>
  );
}

export default ChangePw;
