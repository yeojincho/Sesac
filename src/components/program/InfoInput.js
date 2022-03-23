import '../common/common.css';
import './infoinput.css';
import InfoInput_section from './InfoInput_section';

import React from "react";
import { Link } from "react-router-dom";

function InfoInput(){
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
                        <li><Link to='/TermsOfUse'>1. 이용약관</Link></li>
                        <li className="c-on" ><Link to='/infoinput'>2. 정보입력</Link></li>
                        <li ><Link to='/completed'>3. 신청완료</Link></li>
                    </ul>
                </div>
                <div className='tableSection'>
                    <div className="tableSectionPart">
                        <h4 className='title'>1. 기본사항</h4>
                        <table className='infoTable'>
                            <tbody>
                                <tr>
                                    <th>
                                        교육과정 *
                                    </th>
                                    <td>
                                        [LIVE] 교육담당자 HRD 향상과정
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        교육기간 *
                                    </th>
                                    <td>
                                        <div class="c-inp-select-box">
                                            <select>
                                                <option>날짜 선택</option>
                                                <option>2022-03-10 ~ 2022-03-10</option>
                                                <option>2022-03-10 ~ 2022-03-10</option>
                                                <option>2022-03-10 ~ 2022-03-10</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        교육인원
                                    </th>
                                    <td>
                                        1명
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tableSectionPart">
                        <h4 className='title'>2. 교육생 정보</h4>
                        <h5 className='subtitle'>실제 교육 참가자의 정보를 입력해주세요.</h5>
                        <InfoInput_section />
                    </div>
                    <div className="tableSectionPart">
                        <h4 className='title'>3. 결제 금액</h4>
                        <table className='tablePrice infoTable'>
                            <tbody>
                                <tr>
                                    <th colSpan="2">
                                        3명 이상 할인 (5%)
                                    </th>
                                    <td>
                                        0원
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="2">
                                        5명 이상 할인 (5%)
                                    </th>
                                    <td>
                                        0원
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="2">
                                        총 금액
                                    </th>
                                    <td>
                                        570,000원
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        결제방법 선택 *
                                    </th>
                                    <td colSpan="2">
                                        <div className="checkSection">
                                            <div className="c-inp-chk-box">
                                                <input type="checkbox" id="dcList01" className="inp-chk" />
                                                <label htmlFor="dcList01">현금입금&#40;계산서&#41;</label>
                                            </div>
                                            <div className="c-inp-chk-box">
                                                <input type="checkbox" id="dcList02" className="inp-chk" />
                                                <label htmlFor="dcList02">카드결제&#40;문자전송&#41;</label>
                                            </div>
                                            <div className="c-inp-chk-box">
                                                <input type="checkbox" id="dcList03" className="inp-chk" />
                                                <label htmlFor="dcList03">카드결제&#40;현장방문&#41;</label>
                                            </div>
                                            <div className="c-inp-chk-box">
                                                <input type="checkbox" id="dcList04" className="inp-chk" />
                                                <label htmlFor="dcList04">무료교육</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='paymentNoti'>* 무료교육인 경우에만 무료교육을 선택해 주세요</p>
                    </div>
                </div>
                <div className='confirmBtn c-btn-box'>
                    <Link to="/completed">
                        <button className="btn-type2 small"><span>신청하기</span></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InfoInput;