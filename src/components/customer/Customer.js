import React, { useState, useEffect } from "react";
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

  return (
    <React.Fragment>
      <section className="customer-list-container cf">
        <ul className="customer-list-container">
          <li className="customer-list">
            <NavLink to="/notice" activeStyle={menuStyle}>공지사항</NavLink>
          </li>
          <li className="customer-list">
            <NavLink to="/question" activeStyle={menuStyle}>문의하기</NavLink>
          </li>
          <li className="customer-list">
            <NavLink to="/faq" activeStyle={menuStyle}>자주 묻는 질문</NavLink>
          </li>
          <li className="customer-list">
            <NavLink to="/visit" activeStyle={menuStyle}>오시는 길</NavLink>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Customer;
