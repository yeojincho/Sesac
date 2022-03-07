import React from 'react'
import $ from 'jquery';

export default function MainContents() {
   /* 프로그램 더보기 Btn  */
   const programMoreFn = () => {
    $('.program-item').show();
    $('#programMoreBtn').hide();
  }
  /* EX컨텐츠 더보기 Btn */ 
  const exMoreFn = () => {
    $('.ex-item').show();
    $('#exMoreBtn').hide();
  }

  return (
    <>
    <div className="inner-box program-category">
        <div className="main-text-box">
          <span className="eyebrow">과정 카테고리</span>
          <span className="p-title">엑스퍼트 전문적인 강사진과 차별화된 교육 프로그램을 제공 합니다.</span>
          <ul className="p-list">
            <li className="on"><a href="#">개강순</a></li>
            <li><a href="#">계층교육</a></li>
            <li><a href="#">직무역량</a></li>
            <li><a href="#">DX</a></li>
            <li><a href="#">진단</a></li>
            <li><a href="#">일반</a></li>
            <li><a href="#">취업</a></li>
          </ul>
        </div>
        <div className="main-program-img">
          <ul className="inner-box program-list">
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/09ZPMCVO20201020084210UKSFGH79.gif" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>

              <li className="program-item" style={{display:'none'}}>
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/09ZPMCVO20201020084210UKSFGH79.gif" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item" style={{display:'none'}}>
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text" >
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item" style={{display:'none'}}>
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item" style={{display:'none'}}>
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
          </ul>
        </div>
        <div class="btn-box more">
          <button class="btn-more" id="programMoreBtn" onClick={programMoreFn}><span>더보기</span></button>
        </div>
      </div>

      <div className="inner-box main-excontents">
        <div className="main-text-box">
          <span className="eyebrow">EX 콘텐츠</span>
          <span className="p-title">엑스퍼트아카데미 이벤트와 다양한 콘텐츠를 만나보세요! </span>
          <ul className="p-list">
            <li className="on"><a href="#">전체보기</a></li>
            <li><a href="#">이벤트</a></li>
            <li><a href="#">과정후기</a></li>
            <li><a href="#">EX뷰</a></li>
          </ul>
        </div>
        <div className="main-ex-img">
          <ul className="inner-box ex-list">
            <li className="ex-item">
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
            <li className="ex-item">
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/cts_files/sub/CTS-NINHR2020090317431.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
            <li className="ex-item">
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
            <li className="ex-item">
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
            <li className="ex-item">
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
            <li className="ex-item">
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
            <li className="ex-item" style={{display:'none'}}>
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
            <li className="ex-item" style={{display:'none'}}>
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
            <li className="ex-item" style={{display:'none'}}>
              <div className="item-img">
                <img src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif" alt="이벤트" />
              </div>
              <div className="item-text">
                <p className="item-comment">엑스퍼트아카데미 컨텐츠 소식입니다.</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="btn-box more">
          <button class="btn-more" id="exMoreBtn" onClick={exMoreFn}><span>더보기</span></button>
        </div>
      </div>
      </>
  )
}
