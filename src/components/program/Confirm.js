import '../common/common.css';
import { Link } from "react-router-dom";


function Confirm(){

    return(
        <div class="inner-box complete-page">
            <div class="complete-contents">
                <div class="img"><img src="/images/img_care_03_01.png" alt="완료" /></div>
                <div class="complete-title">신청이 완료되었습니다.</div>
                <p class="complete-desc">교육과정이 정상적으로 신청되었습니다.<br/>결제를 위해 담당자가 연락 드릴 예정 입니다.</p>
            </div>
            <div className="c-btn-box complete-main-btn">
                <Link to='/'>
                    <button className="btn-type2"><span>확인</span></button>
                </Link>
            </div>
        </div>
    )
}

export default Confirm;