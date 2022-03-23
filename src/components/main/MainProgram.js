import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";

import "./main.css";

export default function MainProgram() {
  /* 프로그램 더보기 Btn  */
  const [programMore, setProgramMore] = useState(false);
  const programMoreFn = () => {
    setProgramMore(true);
    $("#programMoreBtn").hide();
  };

  /* 프로그램 Tab */
  const [tabId, setTabId] = useState(1);

  return (
    <>
      <div className="program-category">
        <div className="main-text-box">
          <span className="eyebrow">과정 카테고리</span>
          <span className="p-title">
            엑스퍼트 전문적인 강사진과 차별화된 교육 프로그램을 제공 합니다.
          </span>

          <ul className="nav-tabs-lg nav nav-tabs">
            <li className="nav-item program-item" onClick={() => setTabId(1)}>
              <a className={tabId === 1 ? "nav-link active" : "nav-link"}>
                개강순
              </a>
            </li>
            <li className="nav-item program-item" onClick={() => setTabId(2)}>
              <a className={tabId === 2 ? "nav-link active" : "nav-link"}>
                계층교육
              </a>
            </li>
            <li className="nav-item program-item" onClick={() => setTabId(3)}>
              <a className={tabId === 3 ? "nav-link active" : "nav-link"}>
                직무역량
              </a>
            </li>
            <li className="nav-item program-item" onClick={() => setTabId(4)}>
              <a className={tabId === 4 ? "nav-link active" : "nav-link"}>DX</a>
            </li>
            <li className="nav-item program-item" onClick={() => setTabId(5)}>
              <a className={tabId === 5 ? "nav-link active" : "nav-link"}>
                진단
              </a>
            </li>
            <li className="nav-item program-item" onClick={() => setTabId(6)}>
              <a className={tabId === 6 ? "nav-link active" : "nav-link"}>
                일반
              </a>
            </li>
            <li className="nav-item program-item" onClick={() => setTabId(7)}>
              <a className={tabId === 7 ? "nav-link active" : "nav-link"}>
                취업
              </a>
            </li>
          </ul>

          {/* <ul className="p-list">
            <li className="active"><a href="#">개강순</a></li>
            <li><a href="#">계층교육</a></li>
            <li><a href="#">직무역량</a></li>
            <li><a href="#">DX</a></li>
            <li><a href="#">진단</a></li>
            <li><a href="#">일반</a></li>
            <li><a href="#">취업</a></li>
          </ul> */}
        </div>
        <div class="tab-content program-contents">
          <div
            className={tabId % 2 === 1 ? "tab-pane active" : "tab-pane"}
          >
            <div class="row">
              <div className="main-program-img">
                <ul className="inner-box program-list">
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_07-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                        <li>HIT</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                        <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_12-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                        
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_10-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                        <li>HIT</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_08-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_15-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                        <li>HIT</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_13-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                        
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_11-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                        <li>HIT</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_14-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  {programMore && (
                    <>
                      <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_06-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정 </p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_12-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_10-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_08-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                    </>
                  )}
                </ul>
              </div>
              <div class="btn-box more">
                <button
                  class="btn-more"
                  id="programMoreBtn"
                  onClick={programMoreFn}
                >
                  <span>더보기</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className={tabId % 2 === 0 ? "tab-pane active" : "tab-pane"}
          >
            <div class="row">
              <div className="main-program-img">
              <ul className="inner-box program-list">
              <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_12-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                        
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_07-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정 </p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_10-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_08-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_15-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_13-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_11-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_14-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  {programMore && (
                    <>
                      <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_07-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정사내강사 양성과정사내강사 양성과정 </p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_12-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_10-min.jpg"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img
                        src="/images/pixabay/KakaoTalk_20220319_225210294_08-min.png"
                        alt="강의"
                      />
                    </div>
                    <div className="item-text">
                      <ul className="item-top">
                        <li>2DAY</li>
                        <li>16시간</li>
                        <li>Live</li>
                      </ul>
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                    </div>
                    <div className="item-img-desc">
                      <p>
                        사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개
                      </p>
                      <div>
                      <Link to="/Curriculum"><span className="viewBtn">상세보기</span></Link>
                        <Link to="/TermsOfUse"><span className="appBtn">과정신청</span></Link>
                      </div>
                    </div>
                  </li>
                    </>
                  )}
                </ul>
              </div>
              <div class="btn-box more">
                <button
                  class="btn-more"
                  id="programMoreBtn"
                  onClick={programMoreFn}
                >
                  <span>더보기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
