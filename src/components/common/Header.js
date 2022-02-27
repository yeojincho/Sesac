/* 
  화면     : 메인 > 헤더
*/


import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'


export default function Header() {
  return (
    <header className="header-wrapper">
      
      <div className="header-top">
        <div className="inner-box header-inner">
            <h1 className="top-logo"><Link to ="/">엑스퍼트아카데미</Link></h1>
            <div className="top-search">
              <input type="search" />
              <button className="top-search-btn">
                <img src="/images/searchicon.png" alt="search"/>
              </button>
            </div>
            <div className="top-btn">
              <a href="#">로그인</a>
              <a href="">회원가입</a>
              <button>+sitemap</button>
            </div>
        </div>
      </div>{/* 헤더 top */}
      
      <div className="header-bottom">
          <ul className="inner-box gnb">
            <li className="depth1">
              <Link to ="/sample1">sample1</Link>
              <ul class="depth2">
                <li><Link to ="/sample1">sample1</Link></li>
                <li><Link to ="/sample1">sample1</Link></li>
              </ul>
            </li>
            <li className="depth1">
              <Link to ="/sample2">sample2</Link>
              <ul class="depth2">
                <li><Link to ="/sample2">sample2</Link></li>
                <li><Link to ="/sample2">sample2</Link></li>
                <li><Link to ="/sample2">sample2</Link></li>
              </ul>
            </li>
            <li className="depth1">
              <Link to ="/">main</Link>
              <ul class="depth2">
                <li><Link to ="/">main</Link></li>
                <li><Link to ="/test">NotFound페이지</Link></li>
                <li><Link to ="/">main</Link></li>
              </ul>
            </li>
          </ul>
      </div>{/* 헤더 bottom */}

      
    
    </header>
  )
}
