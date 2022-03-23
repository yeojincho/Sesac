import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import MHeader from "./MHeader";
import MFooter from "./MFooter";
import Main from "../../main/Main";
import Menu from "./Menu";
import Join from "../../member/Join";
import JoinForm from "../../member/JoinForm";
import JoinComplete from "../../member/JoinComplete";

// 취업과정
import Job from "../../job/Job";
import JobIntro from "../../job/JobIntro";
import JobRecruit from "../../job/JobRecruit";
import ProgramDetail from "../../job/ProgramDetail";

//아카데미
import Introduce from "../../academy/Introduce/Introduce";
import DetailPg from "../../academy/DetailPg";
import OrderPage from "../../academy/OrderPage";
import Partnership from "../../academy/Partnership";
import PartmershopComplete from "../../academy/PartmershopComplete";
import Recruit from "../../academy/Recruit";
import RecruitComplete from "../../academy/RecruitComplete";
import Hrstore from "../../academy/HrStore";
import TeacherInfo from "../../academy/TeacherInfo";

// 고객센터
import Notice from "../../customer/Notice";
import Question from "../../customer/Question";
import Faq from "../../customer/Faq";
import Visit from "../../customer/visit";
import WritingQuestion from "../../customer/WritingQuestion";
import QuestionView from "../../customer/QuestionView";
import Management from "../../mypage/Management";
import AccountWithdrawal from "../../mypage/ AccountWithdrawal";
import ChangePw from "../../mypage/ChangePw";
import MyClassList from "../../mypage/MyClassList";
import RegiConfirm from "../../mypage/RegiConfirm";
import SendPage from "../../academy/SendPages/SendPages";

/* 
  신나는 반응형 웹 만들기
  1. 구조가 PC랑 너무 다르면 js새로 파는게 좋을듯^^ (css도 당연히 새로만들어야겠죠)
  2. 나는 PC에 쓰던거 그대로 쓸거다!크기만 좀 줄이면 된다! 하면 css에 분리시켜주면됨.아래참조

  @media screen and (min-width:768px){ 
    PC용 CSS는 여기에
  }
  @media screen and (max-width:767px){
    Mobile용 CSS는 여기에
  }

*/
export default function MobileLayout({ isMobile, isLogin }) {
  /* 전체 메뉴 팝업 */
  const [MenuPopOpen, setMenuPopOpen] = useState(false);
  const openMenuPopFn = () => setMenuPopOpen(true);
  const closeMenuPopFn = () => setMenuPopOpen(false);

  return (
    <>
      {!MenuPopOpen ? (
        <>
          <MHeader open={openMenuPopFn} />
          <Switch></Switch>
          <Route
            exact
            path="/"
            render={(props) => <Main isMobile={isMobile} {...props} />}
          ></Route>
          {/* 메인 */}
          {/* 회원가입 */}
          <Route exact path="/join" component={Join}></Route>
          <Route exact path="/join/form/:type" component={JoinForm}></Route>
          <Route exact path="/join/complete" component={JoinComplete}></Route>
          {/* 공개과정 */}
          {/* 취업과정 */}
          <Route exact path="/job" component={Job}></Route>
          <Route exact path="/jobIntro" component={JobIntro}></Route>
          <Route exact path="/jobRecruit" component={JobRecruit}></Route>
          <Route exact path="/programDetail" component={ProgramDetail}></Route>
          {/* Ex콘텐츠 */}
          {/* 고객센터 */}
          <Route exact path="/notice" component={Notice}></Route>
          <Route exact path="/question" component={Question}></Route>
          <Route exact path="/writing" component={WritingQuestion}></Route>
          <Route exact path="/question/:id" component={QuestionView}></Route>
          <Route exact path="/faq" component={Faq}></Route>
          <Route exact path="/visit" component={Visit}></Route>
          {/* 아카데미 */}
          <Route exact path="/introduce" component={Introduce}></Route>
          <Route exact path="/hrstore" component={Hrstore}></Route>
          <Route exact path="/OrderPage" component={OrderPage}></Route>
          <Route exact path="/detail" component={DetailPg}></Route>
          <Route exact path="/Partnership" component={Partnership}></Route>
          <Route
            exact
            path="/Partnership/complete"
            component={PartmershopComplete}
          ></Route>
          <Route exact path="/Recruit" component={Recruit}></Route>
          <Route exact path="/sendpage" component={SendPage}></Route>
          <Route exact path="/teacherinfo" component={TeacherInfo}></Route>
          <Route
            exact
            path="/Recruit/complete"
            component={RecruitComplete}
          ></Route>
          {/* 마이페이지 */}
          <Route exact path="/manage" component={Management}></Route>
          <Route
            exact
            path="/manage/withdrawal"
            component={AccountWithdrawal}
          ></Route>
          <Route exact path="/changepw" component={ChangePw}></Route>
          <Route exact path="/classlist" component={MyClassList}></Route>
          <Route exact path="/confirmclass" component={RegiConfirm}></Route>

          <MFooter />
        </>
      ) : (
        <Menu close={closeMenuPopFn} isLogin={isLogin} />
      )}
    </>
  );
}
