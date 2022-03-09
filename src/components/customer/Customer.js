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
      <section className="listSection cf">
        <ul className="listContainer">
          <li >
            <Link to= "/notice">        
              <button id = "menu1" onClick={ handleClick }>                
                공지사항                
              </button>   
            </Link>       
          </li>
          <li>
           <Link to= "/question"> 
              <button id = "menu2" onClick={ handleClick }>
                문의하기
              </button>   
            </Link>    
          </li>
          <li>
            <Link to= "/faq"> 
              <button id = "menu3" onClick={ handleClick }>
                자주 묻는 질문
              </button>
              </Link>  
          </li>
          <li>
          <Link to= "/visit"> 
              <button id = "menu4" onClick={ handleClick }>
                오시는 길
              </button>
              </Link>  
          </li>
        </ul>
        <input type="text" placeholder="Search" className="searchBox focus" />
      </section>
    </React.Fragment>
  );
}

export default Customer;
