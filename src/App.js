import "./components/common/common.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./components/main/Main";
import NotFound from "./components/common/NotFound";
import Sample1 from "./components/sample/Sample1";
import Sample2 from "./components/sample/Sample2";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Switch>
        {/* 메인 */}
        <Route exact path="/" component={Main}>
          <Main />
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
