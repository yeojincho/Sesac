import '../common/common.css';
import './confirm.css';

import { Route, Router, Switch ,useHistory, Link } from 'react-router-dom';

import Main from './components/main/Main';

function Confirm(){    
    let history = useHistory();

    return(
        <div className="wrapper inner-box">
            <div className="textBox">
                <div className="text">
                    교육과정이 정상적으로 신청되었습니다.
                    결제를 위해 담당자가 연락 드릴 예정 입니다.
                    <button onClick={()=>{history.push('/');}}>확인</button>
                    <Route exact path="/" component={Main}></Route>
                </div>
            </div>
        </div>
    )
}

export default Confirm;