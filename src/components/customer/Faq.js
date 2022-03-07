/*customer > FQA 페이지 */

import React from "react";
import './faq.css'
import FaqAcco from './FaqAcco';


export default function Faq() {
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
            <li><a href="/faq">자주 묻는 질문</a></li>
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

        <FaqAcco />
        
        </div>
    )
}