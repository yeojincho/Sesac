import React from "react";
import { Label, FormGroup, Input, Button } from "reactstrap";
import "./AccountWithdrawal.css";

function AccountWithdrawal() {
  return (
    <div>
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
          <p className='myTitle'>마이페이지_____님 </p>
          <p className='myTitle'>엑스퍼트 아카데미에 오신걸 환영합니다.</p>
          <p className='Imp'>회원탈퇴</p>
          <p>회원탈퇴시 고객님의 회원정보는 모두 삭제 됩니다.</p>
          <p>
            서비스 부분의 불편한 부분이나 건의사항이 있으시면 적극
            반영하겠습니다.
          </p>
          <p className='Imp'> 성명 : 홍길동</p>
          <p className='Imp'> 아이디 : expert</p>
          <FormGroup>
            <Label for='exampleText' className='Imp'>
              탈퇴사유
            </Label>
            <Input
              className='FormText'
              id='exampleText'
              name='text'
              type='textarea'
              placeholder='간단하게 사유를 작성해 주세요
              예시: 이용안함 / 서비스 불만족 / 재가입'
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail'>탈퇴확인을 위한 비밀번호 입력</Label>
            <Input className='FormPw' type='text' />
          </FormGroup>
          <Button>탈퇴하기</Button>
        </div>
      </div>
    </div>
  );
}

export default AccountWithdrawal;
