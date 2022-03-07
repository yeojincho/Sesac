import './components/common/common.css';
import './components/program/program.css';

import React from "react";

import {Route, Switch} from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/main/Main';

function Program(){
    return(
        <div className="wrapper inner-box">
            <Header />
            <Switch>
                <Route exact path="/" component={Main}><Main /></Route>
            </Switch>
            <div className="tableSection">
                <h2 className='tableTitle'>월간교육일정</h2>
                <p className='tableSubTitle'>엑스퍼트 아카데미 교육 프로그램의 월간 교육과정을 알려드립니다.</p>
                <div className="top">
                    <button className='downloadBtn'>
                    <i class="fa fa-solid fa-arrow-down-to-square"></i>공개교육 연간일정표 다운로드 {/* 폰트어썸 다운로드 아이콘이 뭔짓을해도 안먹어서 일단 보류*/}
                    </button>
                    <h3 className='date'>
                        <i className="fa fa-light fa-chevron-left"></i>
                        2022년 1월
                        <i className="fa fa-light fa-chevron-right"></i>
                    </h3>
                    <div className="searchbox">
                        <form action="#">
                            <input type="text" placeholder='search' />
                            <button>검색</button>
                        </form>
                    </div>
                </div>
                <table>
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
                            1.19~1.20
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
                            계층교육
                        </th>
                        <td>
                            사내강사 양성과정
                        </td>
                        <td>
                            1DAY 8H
                        </td>
                        <td>
                            1.19~1.20
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
                            계층교육
                        </th>
                        <td>
                            사내강사 양성과정
                        </td>
                        <td>
                            1DAY 8H
                        </td>
                        <td>
                            1.19~1.20
                        </td>
                        <td>
                            290,000원
                        </td>
                        <td>
                            송파러닝센터
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="listSection">
                <h2>계층교육</h2>
                <p>임원, 팀장, 중간관리자, 주니어, 신입사원들을 위한 계층별 교육</p>
                <ul className="btn">
                    <li><a href="#">대면교육</a></li>
                    <li><a href="#">비대면 교육</a></li>
                    <li><a href="#">과정문의</a></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Program;