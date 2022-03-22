import React from "react";
import { NavLink } from "react-router-dom";
import "./customer.css";

function Customer() {
  
  const menuStyle = {
    display: 'block',
    backgroundColor: '#03a65a',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '50px',
  }

  const menuTitle = [
    '공지사항',
    '문의하기',
    '자주 묻는 질문',
    '오시는 길'
  ]

  return (
    <React.Fragment>
      <section className="customer-list-container cf">
        <ul className="customer-list-container">
          <li className="customer-list">
            <NavLink to="/notice" activeStyle={menuStyle}>{menuTitle[0]}</NavLink>
          </li>
          <li className="customer-list">
            <NavLink to="/question" activeStyle={menuStyle}>{menuTitle[1]}</NavLink>
          </li>
          <li className="customer-list">
            <NavLink to="/faq" activeStyle={menuStyle}>{menuTitle[2]}</NavLink>
          </li>
          <li className="customer-list">
            <NavLink to="/visit" activeStyle={menuStyle}>{menuTitle[3]}</NavLink>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Customer;
