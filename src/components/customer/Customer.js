import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./customer.css";

function Customer({ Notice }) {
  return (
    <React.Fragment>
      <section className="listSection cf">
        <ul className="listContainer">
          <li className="listItem on">
            <Link to="/notice" component={Notice}>
              공지사항
            </Link>
          </li>
          <li className="listItem">문의하기</li>
        </ul>
        <input type="text" placeholder="Search" className="searchBox focus" />
      </section>
    </React.Fragment>
  );
}

export default Customer;
