import '../common/common.css';
import './curriculum.css';
import ViewDetail from './ViewDetail';

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll"
import $ from 'jquery';

const ScrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Curriculum(){
    const [like, setLike] = useState(0);

    // 탭 스크롤링
    const myRef = useRef(null)
    const executeScroll = () => ScrollToRef(myRef)

    // 탭 상단 고정
    useEffect(()=> {
        $(window).on('scroll',function(){
            const categoryPos=$('.category').position().top;
            const nowScroll=$(window).scrollTop();
            if(nowScroll>categoryPos){
                $('.category').addClass('fix') 
            }else{
                $('.category').removeClass('fix') 
            }
        }) 
    },[])
    
    
    return(
        <div className="wrapper inner-box">
            <div className="topDetailpage">
                <div className="left">
                    <div className="detailpageImg">
                        <img src="http://www.excacademy.co.kr/images/banner_img/OVVK751N20210608123726J7PA1AB8.gif" alt="강의 메인 이미지" />
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
                                <li><button>문의하기</button></li>
                                <li>
                                    <button onClick={()=>{setLike(like+1)}}><span>{like} &hearts; </span>관심과정</button>
-                               </li>
                                <li><button>과정신청</button></li>
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
            <div className="bottomDetailpage">
                <ul className="category">
                    <li><Link activeClass="scrollActive" to="outlineProcess" spy={true}>과정개요</Link></li>
                    <li><Link to="processObjective" spy={true}>과정목표</Link></li>
                    <li><Link to="educationTarget" spy={true}>교육대상</Link></li>
                    <li><Link to="curriculum" spy={true}>커리큘럼</Link></li>
                    <li><Link to="mainTutor" spy={true}>대표강사</Link></li>
                    <li><Link to="applyInfo" spy={true}>접수안내</Link></li>
                </ul>
                <div className="contents">
                    <ViewDetail />
                </div>
            </div>
        </div>
    )
}

export default Curriculum;