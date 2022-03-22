import React from 'react';
import { Link ,useHistory} from 'react-router-dom';
import './notfound.css';

export default function NotFound() {
  let history = useHistory();
  return (
    <div className="error-wrap">
      <div className="error-cont">
        <div className="img"><img src="/images/img_error.png" alt="error" /></div>
        <p className="error-message">
          404 Error<br/>
          페이지를 찾을 수 없습니다.
        </p>
        <p className="error-detail">
          방문하시려는 페이지의 주소가 잘못 입력되었거나,<br/>
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.								
        </p>
        <div className="c-btn-box error-btn">
          <button className="btn-type1" onClick={() => history.goBack()}><span>이전</span></button>
          <button className="btn-type2"><span><Link to="/">메인으로</Link></span></button>
        </div>
      </div>
    </div>
  )
}
