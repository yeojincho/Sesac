import React, {useState} from "react";
// import './programDetail.css';
import ViewDetails from '../program/ViewDetails';

export default function ProgramDetail(){
  const [like, setLike] = useState(0);
  return(
        <div className="wrapper inner-box">
            <div className="jobTopDetailpage">
                <div className="left">
                    <div className="detailpageImg">
                        <img src="http://www.excacademy.co.kr/images/banner_img/339P3M9Y20201027164342YE2FXRJI.gif" alt="강의 메인 이미지" />
                    </div>
                    <div className="detailpageTxt">
                        <h3 className="detailpageTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</h3>
                        <div className="detailpageUl">
                            <ul className='subtitle'>
                                <li>강의시간</li>
                                <li>강의장소</li>
                                <li>강의방식</li>
                                <li>교육비</li>
                                <li>일정선택</li>
                            </ul>
                            <ul className='explain'>
                                <li>53DAY 400H (09:00~18:00)</li>
                                <li>엑스퍼트 러닝센터</li>
                                <li>대면</li>
                                <li><strong>0</strong>원</li>
                                <li>
                                    <select name="programSelect" id="program_select">
                                        <option value>::::::::::::::::: 날짜 선택 :::::::::::::::::</option>
                                        <option value="">2022-03-10 (목)</option>
                                        <option value="">2022-03-10 (목)</option>
                                        <option value="">2022-03-10 (목)</option>
                                        <option value="">2022-03-10 (목)</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <div className="btnUl">
                            <ul className="programBtn">
                                <li><a href="#">문의하기</a></li>
                                <li>
                                    <a href="#" onClick={()=>{setLike(like+1)}}><span>{like} &hearts; </span>관심과정</a>
-                               </li>
                                <li><a href="#">과정신청</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <a href='#' className='shareBtn'>
                        <p>공유</p>
                    </a>
                </div>
            </div>
            <div className="jobBottomDetailpage">
                <ul className="category">
                    <li><a href="#">과정개요</a></li>
                    <li><a href="#">과정목표</a></li>
                    <li><a href="#">교육대상</a></li>
                    <li><a href="#">교육대상</a></li>
                    <li><a href="#">교육대상</a></li>
                </ul>
                <div className="contents">
                <ViewDetails />
                </div>
            </div>
        </div>
  )

}