import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import $ from 'jquery';

export default function MLogin({close}) {
   /* 로그인 Btn */
   const [errorMsg, setErroMsg] = useState("");
   const loginFn = () => {
      // 유효성 검사
      if($('#loginId').val() === ''){
        setErroMsg("아이디를 입력해주세요.");
        return;
      }else if($('#loginPwd').val() === ''){
        setErroMsg("비밀번호를 입력해주세요");
        return;
      }else{
        setErroMsg("");
      }

      // 로그인 세션 생성
      sessionStorage.setItem('user_id', 'test');
      document.location.href = '/';
   }
  return (
    <div className="content login-cont" >
				<div className="login-wrap">
					<p className="login-title">로그인</p>
					<div className="login-box">
						<div className="id-box">
							<input type="text" className="inp-box"  placeholder="아이디" id="loginId" />
						</div>
						<div className="pw-box">
							<input type="password"  className="inp-box"  placeholder="비밀번호" id="loginPwd" />
						</div>
						<span className="error-msg">{errorMsg}</span>
					</div>
					<div className="login-chk-box">
						<div className="inp-chk-box">
							<input type="checkbox" className="inp-chk" id="chkChrGd"/>
							<label htmlFor="chkChrGd">아이디 저장</label>
						</div>
						<button className="btn-login" onClick={loginFn}><span>로그인</span></button>
					</div>
				</div>
				<div className="login-link-wrap">
					<ul className="underline-text-box">
						<li><a href="#">아이디 찾기</a></li>
						<li><a href="#">비밀번호 찾기</a></li>
						<li><a href="/join">회원가입</a></li>
					</ul>
				</div>
			</div>
  )
}
