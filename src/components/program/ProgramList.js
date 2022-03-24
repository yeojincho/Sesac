import React from "react";
import { Link } from "react-router-dom";
import MainProgram from '../main/MainProgram';

function ProgramList(){

    return(
        <>
        <div className='orderPage-bigTitle'>
            <div className="inner-box">
                <h3 className='orderPage-h3'>
                    <b>계층교육</b>
                </h3>
                <span className='orderPage-span'>
                __임원, 팀장, 중간관리자, 주니어, 신입사원들을 위한 계층별 교육
                </span>
            </div>
        </div>
        <div className="wrapper inner-box">
            <ul class="cont-navi">
                <li><Link to='/'><a href="#none" class="nav-home">HOME</a></Link></li>
                <li><Link to='/program'><a href="#none" class="nav-sub">공개과정</a></Link></li>
                <li><span class="nav-sub">계층교육</span></li>
            </ul>
            <div className="listSection">
                <div className="c-menu">
                    <ul>
                        <li><a href="#none">대면교육</a></li>
                        <li ><a href="#none">비대면 교육</a></li>
                        <li ><a href="#none">과정문의</a></li>
                    </ul>
                </div>
            </div>
            <MainProgram />
        </div>
        </>
    )
}

export default ProgramList;