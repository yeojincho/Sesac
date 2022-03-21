import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./program-list.css";
import MainProgram from '../main/MainProgram';
import $ from 'jquery';

function ProgramList(){
    useEffect(()=> {
        $('input').click(function(){
            $('input').removeClass("c-on");
            $(this).addClass("c-on");
        });
    },[])

    return(
        <div className="wrapper inner-box">
            <div className="listSection">
                <div className="c-top-title">
                    <h2>계층교육</h2>
                    <h3>__임원, 팀장, 중간관리자, 주니어, 신입사원들을 위한 계층별 교육</h3>
                </div>
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
    )
}

export default ProgramList;