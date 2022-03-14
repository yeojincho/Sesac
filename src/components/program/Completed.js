import '../common/common.css';
import './completed.css';

import React from "react";

function Completed(){
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
                <div className='tableSection'>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    과정명
                                </th>
                                <td>
                                    <p>[LIVE] 교육담당자 HRD 향상과정</p>
                                    2022-04-18 (월) ~ 2022-04-19 (화)
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
                                    <span>(-) 0</span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    5명 이상 할인
                                </th>
                                <td>
                                    <span>(-) 0</span>
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
                <div className='btn'>
                    <ul>
                        <li><a href="#">뒤로가기</a></li>
                        <li><a href="#">신청완료</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Completed;