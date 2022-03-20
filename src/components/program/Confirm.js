import '../common/common.css';
import './confirm.css';
import { Link } from "react-router-dom";


function Confirm(){

    return(
        <div className="wrapper inner-box">
            <div className="textBox">
                <div className="text">
                    <p className='confirmTxt'>
                        교육과정이 정상적으로 신청되었습니다.
                        결제를 위해 담당자가 연락 드릴 예정 입니다.
                    </p>
                    <Link to="/"><button className='confirmBtn'>확인</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Confirm;