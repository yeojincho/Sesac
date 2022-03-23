import '../common/common.css';
import './termsofuse.css';

import React from "react";
import { Link } from "react-router-dom";

function TermsOfUse(){
    return(
        <div className="wrapper inner-box">
            <ul class="cont-navi">
                <li><Link to='/'><a href="#none" class="nav-home">HOME</a></Link></li>
                <li><Link to='/program'><a href="#none" class="nav-sub">공개과정</a></Link></li>
                <li><Link to='/programlist'><a href="#none" class="nav-sub">계층교육</a></Link></li>
                <li><Link to='/curriculum'><a href="#none" class="nav-sub">교육 상세</a></Link></li>
                <li><span class="nav-sub">교육 신청</span></li>
            </ul>
            <div className="content">
                <div className="c-menu">
                    <ul>
                        <li className="c-on"><Link to='/TermsOfUse'>1. 이용약관</Link></li>
                        <li ><Link to='/infoinput'>2. 정보입력</Link></li>
                        <li ><Link to='/completed'>3. 신청완료</Link></li>
                    </ul>
                </div>
                <div className="terms_policy">
                    <div className="terms_policy_box">
                        <h4 className='title'>1&#41; 개인정보 수집 및 이용 목적에 대한 동의</h4>
                        <div className="text_box">
                            <h5 className="subtitle">1.개인정보 이용목적</h5>
                            <p>엑스퍼트컨설팅은 교육 수강 신청 시, 교육 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 교육비 정산, 고용보험 과정의 환급 신고, 수강생이력관리 서비스를 위해 고유식별 정보인 주민등록번호를 비롯한 개인정보를 수집하고 있습니다.<br/>
                            이용자가 정보수신에 동의 한 경우 이메일, 주소, 전화(SNS포함)는 교육관련 정보제공 및 본부홍보 자료로 활용될 수 있습니다.</p>
                            <p>엑스퍼트컨설팅은 교육 수강 신청 시, 교육 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 교육비 정산, 고용보험 과정의 환급 신고, 수강생이력관리 서비스를 위해 고유식별 정보인 주민등록번호를 비롯한 개인정보를 수집하고 있습니다.<br/>
                            이용자가 정보수신에 동의 한 경우 이메일, 주소, 전화(SNS포함)는 교육관련 정보제공 및 본부홍보 자료로 활용될 수 있습니다.</p>
                            <p>엑스퍼트컨설팅은 교육 수강 신청 시, 교육 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 교육비 정산, 고용보험 과정의 환급 신고, 수강생이력관리 서비스를 위해 고유식별 정보인 주민등록번호를 비롯한 개인정보를 수집하고 있습니다.<br/>
                            이용자가 정보수신에 동의 한 경우 이메일, 주소, 전화(SNS포함)는 교육관련 정보제공 및 본부홍보 자료로 활용될 수 있습니다.</p>
                        </div>
                        <div className="c-inp-chk-box">
                            <input type="checkbox" id="dcList01" className="inp-chk" />
                            <label htmlFor="dcList01">위 이용약관에 동의합니다</label>
                        </div>
                    </div>
                    <div className="terms_policy_box">
                        <h4 className='title'>2&#41; 교육비 취소 및 환불에 대한 동의</h4>
                        <div className="text_box">
                            <h5 className="subtitle">1.강의 환불규정</h5>
                            <p>-강의 변경/취소는 개강일 1일 전까지 전액 환불 가능합니다.
                            -강의 취소/환불은 전화(02-2152-3915)또는 고객센터 &gt;묻고답하기 게시판을 통해 가능하며, 접수시간을기준으로 순차 처리합니다.<br/>
                            <span className='textRed'>*주의 : 주말 휴일의 경우에는 고객센터 &gt;묻고답하기 게시판에 접수해 주셔야 취소처리가 가능하오니 이점, 유의해주시기 바랍니다.</span><br/>
                            -개강 이후 본인 사유에 의한 취소/환불 요청 시 ‘평생 교육시설 운영법 규정’에 의거하여 환불됩니다.<br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quisquam beatae quis velit culpa labore suscipit possimus ullam fuga nesciunt, amet quaerat ipsa? Perferendis et ex doloribus sapiente placeat dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, corrupti. Alias, optio hic quaerat tempore officia, ducimus nobis natus, illo dignissimos autem architecto earum! Beatae amet animi hic doloribus quae!</p>
                        </div>
                        <div className="c-inp-chk-box">
                            <input type="checkbox" id="dcList02" className="inp-chk" />
                            <label htmlFor="dcList02">위 이용약관에 동의합니다</label>
                        </div>
                    </div>
                    <div className='agree_box'>
                        <div className="c-inp-chk-box">
                            <input type="checkbox" id="dcList03" className="inp-chk" />
                            <label htmlFor="dcList03">위 이용약관에 모두 동의합니다</label>
                        </div>
                    </div>
                    <div className="ok_btn">
                        <Link to="/infoinput">
                            <button className="btn-type2 small"><span>확인</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfUse;