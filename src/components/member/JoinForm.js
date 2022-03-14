import React from 'react';
import { Link ,useHistory } from 'react-router-dom';

import './join.css';

export default function JoinForm() {
	let history = useHistory();
  return (
    <div className="join-wrapper">
      <div className="inner-box join-inner">
        <div className="top-title">
          <h2>회원가입</h2>
          <h3>__회원가입 정보</h3>
        </div>

        <section>
          <div className="join-cont">
            <div className="join-step">
              <ol>
                <li><span className="num">01</span> 회원 구분</li>
                <li className="on"><span className="num">02</span> 회원 정보</li>
                <li><span className="num">03</span> 가입 완료</li>
              </ol>
            </div>

						{/* 약관동의 */}
						<div className="agree-wrap"> 
							<div className="agree-header">
								<span className="agree-all">
									<input id="agreeAll" type="checkbox"/>
									<label htmlFor="agreeAll">이용약관,개인정보 수집 및 이용 메일링 서비스(선택)에 모두 동의 합니다.</label>
								</span>
								<i className="arr-icon big"></i>
							</div> 

								
							<div className="agree-container" >
								<div className="agree-cont">
									<div className="agree-item">
										<div className="agree-header">
											<span className="agree-all">
												<input id="agree1" type="checkbox" />
												<label htmlFor="agree1">이용약관 동의 (필수)</label>
											</span>
											<i className="arr-icon small"></i>
										</div>
										<div className="agree-container">
											<div className="agree-cont">
											1. 귀하와 구글의 관계
												1.1 구글 제품, 소프트웨어, 서비스 및 웹 사이트 (이 서면에서는 총칭하여 “서비스”라고 하며, 별도의 서면 계약에 의하여 구글이 귀하에게 제공하는 서비스는 제외합니다)의 귀하에 의한 이용에 대해서는 귀하와 구글 간의 법적 계약상의 조건이 적용됩니다. “구글”은 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States 에 주사무소를 두고 있는 Google Inc.를 의미합니다. 이 서면에는 계약이 어떻게 구성되어 있는지에 대한 설명과 그 계약의 일부 조건이 기재되어 있습니다.
												1.2 구글과 서면으로 달리 합의하지 아니하는 한, 귀하와 Google의 계약은 언제나 이 서면에 기재된 계약조건을 적어도 포함하게 됩니다. 이러한 계약조건을 아래에서는 “일반약관”이라고 지칭합니다.
												1.3 귀하와 Google의 계약은 ‘일반약관’에 추가하여 ‘서비스’에 적용되는 ‘법적 고지’의 계약조건도 포함합니다. 이러한 계약조건 모두는 아래에서는 “추가약관”이라고 지칭합니다. ‘서비스’에 ‘추가약관’이 적용되는 경우에는, 그 ‘추가약관’은 그 ‘서비스’ 내에서 또는 그 ‘서비스’의 이용 중에 귀하가 읽어볼 수 있도록 되어 있을 것입니다.
												1.4 ‘일반약관’은 ‘추가약관’과 함께, 귀하의 ‘서비스’ 이용과 관련하여 귀하와 Google 간에 법적 구속력이 있는 계약으로 성립됩니다. 귀하는 이러한 계약 조건을 충분한 시간을 가지고 주의 깊게 읽으시기 바랍니다. 이러한 법적 계약을 아래에서는 총칭하여 “약관”이라고 합니다.
												1.5 만일 ‘추가약관’의 내용과 ‘일반약관’의 내용 간에 모순되는 사항이 있는 경우에는, ‘추가약관’이 그 ‘서비스’에 관하여는 우선적으로 적용됩니다.
											</div>
										</div>
									</div>
									<div className="agree-item js-fold-wrap">
										<div className="agree-header">
											<span className="agree-all">
												<input id="agree4" type="checkbox" />
												<label htmlFor="agree4">메일링 서비스(선택)</label>
											</span>
										</div>
									</div>
							</div>
						</div>
					</div>




						{/* Form */}
						<div className="join-form">
							<div className="ip-btn-wrap">
								<input title="아이디 입력" type="text" placeholder="아이디 (영문/숫자 조합 3~15자)" maxLength="15" />
								<button className="btn-pos" type="button" id="duplicateCheckId">중복확인</button>
								<span id="memberIdError" className="message"></span>
							</div>
							<div className="ip-wrap">
								<input title="비밀번호 입력" type="password" maxLength="10" placeholder="비밀번호(영문/숫자 조합 3~10자)" autoComplete="off" />
								<span id="memberPwdError" className="message"></span>
							</div>
							<div className="ip-wrap">
								<input title="비밀번호 입력" type="password" maxLength="10" placeholder="비밀번호 확인" autoComplete="off" />
								<span id="memberPwdCheckError" className="message"></span>
							</div>
							<div className="ip-wrap">
								<div className="ip-email-wrap">
									<input title="이메일 아이디 입력" type="text" placeholder="이메일" />
									<span className="gap">@</span>
									<input title="이메일 도메인 직접입력" disabled="disabled" type="text" />
									<select title="이메일 도메인 선택" id="hostSelect">
										<option value="">선택</option>
										<option value="naver.com">naver.com</option>
										<option value="daum.net">daum.net</option>
										<option value="hanmail.net">hanmail.net</option>
										<option value="gmail.com">gmail.com</option>
										<option value="nate.com">nate.com</option>
										<option value="1">직접 입력</option>
									</select>
								</div>
								<span id="emailError" className="message"></span>
							</div>
							<div className="btn-wrap">
								<Link to="/join/complete">
									<button className="btn-lg" type="button" id="nextBtn" onclick={()=>{history.push('/join/complete')}}>다음</button>
								</Link>
							</div>
						</div>

							


							
          </div>
        </section>

      </div>
    </div>
  )
}
