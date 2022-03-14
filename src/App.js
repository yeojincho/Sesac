<<<<<<< HEAD
import "./components/common/common.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./components/main/Main";
import NotFound from "./components/common/NotFound";
import ChangePw from "./components/mypage/ChangePw";
import RegiConfirm from "./components/mypage/RegiConfirm";
import MyClassList from "./components/mypage/MyClassList";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Switch>
        {/* 메인 */}
        <Route exact path="/" component={Main}>
          <Main />
        </Route>
        <Route exact path="/myclass" component={MyClassList}>
          <MyClassList />
        </Route>
        <Route exact path="/confirm" component={RegiConfirm}>
          <RegiConfirm />
        </Route>
        <Route exact path="/change" component={ChangePw}>
          <ChangePw />
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
=======

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import "bootstrap/dist/css/bootstrap.min.css";
import './components/common/common.css'


import MobileLayout from './components/common/mobile/MobileLayout';
import PCLayout from './components/common/PCLayout';



function App({sessionLogin}) {
  /* 로그인 세션 확인 */
  const [isLogin,setIsLogin] = useState(false);
  useEffect(() => {
    sessionLogin === null ?  setIsLogin(false) : setIsLogin(true);
  })

  /* 반응형 웹 */
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <div className="wrapper">
      { isMobile ? <MobileLayout isLogin={isLogin} isMobile={isMobile} /> : <PCLayout isLogin={isLogin} isMobile={isMobile} /> }
>>>>>>> ec0c226c2aa97352125425c500d232c05cee5d7a
    </div>
  );
}

export default App;
