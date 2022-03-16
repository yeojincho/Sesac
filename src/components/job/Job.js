import React from "react";
import JobIntro from './JobIntro';
import './job.css'


export default function Job() {
    return(
        <div className="inner-box">
            <section className='jobTitle'>
                <h1>취업과정</h1>
                <h2>— 취업 준비생들의 고충을 해결해 줄 엑스퍼트아카데미 취업과정을 소개합니다.</h2>
            </section>
            <div className="menu">
                <ul className="jobMenuList">
                    <li>소개</li>
                    <li>모집 중인 과정</li>
                    <li>과정 문의</li>
                </ul>
                <JobIntro />
            </div>
            

        </div>
    )
}