import React from "react";
import { Link } from "react-router-dom";
import "./program-list.css";
import MainProgram from '../main/MainProgram';

function ProgramList(){
    
    
    return(
        <div className="wrapper inner-box">
            <div className="listSection">
                <h2 className='mainTitle'>계층교육</h2>
                <p className='subTitle'>임원, 팀장, 중간관리자, 주니어, 신입사원들을 위한 계층별 교육</p>
                {/* <ul className="btn">
                    <li><button>대면교육</button></li>
                    <li><button>비대면 교육</button></li>
                    <li><button>과정문의</button></li>
                </ul> */}
            </div>
            <MainProgram />
        </div>
    )
}

export default ProgramList;