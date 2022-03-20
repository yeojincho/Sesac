import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll"
import './programDetail.css';
import JobViewDetail from './JobViewDetail';
import JobHeader from './JobHeader';
import $ from 'jquery';

const ScrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function ProgramDetail(){

    const [like, setLike] = useState(0);

    // 탭 스크롤링
    const myRef = useRef(null)
    const executeScroll = () => ScrollToRef(myRef)


  //스크롤시 탭메뉴 고정
  useEffect(()=> {
    $(window).on('scroll',()=>{
        const categoryPos=$('.category').position().top;
        const nowScroll=$(window).scrollTop();
         if(nowScroll>categoryPos){
             $('.category').addClass('fix') 
         }else{
              $('.category').removeClass('fix') 
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
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  const handleBtn = ()=> {
    setScrollY(window.pageYOffset);
    if(ScrollY > 500) {
      // 500 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 500 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  const handleTop = () => {
      window.scrollTo({
          top:0,
          behavior: "smooth"
      })
      setScrollY(0);
      setBtnStatus(false);
  }
  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleBtn)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleBtn)
    }
  })


  return(
        <div className="wrapper inner-box">
            <JobHeader />
            { BtnStatus &&<button className="scrollTopBtn" onClick={handleTop}>TOP</button> }
            <div className="jobTopDetailpage">
                <div className="left">
                    <div className="detailpageImg">
                        <img src="/images/job_programThumnail.png" alt="강의 메인 이미지" />
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
            <div className="jobBottomDetailpage">
                <ul className="category">
                    <li ><Link activeClass="scrollActive" to="outlineProcess" spy={true}>과정개요</Link></li>
                    <li><Link to="processObjective" spy={true}>과정목표</Link></li>
                    <li><Link to="educationTarget" spy={true}>교육대상</Link></li>
                    <li><Link to="curriculum" spy={true}>커리큘럼</Link></li>
                    <li><Link to="mainTutor" spy={true}>대표강사</Link></li>
                    <li><Link to="applyInfo" spy={true}>접수안내</Link></li>
                </ul>
            </div>
            <div className="contents">
                    <JobViewDetail />
                </div>
        </div>
    )

}