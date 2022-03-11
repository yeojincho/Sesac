import React from "react";
import { Label, FormGroup, Input, Button, Form } from "reactstrap";
import "./Management.css";

function Management() {
  return (
    <div className='inner-box wrap1'>
      <div className='sideBar'>
        <ul className='info'>
          회원정보
          <li>
            <button>- 회원정보관리</button>
          </li>
          <li>
            <button>- 비밀번호 변경</button>
          </li>
        </ul>
        <ul className='info'>
          수강정보
          <li>
            <button>- 수강신청 확인/취소</button>
          </li>
          <li>
            <button>- 수강 내역</button>
          </li>
        </ul>
      </div>
      <div className='contentBox'>
        <p id='title' className='Imp'>
          마이페이지
        </p>
        <p id='title' className='Imp'>
          _____님 엑스퍼트 아카데미에 오신걸 환영합니다.
        </p>
        <div className='inform'>
          <p className='infoTitle'>회원정보 관리</p>
          <p className='infoTitle'>필수정보</p>
          <p>성명 : 홍길동 </p>
          <p>아이디 : expert</p>
          <p> 성별:남</p>
          <Form className='infoForm'>
            <FormGroup>
              <p className='infoTitle'>부가정보1</p>
              <Label for='exampleEmail'>휴대전화</Label>
              <Input type='text' />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'> 메일주소 </Label>
              <Input type='email' />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'> 생년월일 </Label>
              <Input type='date' id='select' />
            </FormGroup>
            <p className='service'>메일링서비스</p>
            <FormGroup check>
              <Input type='checkbox' id='checkbox' />
              수신받음
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>회원구분 </Label>
              <Label for='exampleSelect'></Label>
              <Input id='select' name='select' type='select'>
                <option>교육담당자</option>
                <option>일반</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <p className='infoTitle'>부가정보2</p>
              <Label for='exampleEmail'>회사명</Label>
              <Input id='exampleEmail' name='email' type='email' />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'> 부서명 </Label>
              <Input id='examplePassword' name='password' type='password' />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'> 직함 </Label>
              <Input id='examplePassword' name='password' type='text' />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'> 회사전화 </Label>
              <Input id='examplePassword' name='password' type='text' />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'> 회사주소 </Label>
              <Input id='examplePassword' name='password' type='text' />
            </FormGroup>
          </Form>
          <div className='bottomBtn'>
            <Button>확인</Button>
            <Button>회원탈퇴</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Management;
