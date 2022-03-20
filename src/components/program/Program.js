import './program.css';

import React, {useState} from "react";

import MainBanner from '../../components/main/MainBanner';

function Program(){
    // function monthBtn() {
    //     if(month < 1){
    //         month = 12;
    //     } else if(month > 12) {
            
    //     }
    // }

    // 강의 날짜 변경 버튼
    const onIncrease = () => {
        setMonth(month + 1);
    }
    const onDecrease = () => {
        setMonth(month - 1);
    }

    const [month, setMonth] = useState(3);

    return(
        <div className="wrapper inner-box">
            <MainBanner />
            <div className="tableSection">
                <div className="c-top-title">
                    <h2>월간교육일정</h2>
                    <h3>__엑스퍼트 아카데미 교육 프로그램의 월간 교육과정을 알려드립니다.</h3>
                </div>
                <div className="top">
                    <button className='downloadBtn'>
                        공개교육 연간일정표 다운로드
                    </button>
                    <div className='date'>
                        <button className='btnPrev' onClick={onDecrease}>prev</button>
                        <h3>2022년 {month}월</h3>
                        <button className='btnNext' onClick={onIncrease}>next</button>
                    </div>
                    <div class="date-search-option programSearch">
                        <div class="item-search">
                            <input type="text" placeholder="검색" class="ipt-search" />
                            <a href="#none" class="btn-search">검색</a>
                        </div>
                    </div>
                    {/* <input type="text" placeholder="Search" className="searchBox" /> */}
                </div>
                <table className='programTable'>
                    <thead>
                        <tr>
                            <th>
                                구분
                            </th>
                            <th>
                                과정명
                            </th>
                            <th>
                                기간/시간
                            </th>
                            <th>
                                일정
                            </th>
                            <th>
                                교육비
                            </th>
                            <th>
                                교육장소
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                계층교육
                            </th>
                            <td>
                                사내강사 양성과정
                            </td>
                            <td>
                                1DAY 8H
                            </td>
                            <td>
                                3.19~3.20
                            </td>
                            <td>
                                290,000원
                            </td>
                            <td>
                                송파러닝센터
                            </td>
                        </tr>
                        <tr>
                            <th>
                                DX교육
                            </th>
                            <td>
                                사내강사 양성과정
                            </td>
                            <td>
                                1DAY 8H
                            </td>
                            <td>
                                3.19
                            </td>
                            <td>
                                290,000원
                            </td>
                            <td>
                                비대면 교육
                            </td>
                        </tr>
                        <tr>
                            <th>
                                직무역량
                            </th>
                            <td>
                                사내강사 양성과정
                            </td>
                            <td>
                                1DAY 8H
                            </td>
                            <td>
                                3.20
                            </td>
                            <td>
                                290,000원
                            </td>
                            <td>
                                문정러닝센터
                            </td>
                        </tr>
                        <tr>
                            <th>
                                진단
                            </th>
                            <td>
                                사내강사 양성과정
                            </td>
                            <td>
                                1DAY 8H
                            </td>
                            <td>
                                3.20
                            </td>
                            <td>
                                290,000원
                            </td>
                            <td>
                                문정러닝센터
                            </td>
                        </tr>
                        <tr>
                            <th>
                                일반
                            </th>
                            <td>
                                사내강사 양성과정
                            </td>
                            <td>
                                1DAY 8H
                            </td>
                            <td>
                                3.20
                            </td>
                            <td>
                                290,000원
                            </td>
                            <td>
                                문정러닝센터
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Program;