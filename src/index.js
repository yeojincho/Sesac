import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/modules/index";
import { CookiesProvider } from 'react-cookie';


const store = createStore(rootReducer);

/* 로그인 세션 */
const sessionLogin = sessionStorage.getItem("user_id");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
            <ScrollToTop />
            <App sessionLogin={sessionLogin} />
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
