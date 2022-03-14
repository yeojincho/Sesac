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
    </div>
  );
}

export default App;
