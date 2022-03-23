import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import $ from "jquery";
import "./Recruit.css";
import "./Partnership.css";

function Partnership() {
  const [file, setFile] = useState(null);
  const fileFn = (file) => {
    setFile(file[0].name);
    $(".file-delete").addClass("on");
  };
  const removeFileFn = () => {
    $(".file-delete").removeClass("on");
    $("#fileInput").val("");
  };

  return (
    <>
      <div className='orderPage-bigTitle'>
        <div className='inner-box'>
          <h3 className='orderPage-h3'>
            <b>제휴제안</b>
          </h3>
          <span className='orderPage-span'>
            __엑스퍼트아카데미와 함께할 수 있는 컨텐츠/교육 서비스 관련 다양한
            제안을 기다립니다.
          </span>
        </div>
      </div>
      <div className='recruit-wrap inner-box'>
        <ul class='cont-navi'>
          <li>
            <a href='#none' class='nav-home'>
              HOME
            </a>
          </li>
          <li>
            <span class='nav-sub'>아카데미</span>
          </li>
          <li>
            <span class='nav-sub'>제휴제안</span>
          </li>
        </ul>
        <div className='recruit-box'>
          <img className='recruit-Img' src='/images/company.png' />
          <div className='cont-form-box'>
            <ul className='form-list'>
              <li>
                <p className='form-title'>
                  <span className='ess'>회사(기관)명</span>
                </p>
                <div className='form-cont'>
                  <div className='count-input inp'>
                    <input
                      type='text'
                      className='ipt-txt'
                      placeholder='회사(기관)명을 입력해주세요.'
                    />
                  </div>
                </div>
              </li>
              <li>
                <p className='form-title'>
                  <span className='ess'>제안자명</span>
                </p>
                <div className='form-cont'>
                  <div className='count-input inp'>
                    <input
                      type='text'
                      className='ipt-txt'
                      placeholder='제안자명을 입력해주세요.'
                    />
                  </div>
                </div>
              </li>
              <li>
                <p className='form-title'>
                  <span className='ess'>연락처</span>
                </p>
                <div className='form-cont'>
                  <div className='count-input inp'>
                    <input
                      type='text'
                      className='ipt-txt'
                      placeholder='연락처 입력해주세요.'
                    />
                  </div>
                </div>
              </li>
              <li>
                <p className='form-title'>
                  <span className='ess'>이메일</span>
                </p>
                <div className='form-cont'>
                  <div className='count-input inp'>
                    <input
                      type='text'
                      className='ipt-txt'
                      placeholder='이메일 입력해주세요.'
                    />
                  </div>
                </div>
              </li>
              <li>
                <p className='form-title'>
                  <span>제안 내용</span>
                </p>
                <div className='form-cont'>
                  <div className='count-input ta'>
                    <textarea
                      id='title1'
                      title='내용'
                      placeholder='제안 내용을 입력해주세요.'
                    ></textarea>
                  </div>
                </div>
              </li>
              <li>
                <p className='form-title'>
                  <span>제안서 첨부</span>
                </p>
                <div className='form-cont'>
                  <div className='upload-box'>
                    <div className='file-upload'>
                      <input
                        type='text'
                        className='ipt-upload'
                        placeholder='파일을 선택해 주세요.'
                        title='첨부파일'
                        readonly=''
                        id='fileInput'
                        value={file}
                      />
                      <input
                        type='file'
                        id='file1'
                        className='ipt-file'
                        onChange={(e) => fileFn(e.target.files)}
                        multiple='multiple'
                      />
                      <label htmlFor='file1' className='btn-file'>
                        파일선택
                      </label>
                      <button className='file-delete' onClick={removeFileFn}>
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className='form-description type2'>
              첨부된 제안서는 돌려주지 않습니다.
            </div>
            <Link to='/Partnership/complete'>
              <div className='c-btn-box'>
                <button className='btn-type2'>
                  <span>제안서 보내기</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Partnership;
