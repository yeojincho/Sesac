import React from "react";
import { useState } from "react";
import $ from "jquery";

export default function MainExContents() {
  /* EX컨텐츠 더보기 Btn */
  const [exMore, setExMore] = useState(false);
  const exMoreFn = () => {
    setExMore(true);
    $("#exMoreBtn").hide();
  };

  /* EX컨텐츠 Tab */
  const [tabId, setTabId] = useState(1);

  return (
    <div className="main-excontents">
      <div className="main-text-box">
        <span className="eyebrow">EX 콘텐츠</span>
        <span className="p-title">
          엑스퍼트아카데미 이벤트와 다양한 콘텐츠를 만나보세요!
        </span>

        <ul className="nav-tabs-lg nav nav-tabs">
          <li className="nav-item program-item" onClick={() => setTabId(1)}>
            <a className={tabId === 1 ? "nav-link active" : "nav-link"}>
              전체보기
            </a>
          </li>
          <li className="nav-item program-item" onClick={() => setTabId(2)}>
            <a className={tabId === 2 ? "nav-link active" : "nav-link"}>
              이벤트
            </a>
          </li>
          <li className="nav-item program-item" onClick={() => setTabId(3)}>
            <a className={tabId === 3 ? "nav-link active" : "nav-link"}>
              과정후기
            </a>
          </li>
          <li className="nav-item program-item" onClick={() => setTabId(4)}>
            <a className={tabId === 4 ? "nav-link active" : "nav-link"}>EX뷰</a>
          </li>
        </ul>
      </div>
      <div class="tab-content program-contents">
        <div
          className={tabId % 2 === 1 ? "tab-pane active" : "tab-pane"}
        >
          <div class="row">
            <div className="main-ex-img">
              <ul className="inner-box ex-list">
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/cts_files/sub/CTS-VZN4T20200324102556.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="	http://www.excacademy.co.kr/cts_files/sub/CTS-G69TF20200221154733.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="	http://www.excacademy.co.kr/cts_files/sub/CTS-GI6C720200904174829.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/cts_files/sub/CTS-HB3KF20200928173048.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="	http://www.excacademy.co.kr/cts_files/sub/CTS-VI9Q02020102311368.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                {exMore && (
                  <>
                    <li className="ex-item">
                      <div className="item-img">
                        <img
                          src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                          alt="이벤트"
                        />
                      </div>
                      <div className="item-text">
                        <p className="item-comment">
                          엑스퍼트아카데미 컨텐츠 소식입니다.
                        </p>
                      </div>
                    </li>
                    <li className="ex-item">
                      <div className="item-img">
                        <img
                          src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                          alt="이벤트"
                        />
                      </div>
                      <div className="item-text">
                        <p className="item-comment">
                          엑스퍼트아카데미 컨텐츠 소식입니다.
                        </p>
                      </div>
                    </li>
                    <li className="ex-item">
                      <div className="item-img">
                        <img
                          src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                          alt="이벤트"
                        />
                      </div>
                      <div className="item-text">
                        <p className="item-comment">
                          엑스퍼트아카데미 컨텐츠 소식입니다.
                        </p>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div class="btn-box more">
              <button class="btn-more" id="exMoreBtn" onClick={exMoreFn}>
                <span>더보기</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={tabId % 2 === 0 ? "tab-pane active" : "tab-pane"}
        >
          <div class="row">
            <div className="main-ex-img">
              <ul className="inner-box ex-list">
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/cts_files/sub/CTS-NINHR2020090317431.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                <li className="ex-item">
                  <div className="item-img">
                    <img
                      src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                      alt="이벤트"
                    />
                  </div>
                  <div className="item-text">
                    <p className="item-comment">
                      엑스퍼트아카데미 컨텐츠 소식입니다.
                    </p>
                  </div>
                </li>
                {exMore && (
                  <>
                    <li className="ex-item">
                      <div className="item-img">
                        <img
                          src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                          alt="이벤트"
                        />
                      </div>
                      <div className="item-text">
                        <p className="item-comment">
                          엑스퍼트아카데미 컨텐츠 소식입니다.
                        </p>
                      </div>
                    </li>
                    <li className="ex-item">
                      <div className="item-img">
                        <img
                          src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                          alt="이벤트"
                        />
                      </div>
                      <div className="item-text">
                        <p className="item-comment">
                          엑스퍼트아카데미 컨텐츠 소식입니다.
                        </p>
                      </div>
                    </li>
                    <li className="ex-item">
                      <div className="item-img">
                        <img
                          src="http://www.excacademy.co.kr/event_files/sub/EC-JCHQP2020020416578.gif"
                          alt="이벤트"
                        />
                      </div>
                      <div className="item-text">
                        <p className="item-comment">
                          엑스퍼트아카데미 컨텐츠 소식입니다.
                        </p>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div class="btn-box more">
              <button class="btn-more" id="exMoreBtn" onClick={exMoreFn}>
                <span>더보기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
