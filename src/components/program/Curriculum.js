import '../common/common.css';
import './curriculum.css';
import ViewDetail from './ViewDetail';

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll"
import $ from 'jquery';
import { CopyToClipboard } from "react-copy-to-clipboard";

function Curriculum(){
    // window 객체에서 현재 url 가져오기 -> 이 데이터로 공유 버튼 클릭 시 주소를 클립보드에 복사
    const currentUrl = window.location.href;

    //좋아요 버튼
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

  //TOP 이동 버튼
    // const [ScrollY, setScrollY] = useState(0);
    // const [BtnStatus, setBtnStatus] = useState(false);

    // const handleBtn = ()=> {
    //     setScrollY(window.pageYOffset);
    //     if(ScrollY > 500) {
    //         // 500 이상이면 버튼이 보이게
    //         setBtnStatus(true);
    //     } else {
    //         // 500 이하면 버튼이 사라지게
    //         setBtnStatus(false);
    // }
    // }

    // const handleTop = () => {
    //     window.scrollTo({
    //         top:0,
    //         behavior: "smooth"
    //     })
    //     setScrollY(0);
    //     setBtnStatus(false);
    // }
    // useEffect(() => {
    //     const watch = () => {
    //         window.addEventListener('scroll', handleBtn)
    //     }
    //     watch();
    //     return () => {
    //         window.removeEventListener('scroll', handleBtn)
    //     }
    // })

    
    
    return(
        <div className="wrapper inner-box">
            <ul class="cont-navi">
                <li><Link to='/'><a href="#none" class="nav-home">HOME</a></Link></li>
                <li><Link to='/program'><a href="#none" class="nav-sub">공개과정</a></Link></li>
                <li><Link to='/programlist'><a href="#none" class="nav-sub">계층교육</a></Link></li>
                <li><span class="nav-sub">교육 상세</span></li>
            </ul>
            {/* { BtnStatus &&<button className="scrollTopBtn" onClick={handleTop}>TOP</button> } */}
            <div className="topDetailpage">
                <div className="left">
                    <div className="detailpageImg">
                        {/* <img src="http://www.excacademy.co.kr/images/banner_img/OVVK751N20210608123726J7PA1AB8.gif" alt="강의 메인 이미지" /> */}
                        <img src="/images/협업.jpg" alt="강의 이미지" />
                    </div>
                    <div className="detailpageTxt">
                        <h3 className="detailpageTitle">사내강사 양성과정</h3>
                        <div className="detailpageUl">
                            <ul className='subtitle'>
                                <li>강의시간</li>
                                <li>강의장소</li>
                                <li>강의방식</li>
                                <li>교육비</li>
                                <li>일정선택</li>
                            </ul>
                            <ul className='explain'>
                                <li>1DAY 8H (09:00~18:00)</li>
                                <li>엑스퍼트 러닝센터</li>
                                <li>비대면</li>
                                <li>290,000원</li>
                                <li>
                                    <div className="c-inp-select-box">
                                        <select name="programSelect" id="program_select">
                                            <option value>::::::::::::::::: 일정 선택 :::::::::::::::::</option>
                                            <option value="">2022-04-08 (금)</option>
                                            <option value="">2022-04-11 (월)</option>
                                            <option value="">2022-04-12 (화)</option>
                                            <option value="">2022-04-13 (수)</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="btnUl">
                            <ul className="programBtn">
                                <li>
                                    <Link to='/question'>
                                        <button>문의하기</button>
                                    </Link>
                                </li>
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
                <div className='right'>
                    <CopyToClipboard text={currentUrl}>
                        <button className='shareBtn' onClick={()=>{alert("클립보드에 복사 완료")}}>
                            공유
                        </button>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="bottomDetailpage">
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
                <div className="contents">
                    <ViewDetail />
                </div>
            </div>
        </div>
    )
}

export default Curriculum;