import './components/common/common.css';
import './components/program/infoinput.css';

import React from "react";

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/main/Main';

function InfoInput(){
    return(
        <div className="wrapper inner-box">
            <Header />
            <div className="content">
                <div className="step">
                    <ul>
                        <li>1.이용약관</li><i className="fa fa-light fa-chevron-right"></i>
                        <li>2.정보입력</li><i className="fa fa-light fa-chevron-right"></i>
                        <li>3.신청완료</li>
                    </ul>
                </div>
                <div className='tableSection'>
                    <div className="tableSectionPart">
                        <h4 className='title'>1. 기본사항</h4>
                        <table>
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
                                        <select name="date_select" id="date_select">
                                            <option value="">2022-01-10 ~ 2022-01-10</option>
                                            <option value="">2022-01-10 ~ 2022-01-10</option>
                                            <option value="">2022-01-10 ~ 2022-01-10</option>
                                        </select>
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
                        <div className="btn">
                            <a href="#">교육 인원 추가+</a>
                            <a href="#">선택 삭제</a>
                        </div>
                        <div className="table_info">
                            <table>
                                <tbody>
                                    <tr>
                                        <td rowSpan={4}>
                                            <input type="checkbox" />
                                        </td>
                                        <th>
                                            성명 *
                                        </th>
                                        <td>
                                            
                                        </td>
                                        <th>
                                            생년월일(ex.2020.01.01) *
                                        </th>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            연락처(ex.010-1111-1111) *
                                        </th>
                                        <td>
                                            
                                        </td>
                                        <th>
                                            E-mail *
                                        </th>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            회사명
                                        </th>
                                        <td colSpan={3}>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            부서명
                                        </th>
                                        <td>
                                            
                                        </td>
                                        <th>
                                            직위
                                        </th>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td rowSpan={4}>
                                            <input type="checkbox" />
                                        </td>
                                        <th>
                                            성명 *
                                        </th>
                                        <td>
                                            
                                        </td>
                                        <th>
                                            생년월일(ex.2020.01.01) *
                                        </th>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            연락처(ex.010-1111-1111) *
                                        </th>
                                        <td>
                                            
                                        </td>
                                        <th>
                                            E-mail *
                                        </th>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            회사명
                                        </th>
                                        <td colSpan={3}>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            부서명
                                        </th>
                                        <td>
                                            
                                        </td>
                                        <th>
                                            직위
                                        </th>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tableSectionPart">
                        <h4 className='title'>3. 결제 금액</h4>
                        <table className='tablePrice'>
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
                                        <input type="checkbox" /> 현금입금(계산서)
                                        <input type="checkbox" /> 카드결제(문자전송)
                                        <input type="checkbox" /> 카드결제(현장방문)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='confirmBtn'>
                    <a href="#">신청하기</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default InfoInput;