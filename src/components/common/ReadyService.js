import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

export default function ReadyService() {
  return (
    <div className="error-wrap">
      <div className="error-cont">
        <div className="img"><img src="/images/img_error.png" alt="error" /></div>
        <p className="error-message">
          서비스 준비중
        </p>
        <p className="error-detail">
						더 나은 서비스 제공을 위해  준비하고 있습니다. 빠른 시일내에 서비스가<br/>
						정상 운영되도록 최선을 다하겠습니다. 감사합니다.															
        </p>
        <p className="info-message"><strong>현재 서비스 준비중입니다.</strong></p>
        <div className="c-btn-box service-btn">
          <button className="btn-type2"><span><Link to="/">메인으로</Link></span></button>
        </div>
      </div>
    </div>
  )
}
