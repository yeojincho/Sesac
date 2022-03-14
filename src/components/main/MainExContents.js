import React from 'react';
import { useState } from 'react';
import $ from 'jquery';

export default function MainExContents() {
  /* EX컨텐츠 더보기 Btn */ 
  const [exMore,setExMore] = useState(false);
  const exMoreFn = () => {
    setExMore(true);
    $('#exMoreBtn').hide();
  }
  return (
    <div className="inner-box main-excontents">
        <div className="main-text-box">
          <span className="eyebrow">EX 콘텐츠</span>
          <span className="p-title">엑스퍼트아카데미 이벤트와 다양한 콘텐츠를 만나보세요! </span>
          <ul className="p-list">
            <li className="active"><a href="#">전체보기</a></li>
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
            {
              exMore &&
              <>
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
              </>
            }
          </ul>
        </div>
        <div class="btn-box more">
          <button class="btn-more" id="exMoreBtn" onClick={exMoreFn}><span>더보기</span></button>
        </div>
      </div>
  )
}
