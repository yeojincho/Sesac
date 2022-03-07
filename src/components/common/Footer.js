/* 
  화면     : 메인 > 푸터
*/


import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper" >
        <div className="inner-box footer-inner">
          <div className="footer-top">
            <ul className="footer-link-list">
               <li><a href="#">아카데미</a></li> 
               <li><a href="#">위치</a></li> 
               <li><a href="#">개인정보취급방침</a></li> 
               <li><a href="#">이메일무단수집거부</a></li> 
               <li><a href="#">인재채용</a></li> 
               <li><a href="#">고객센터</a></li> 
            </ul>
          </div>{/* 푸터 top */}
          <div className="footer-middle">
            <div className="footer-right-box">
              <div className="info-top">
                <p><span>주소 | </span> 서울특별시 송파구 중대로121 롯데캐슬파인힐 2층(우편번호:05718)</p>
                <p><span>전화 | </span> 02)2152-3915~4 /3934 (평일 09:00 ~ 18:00)</p>
                <p><span>메일 | </span> open@exc.co.kr</p>
                <p><span>개인정보관리책임자 | </span> 김세환</p>
              </div>
              <div className="info-bottom">
                <p><span>사업자등록번호 : 116-81-48332</span></p>
                <p><span>업체명 : 주식회사 엑스퍼트컨설팅</span></p>
              </div>
            </div>
            <div className="footer-left-box">
              <div className="info-top">
                <p>입금계좌</p>
                <p>하나은행, 예금주 (주)엑스퍼트컨설팅</p>
                <p>191-890005-76004</p>
              </div>
              <div className="info-bottom">
                <div className="sns-box">
                  <img src="/images/main/ico_facebook.png" alt="페이스북" />
                  <img src="/images/main/ico_youtube.png" alt="유튜브" />
                  <img src="/images/main/ico_instagram.png" alt="인스타그램" />
                </div>
                <div className="slt-box">
                  <select>
                    <option value="패밀리사이트" hidden>패밀리사이트</option>
                    <option value="어쩌고">어쩌고</option>
                    <option value="저쩌고">저쩌고</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="footer-logo">
              <img src="/images/logo_gray.png" alt="로고" />
            </div>
          </div>{/* 푸터 middel */}
          <div className="footer-bottom">
          </div>{/* 푸터 bottom */}       
          {/* <address>Copyright ©️ Seseac Corp. All Rights Reserved</address> */}
        </div>
    </footer>
  )
}
