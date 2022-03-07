import './components/common/common.css';

import React from "react";

import {Route, Switch} from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/main/Main';

function Curriculum(){
    return(
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path="/" component={Main}><Main /></Route>
            </Switch>
            <div className="top_detailpage">
                <div className="detailpage_img">사진은 css로 추가</div>
                <div className="detailpage_txt">
                    <h3 className="detailpage_txt_title">사내강사 양성과정</h3>
                    <ul>
                        <li>
                            <div className='detailpage_txt_subtitle'>강의시간</div>
                            <div className='detailpage_txt_explain select'>1DAY 8H (09:00~18:00)</div>
                        </li>
                        <li>
                            <div className='detailpage_txt_subtitle'>강의장소</div>
                            <div className='detailpage_txt_explain select'>엑스퍼트 러닝센터</div>
                        </li>
                        <li>
                            <div className='detailpage_txt_subtitle'>강의방식</div>
                            <div className='detailpage_txt_explain select'>비대면</div>
                        </li>
                        <li>
                            <div className='detailpage_txt_subtitle'>교육비</div>
                            <div className='detailpage_txt_explain select'>290,000원</div>
                        </li>
                        <li>
                            <div className='detailpage_txt_subtitle'>일정선택</div>
                            <div className='detailpage_txt_explain select'>
                                <select name="program_select" id="program_select">
                                    <option value>::::::::::::::::: 날짜 선택 :::::::::::::::::</option>
                                    <option value="">2022-03-10 (목)</option>
                                    <option value="">2022-03-10 (목)</option>
                                    <option value="">2022-03-10 (목)</option>
                                    <option value="">2022-03-10 (목)</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                    <ul className="program_btn">
                        <li><a href="#">문의하기</a></li>
                        <li><a href="#">관심과정</a></li>
                        <li><a href="#">과정신청</a></li>
                    </ul>
                </div>
                <span>공유</span>
            </div>
            <div className="bottom_detailpage">
                <ul className="category">
                    <li><a href="#">과정개요</a></li>
                    <li><a href="#">과정목표</a></li>
                    <li><a href="#">교육대상</a></li>
                    <li><a href="#">교육대상</a></li>
                    <li><a href="#">교육대상</a></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Curriculum;