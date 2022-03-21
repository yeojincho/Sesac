import '../common/common.css';
import './completed.css';

import React from "react";
import { Link } from "react-router-dom";

function Completed(){
    return(
        <div className="wrapper inner-box">
            <ul class="cont-navi">
                <li><Link to='/'><a href="#none" class="nav-home">HOME</a></Link></li>
                <li><Link to='/program'><a href="#none" class="nav-sub">공개과정</a></Link></li>
                <li><Link to='/programlist'><a href="#none" class="nav-sub">계층교육</a></Link></li>
                <li><Link to='/programlist'><a href="#none" class="nav-sub">교육 상세</a></Link></li>
                <li><span class="nav-sub">교육 신청</span></li>
            </ul>
            <div className="c-menu">
                <ul>
                    <li><Link to='/TermsOfUse'>1. 이용약관</Link></li>
                    <li><Link to='/infoinput'>2. 정보입력</Link></li>
                    <li className="c-on"><Link to='/completed'>3. 신청완료</Link></li>
                </ul>
            </div>
            <div className='tableSection'>
                <table className='compTable'>
                    <tbody>
                        <tr>
                            <th>
                                과정명
                            </th>
                            <td>
                                <p>&#91;LIVE&#93; 교육담당자 HRD 향상과정</p>
                                2022-04-18 &#40;월&#41; ~ 2022-04-19 &#40;화&#41;
                            </td>
                        </tr>
                        <tr>
                            <th>
                                정상가
                            </th>
                            <td>
                                570,000 원
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
                        <tr>
                            <th>
                                3명 이상 할인
                            </th>
                            <td>
                                <span>&#40;-&#41; 0</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                5명 이상 할인
                            </th>
                            <td>
                                <span>&#40;-&#41; 0</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                결제 금액
                            </th>
                            <td>
                                <span>570,000</span> 원
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='confirmBtn c-btn-box'>
                <Link to="/infoinput">
                    <button className="btn-type2 small btnMargin"><span>뒤로가기</span></button>
                </Link>
                <Link to="/confirm">
                    <button className="btn-type2 small"><span>신청완료</span></button>
                </Link>
            </div>
        </div>
    )
}

export default Completed;