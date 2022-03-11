import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/common/common.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./components/main/Main";
import NotFound from "./components/common/NotFound";
import Sample1 from "./components/sample/Sample1";
import Sample2 from "./components/sample/Sample2";
import Join from "./components/member/Join";
import JoinForm from "./components/member/JoinForm";
import JoinComplete from "./components/member/JoinComplete";

function App({ sessionLogin }) {
  /* 로그인 세션 확인 */
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    sessionLogin === null ? setIsLogin(false) : setIsLogin(true);
  });

  return (
    <div className="wrapper">
      <Header isLogin={isLogin} />

      <Switch>
        {/* 메인 */}
        <Route exact path="/" component={Main}>
          <Main />
        </Route>
        {/* 회원가입 */}
        <Route exact path="/join" component={Join}>
          <Join />
        </Route>
        <Route exact path="/join/form" component={JoinForm}>
          <JoinForm />
        </Route>
        <Route exact path="/join/complete" component={JoinComplete}>
          <JoinComplete />
        </Route>
        <Route exact path="/sample1" component={Sample1}>
          <Sample1 />
        </Route>
        <Route exact path="/sample2" component={Sample2}>
          <Sample2 />
        </Route>

        {/* 공개과정 */}

        {/* 취업과정 */}

        {/* Ex콘텐츠 */}

        {/* 고객센터 */}

        {/* 아카데미 */}

        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
