import React from 'react';

import './sample.css';

export default function Sample1() {
  return (
    <div className="inner-box" >
      {/* 
          <주의사항>
          1. div만 통째로 들고가면됨
          2. css는 안들고 가도됨(나중에 common.css에 넣을것임)
          3. margin,padding,width,height값 등등은 각자 수정..
          4. 수정시 className에 새로운 class명(남들과 겹치지 않게 유니크한 이름으로 부탁) 추가하고 본인 css에서 수정!
          
          예시)
          <div className="c-top-title 유니크">
          
          .유니크{
            margin: ~
            width:~
          }

      */}


      {/* 00. 상단 페이지 경로 */}
      <ul class="cont-navi">
        <li><a href="#none" class="nav-home">HOME</a></li>
        <li><a href="#none" class="nav-sub">공개과정</a></li>
        <li><a href="#none" class="nav-sub">월간 교육 일정</a></li>
        <li><span class="nav-sub">교육 신청</span></li>
      </ul>

      {/* 01.상단 공통 타이틀 */}
      <div className="c-top-title">
        <h2>타이틀</h2>
        <h3>__서브 타이틀 서브 타이틀 서브 타이틀</h3>
      </div>



      {/* 02.상단 공통 메뉴 1 */}
      <div className="c-cont">
        <div className="c-step">
          <ol>
            <li className="c-on"><span className="c-num">01</span> 메뉴명1</li>
            <li><span className="c-num">02</span> 메뉴명2</li>
            <li><span className="c-num">03</span> 메뉴명3</li>
          </ol>
        </div>
      </div>


      {/* 03.상단 공통 메뉴 2 */}
      <div className="c-menu">
          <ul>
              <li className="c-on"><a href="#none">메뉴명1</a></li>
              <li ><a href="#none">메뉴명2</a></li>
              <li ><a href="#none">메뉴명3</a></li>
              <li ><a href="#none">메뉴명4</a></li>
          </ul>
      </div>
      



      {/* 04. 탭 메뉴1 */}
      <div className="hor-tab-box">
        <ul className="hor-tab">
          <li><a href="#none">탭타이틀1</a></li>
          <li><a href="#none">탭타이틀2</a></li>
          <li><a href="#none" className="c-on">탭타이틀3</a></li>
          <li><a href="#none">탭타이틀4</a></li>
        </ul>
      </div>

      
      {/* 05. 버튼 */}
      <div className="c-btn-box">
        <button className="btn-type1"><span>버튼1</span></button>
        <button className="btn-type2"><span>버튼2</span></button>
        <button className="btn-type3"><span>버튼3</span></button>
      </div>

      <div className="c-btn-box">
        <button className="btn-type1" disabled><span>비활성버튼1</span></button>
        <button className="btn-type2" disabled><span>비활성버튼2</span></button>
        <button className="btn-type3" disabled><span>비활성버튼3</span></button>
      </div>

      <div className="C-btn-box">
        <button className="btn-type1 small"><span>버튼1</span></button>
        <button className="btn-type2 small"><span>버튼2</span></button>
        <button className="btn-type3 small"><span>버튼3</span></button>
      </div>

      <div class="btn-box">
        <button class="btn-write btn-type2 small"><span>이미지버튼</span></button>
      </div>


      {/* 06.페이지네이션 */}
      <div className="cont-list-pagination">
        <span className="first"><img src="/images/ico_pagination_first.png" alt="맨처음으로" /></span>
        <a href="#none" className="prev"><img src="/images/ico_pagination_prev.png" alt="이전 페이지" /></a>
        <ul className="pagination-list">
          <li className="c-on"><a href="#none">1</a></li>
          <li><a href="#none">2</a></li>
          <li><a href="#none">3</a></li>
          <li><a href="#none">4</a></li>
          <li><a href="#none">5</a></li>
          <li><a href="#none">6</a></li>
          <li><a href="#none">7</a></li>
          <li><a href="#none">8</a></li>
          <li><a href="#none">9</a></li>
          <li><a href="#none">10</a></li>
        </ul>
        <a href="#none" className="next"><img src="/images/ico_pagination_next.png" alt="다음 페이지" /></a>
        <a href="#none" className="last"><img src="/images/ico_pagination_last.png" alt="맨마지막으로" /></a>
      </div>


      {/* 07.체크박스  ,  input과 label의 id 일치시켜야함*/}
      <div className="c-inp-chk-box">
        <input type="checkbox" id="dcList01" className="inp-chk" />
        <label htmlFor="dcList01">클릭해보세요</label>
      </div>



      {/* 08.라디오버튼 , 같은 그룹의 라디오버튼들은 name 일치시켜야함*/}
      <ul class="radio-set">
          <li>
            <div class="inp-radio-box">
              <input type="radio" id="gsRdo0" class="ipt-rdo" name="gsRdo" />
              <label htmlFor="gsRdo0"><span>선택1</span></label>
            </div>
          </li>
          <li>
            <div class="inp-radio-box">
              <input type="radio" id="gsRdo1" class="ipt-rdo" name="gsRdo" />
              <label htmlFor="gsRdo1"><span>선택2</span></label>
            </div>
          </li>
          <li>
            <div class="inp-radio-box">
              <input type="radio" id="gsRdo2" class="ipt-rdo" name="" disabled />
              <label htmlFor="gsRdo2"><span>비활성화.input에 disabled만 붙임</span></label>
            </div>
          </li>
          <li>
            <div class="inp-radio-box">
              <input type="radio" id="gsRdo3" class="ipt-rdo" name="" checked />
              <label htmlFor="gsRdo3"><span>미리체크.innput에 checked만 붙임</span></label>
            </div>
          </li>
        </ul>



        {/* 09. 서치 input */}
        <div class="date-search-option">
          <div class="item-search">
            <input type="text" placeholder="검색" class="ipt-search" />
            <a href="#none" class="btn-search">검색</a>
          </div>
        </div>



        {/* 10. select 박스 ,  width 각자 수정*/}
        <div class="c-inp-select-box">
          <select>
            <option>전체보기</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>


        {/* 11. 완료 페이지 */}
        <div class="inner-box complete-page">
          <div class="complete-contents">
            <div class="img"><img src="/images/img_care_03_01.png" alt="완료" /></div>
            <div class="complete-title">신청이 완료되었습니다.</div>
            <p class="complete-desc">서브내용서브내용<br/>서브내용서브내용서브내용서브내용서브내용서브내용</p>
          </div>
          <div className="c-btn-box complete-main-btn">
            <button className="btn-type2"><span>메인으로</span></button>
          </div>
        </div>




    













    </div>
  )
}
