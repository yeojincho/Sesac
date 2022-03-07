/*customer > FQA 페이지 */

import React from "react";
import './fqa.css'


export default function Fqa() {
    return(
        <div className="wrapper inner-box">
            <div className="title">
                <h2>고객센터</h2>
                <h3>__무엇이든 물어보세요.</h3>
            </div>
        <div className="menu">
        <ul className="menuList">
            <li><a href="#">공지사항</a></li>
            <li><a href="#">문의하기</a></li>
            <li><a href="/fqa">자주 묻는 질문</a></li>
            <li><a href="/visit">오시는 길</a></li>
        </ul>
        </div>{/* e:menu */}
        <div className="searchBar">
            <div className="searchBox">
                <input type="search" placeholder="Search" className="searchBoxInput" title="검색어" />
            </div>    
        </div>{/* e: searchbar */}
        <div className="subMenuBox">
            <ul className="subMenuList">
                <li><a href="#">회원정보</a></li>
                <li><a href="#">결제관련</a></li>
                <li><a href="#">환불규정</a></li>
                <li><a href="#">신청/취소</a></li>
                <li><a href="#">기타</a></li>
            </ul>
        </div>{/* e: submenu */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Q. 결제방법은 어떤 것들이 있을까요?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Q. 결제방법은 어떤 것들이 있을까요?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Q. 결제방법은 어떤 것들이 있을까요?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        
        </div>
    )
}