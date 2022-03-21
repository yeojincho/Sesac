import React from "react";
import { NavLink } from 'react-router-dom';
import '../common/common.css';
import './jobHeader.css';

export default function jobHeader(){

  const menuStyle = {
    display: 'block',
    backgroundColor: '#03a65a',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '50px',
  }
  return(
    <>
          <ul class="cont-navi">
        <li><a href="#none" class="nav-home">HOME</a></li>
        <li><a href="#none" class="nav-sub">취업과정</a></li>
        <li><span class="nav-sub">소개</span></li>
      </ul>
    <section className='jobTitle'>
        <h1>취업과정</h1>
        <h2>— 취업 준비생들의 고충을 해결해 줄 엑스퍼트아카데미 취업과정을 소개합니다.</h2>
    </section>
    <div className="jobMenu">
        <ul className="jobMenuList">
            <li><NavLink to='/job' activeStyle={menuStyle}>소개</NavLink> </li>
            <li><NavLink to='/jobrecruit' activeStyle={menuStyle}>모집 중인 과정</NavLink> </li>
            <li>과정 문의</li>
        </ul>
    </div>
    </>
  )

}