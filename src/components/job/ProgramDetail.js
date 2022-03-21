import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll"
import './programDetail.css';
import JobViewDetail from './JobViewDetail';
import JobHeader from './JobHeader';
import $ from 'jquery';



export default function ProgramDetail(){

    const [like, setLike] = useState(0);



  //스크롤시 탭메뉴 고정
  useEffect(()=> {
    $(window).on('scroll',()=>{
        const categoryPos=$('.category, .bottomSelectFix').position().top;
        const nowScroll=$(window).scrollTop();
        if(nowScroll>categoryPos){
            $('.category, .bottomSelectFix').addClass('fix') 
        }else{
            $('.category, .bottomSelectFix').removeClass('fix') 
        }
    }) 
  },[])

 
  // 스크롤시 해당 탭메뉴 색 변경
  useEffect(()=> {
      $(window).on('scroll',()=>{
        const nowScroll=$(window).scrollTop();
        var idx
        if(nowScroll>=0 && nowScroll<700){idx=0}
        if(nowScroll>=700 && nowScroll<1400){idx=1}
        if(nowScroll>=1400 && nowScroll<1800){idx=2}
        if(nowScroll>=1800 && nowScroll<2500){idx=3}
        if(nowScroll>=2500 && nowScroll<3200){idx=4}
        if(nowScroll>=3200 && nowScroll<4000){idx=5}

        $('.category li').eq(idx).addClass('scrollOn')
        $('.category li').eq(idx).siblings().removeClass('scrollOn')
      })
  },[])

  return(
        <div className="inner-box programDetailBox">
            <JobHeader />
            {/* { BtnStatus &&<button className="scrollTopBtn" onClick={handleTop}>TOP</button> } */}
            <div className="jobTopDetailpage">
                <div className="left">
                    <div className="detailpageImg">
                    <img src="/images/협업.jpg" alt="강의 이미지" />
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
                                        <option value>::::::::::::::::: 일정 선택 :::::::::::::::::</option>
                                        <option value="">2022-04-08 (금)</option>
                                        <option value="">2022-04-11 (월)</option>
                                        <option value="">2022-04-12 (화)</option>
                                        <option value="">2022-04-13 (수)</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <div className="btnUl">
                            <ul className="programBtn">
                                <li className='jobShareBtn'>
                                <a href='#'>공유</a>
                                </li>
                                <li><button>문의하기</button></li>
                                <li>
                                <button onClick={()=>{setLike(like+1); alert("좋아요 등록 완료")}}><span>{like} &hearts; </span>관심과정</button>
                                </li>
                                <li>
                                    <Link to="/TermsOfUse">
                                        <button>과정신청</button>
                                    </Link>
                                </li>                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobBottomDetailpage">
                <ul className="category">
                <li><ScrollLink activeClass="scrollActive" to="outlineProcess" spy={true}>과정개요</ScrollLink></li>
                    <li><ScrollLink to="processObjective" spy={true}>과정목표</ScrollLink></li>
                    <li><ScrollLink to="educationTarget" spy={true}>교육대상</ScrollLink></li>
                    <li><ScrollLink to="curriculum" spy={true}>커리큘럼</ScrollLink></li>
                    <li><ScrollLink to="mainTutor" spy={true}>대표강사</ScrollLink></li>
                    <li><ScrollLink to="applyInfo" spy={true}>접수안내</ScrollLink></li>
                </ul>
                <div className="bottomSelectFix">
                    <select name="programSelect" id="program_select">
                        <option value>::::::::::::::::: 일정 선택 :::::::::::::::::</option>
                        <option value="">2022-04-08 (금)</option>
                        <option value="">2022-04-11 (월)</option>
                        <option value="">2022-04-12 (화)</option>
                        <option value="">2022-04-13 (수)</option>
                    </select>
                    <Link to="/TermsOfUse">
                        <button>과정신청</button>
                    </Link>
                </div>
            </div>
            <div className="contents">
                    <JobViewDetail />
                </div>
        </div>
    )

}