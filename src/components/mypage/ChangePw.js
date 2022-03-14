import React from "react";
import { Label, FormGroup, Input, Button } from "reactstrap";
import "./ChangePw.css";

function ChangePw() {
  return (
    <div>
<<<<<<< HEAD
      <div className="inner-box wrap1">
        <div className="sideBar">
          <ul className="info">
            회원정보
            <li>
              <button>- 회원정보관리</button>
            </li>
            <li>
              <button>- 비밀번호 변경</button>
            </li>
          </ul>
          <ul className="info">
            수강정보
            <li>
              <button>- 수강신청 확인/취소</button>
            </li>
            <li>
              <button>- 수강 내역</button>
            </li>
          </ul>
        </div>
        <div className="contentBox">
          <p className="myTitle">마이페이지 _____님 </p>
          <p className="myTitle">엑스퍼트 아카데미에 오신걸 환영합니다.</p>
          <h2 className="Imp">비밀번호변경</h2>
          <p>비밀번호 변경을 위해 현재 비밀번호를 입력해 주세요</p>
          <FormGroup className="FormNow">
            <Label for="exampleEmail" className="Imp">
=======
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
>>>>>>> bbc4d87bb9828377df4cd27cd722e5dcdbd3d128
              현재비밀번호
            </Label>
            <Input type="text" />
          </FormGroup>
<<<<<<< HEAD
          <FormGroup className="FormNow">
            <Label for="examplePassword" className="Imp">
=======
          <FormGroup className='ChangePw-FormNow'>
            <Label for='examplePassword' className='ChangePw-Imp'>
>>>>>>> bbc4d87bb9828377df4cd27cd722e5dcdbd3d128
              {" "}
              새로운 비밀번호{" "}
            </Label>
            <Input type="text" />
          </FormGroup>
<<<<<<< HEAD
          <FormGroup className="FormNow">
            <Label for="examplePassword" className="Imp">
              {" "}
              새로운 비밀번호 확인{" "}
            </Label>
            <Input type="text" className="inputEnd" />
=======
          <FormGroup className='ChangePw-FormNow'>
            <Label for='examplePassword' className='ChangePw-Imp'>
              {" "}
              새로운 비밀번호 확인{" "}
            </Label>
            <Input type='text' className='ChangePw-inputEnd' />
>>>>>>> bbc4d87bb9828377df4cd27cd722e5dcdbd3d128
          </FormGroup>
          <Button>확인</Button>
        </div>
      </div>
    </div>
  );
}

export default ChangePw;
