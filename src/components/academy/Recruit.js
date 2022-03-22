import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import $ from "jquery";
import "./Recruit.css";

function Recruit() {
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
        <h3 className='orderPage-h3'>
          <b>인재채용</b>
        </h3>
        <span className='orderPage-span'>
          __엑스퍼트아카데미는 실력있는 강사님과 교육 전문 매니저를 선발 합니다.
        </span>
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
            <span class='nav-sub'>인재채용</span>
          </li>
        </ul>
        <div className='recruit-box'>
          <img className='recruit-lectureImg' src='/images/lecture1.png' />
          <div className='cont-form-box'>
            <ul className='form-list'>
              <li>
                <p className='form-title'>
                  <span className='ess'>지원자명</span>
                </p>
                <div className='form-cont'>
                  <div className='count-input inp'>
                    <input
                      type='text'
                      className='ipt-txt'
                      placeholder='이름을 입력해주세요.'
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
                      placeholder='연락처를 입력해주세요.'
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
                      placeholder='이메일을 입력해주세요.'
                    />
                  </div>
                </div>
              </li>
              <li>
                <p className='form-title'>
                  <span className='ess'>지원 분야</span>
                </p>
                <div className='form-cont'>
                  <ul class='radio-set'>
                    <li>
                      <div class='inp-radio-box'>
                        <input
                          type='radio'
                          id='gsRdo0'
                          class='ipt-rdo'
                          name='gsRdo'
                        />
                        <label htmlFor='gsRdo0'>
                          <span>강사</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class='inp-radio-box'>
                        <input
                          type='radio'
                          id='gsRdo1'
                          class='ipt-rdo'
                          name='gsRdo'
                        />
                        <label htmlFor='gsRdo1'>
                          <span>매니저</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p className='form-title'>
                  <span>주요 역량</span>
                </p>
                <div className='form-cont'>
                  <div className='count-input ta'>
                    <textarea
                      id='title1'
                      title='내용'
                      placeholder='주요 역량 내용을 입력해주세요.'
                    ></textarea>
                  </div>
                </div>
              </li>
              <li>
                <p className='form-title'>
                  <span>이력서 첨부</span>
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
              제출된 서류는 반환하지 않으며 이력서 기재사항과 제출된 서류에
              사실과 다르게 기재된 사항이 있을 경우 합격 취소 등 불이익을 받을
              수 있습니다.
            </div>
            <Link to='/Recruit/complete'>
              <div className='c-btn-box'>
                <button className='btn-type2'>
                  <span>등록</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Recruit;
