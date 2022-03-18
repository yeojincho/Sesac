import React from "react";
import { Link } from 'react-router-dom';
import '../common/common.css';
import './jobHeader.css';

export default function jobHeader(){
  return(
    <div className="inner-box">
    <section className='jobTitle'>
        <h1>취업과정</h1>
        <h2>— 취업 준비생들의 고충을 해결해 줄 엑스퍼트아카데미 취업과정을 소개합니다.</h2>
    </section>
    <div className="jobMenu">
        <ul className="jobMenuList">
            <li><Link to='/job'>소개</Link> </li>
            <li><Link to='/jobrecruit'>모집 중인 과정</Link> </li>
            <li>과정 문의</li>
        </ul>
    </div>
    </div>
  )

}