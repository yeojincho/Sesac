/*customer > FQA 페이지 */

import React, { useState, useEffect } from "react";
import './faq.css'
import FaqAcco from './FaqAcco';
import Customer from './Customer';


export default function Faq() {

    const [ currentClick, setcurrentClick ] = useState(null);
    const [ prevClick, setPrevClick ] = useState(null);

    const handleClick = (e) => {
        setcurrentClick(e.target.id);
      };

      useEffect(
          (e) => {
              if(currentClick !== null){
                  let current = document.getElementById(currentClick);
                  current.classList.add('subOn');
              }
              if(prevClick !== null){
                  let prev = document.getElementById(prevClick);
                  prev.classList.remove('subOn');
              }
              setPrevClick(currentClick);
          }, [currentClick]);

    return(
        <>
        <div className="wrapper inner-box">
            <div className='title'>
                <h2>고객센터</h2>
                <h3>__무엇이든 물어보세요.</h3>
            </div>
                
            <Customer />
            <div className="fqaSubMenuBox">
                <ul className="fqaSubMenuList">
                    <li >
                        <button id = "subMenu1" onClick={ handleClick }>
                            회원정보
                        </button>                
                    </li>
                    <li >
                        <button id = "subMenu2" onClick={ handleClick }>
                            결제관련
                        </button>                
                    </li>
                    <li >
                        <button id = "subMenu3" onClick={ handleClick } >
                            환불규정
                        </button>                
                    </li>
                    <li >
                        <button id = "subMenu4" onClick={ handleClick }>
                            신청/취소
                        </button>                
                    </li>
                    <li >
                        <button id = "subMenu5" onClick={ handleClick }>
                            기타
                        </button>                
                    </li>
                </ul>
            </div>{/* e: submenu */}

        <FaqAcco />
        
        </div>
        </>
    )
}