import '../common/common.css';
import './termsofuse.css';

import React from "react";
import { Link } from "react-router-dom";

function TermsOfUse(){
    return(
        <div className="wrapper inner-box">
            <div className="content">
                <div className="step">
                    <ul>
                        <li>1.이용약관</li><i className="fa fa-light fa-chevron-right"></i>
                        <li>2.정보입력</li><i className="fa fa-light fa-chevron-right"></i>
                        <li>3.신청완료</li>
                    </ul>
                </div>
                <div className="terms_policy">
                    <div className="terms_policy_box">
                        <h4 className='title'>1&#41; 개인정보 수집 및 이용 목적에 대한 동의</h4>
                        <div className="text_box">
                            <h5 className="subtitle">1.개인정보 이용목적</h5>
                            <p>엑스퍼트컨설팅은 교육 수강 신청 시, 교육 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 교육비 정산, 고용보험 과정의 환급 신고, 수강생이력관리 서비스를 위해 고유식별 정보인 주민등록번호를 비롯한 개인정보를 수집하고 있습니다.<br></br>
                            이용자가 정보수신에 동의 한 경우 이메일, 주소, 전화(SNS포함)는 교육관련 정보제공 및 본부홍보 자료로 활용될 수 있습니다.</p>
                        </div>
                        <input type="checkbox" /><span className='span_bold'>위 이용약관에 동의</span>합니다
                    </div>
                    <div className="terms_policy_box">
                        <h4 className='title'>2&#41; 교육비 취소 및 환불에 대한 동의</h4>
                        <div className="text_box">
                            <h5 className="subtitle">1.강의 환불규정</h5>
                            <p>-강의 변경/취소는 개강일 1일 전까지 전액 환불 가능합니다.
                            -강의 취소/환불은 전화(02-2152-3915)또는 고객센터 &gt;묻고답하기 게시판을 통해 가능하며, 접수시간을기준으로 순차 처리합니다.
                            <span>*주의 : 주말 휴일의 경우에는 고객센터 &gt;묻고답하기 게시판에 접수해 주셔야 취소처리가 가능하오니 이점, 유의해주시기 바랍니다.</span>
                            -개강 이후 본인 사유에 의한 취소/환불 요청 시 ‘평생 교육시설 운영법 규정’에 의거하여 환불됩니다.</p>
                        </div>
                        <input type="checkbox" /><span className='span_bold'>위 이용약관에 동의</span>합니다
                    </div>
                    <div className='agree_box'>
                        <input type="checkbox" /><span className='span_bold'>위 이용약관에 전체동의</span>합니다
                    </div>
                    <div className="ok_btn">
                        <Link to="/infoinput">
                            <button>확인</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfUse;