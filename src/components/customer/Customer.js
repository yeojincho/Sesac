import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./customer.css";

function Customer() {
    const [ currentClick, setcurrentClick ] = useState(null);
    const [ prevClick, setPrevClick ] = useState(null);

    const handleClick = (e) => {
      setcurrentClick(e.target.id);
    };

    useEffect(
        (e) => {
          if (currentClick !== null) {
            let current = document.getElementById(currentClick);
            current.classList.add('on');
          }
          if (prevClick !== null) {
            let prev = document.getElementById(prevClick);
            prev.classList.remove('on');
          }
          setPrevClick(currentClick);
                  
        },[currentClick]);


  return (
    <React.Fragment>
      <section className="customerListSection cf">
        <ul className="customerListContainer">
          <li id = "menu1" onClick={ handleClick } className="customerList">
            <Link to= "/notice">                
                공지사항                
            </Link>       
          </li>
          <li id = "menu2" onClick={ handleClick } className="customerList">
           <Link to= "/question"> 
                문의하기
            </Link> 
          </li>
          <li id = "menu3" onClick={ handleClick } className="customerList">
            <Link to= "/faq"> 
                자주 묻는 질문
              </Link>  
          </li>
          <li id = "menu4" onClick={ handleClick } className="customerList">
          <Link to= "/visit"> 
                오시는 길
          </Link>  
          </li>
        </ul>
        <input type="text" placeholder="Search" className="searchBox focus" />
      </section>
    </React.Fragment>
  );
}

export default Customer;
