import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/common/common.css";

import MobileLayout from "./components/common/mobile/MobileLayout";
import PCLayout from "./components/common/PCLayout";

function App({ sessionLogin }) {
  /* 로그인 세션 확인 */
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    sessionLogin === null ? setIsLogin(false) : setIsLogin(true);
  });

  /* 반응형 웹 */
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="wrapper">
      {isMobile ? (
        <MobileLayout isLogin={isLogin} isMobile={isMobile} />
      ) : (
        <PCLayout isLogin={isLogin} isMobile={isMobile} />
      )}
    </div>
  );
}

export default App;
