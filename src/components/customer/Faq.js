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
        <div className="inner-box">
            <section className='fqaTitle'>
                <h1>고객센터</h1>
                <h2>— 자주 질문해 주시는 내용을 모아 보다 편리하게 궁금증을 해결하실 수 있습니다.</h2>
            </section>
                
            <Customer />
            <div className="fqaSubMenuBox">
                <ul className="fqaSubMenuContainer">
                    <li className= "fqaSubMenuList" id = "subMenu1" onClick={ handleClick }>

                            회원정보
                                
                    </li>
                    <li className= "fqaSubMenuList" id = "subMenu2" onClick={ handleClick }>
                        
                            결제관련
                        
                    </li>
                    <li className= "fqaSubMenuList" id = "subMenu3" onClick={ handleClick }>
                        
                            환불규정
                        
                    </li>
                    <li className= "fqaSubMenuList" id = "subMenu4" onClick={ handleClick }>
                        
                            신청/취소
                                
                    </li>
                    <li className= "fqaSubMenuList" id = "subMenu5" onClick={ handleClick }>
                        
                            기타             
                    </li>
                </ul>
            </div>{/* e: submenu */}

        <FaqAcco />
        
        </div>
        </>
    )
}