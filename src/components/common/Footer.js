/* 
  화면     : 메인 > 푸터
*/


import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper" style={{height:'150px'}}>
        <div className="inner-box footer-inner">
          <h1>footer</h1>
          <address>Copyright ©️ Seseac Corp. All Rights Reserved</address>
        </div>
    </footer>
  )
}
