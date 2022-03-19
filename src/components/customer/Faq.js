/*customer > FQA 페이지 */

import React, { useState, useEffect } from "react";
import './faq.css'
import FaqAcco from './FaqAcco';
import Customer from './Customer';


export default function Faq() {

    
    //서브메뉴 타이틀
    const subMenuArr = [
        {title:'회원정보', contents:'accoMemberInfo'},
        {title: '결제관련', contetns:'accoPay' },
        {title: '환불규정', contetns:'accoPay' },
        {title: '신청/취소', contetns:'accoPay' },
        {title: '기타', contetns:'accoPay' },
    ]
    //서브메뉴 클릭시 색 변경
    const [currentMenu, setCurrentMenu] = useState(0)
    const clickHandler = (index)=>{
        setCurrentMenu(index)
    }


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
                    {subMenuArr.map((menu,index)=>{
                        return(
                            <li
                            key={index}
                            className={currentMenu === index ? 'fqaSubMenuList subOn'  : 'fqaSubMenuList'}
                            onClick={()=>clickHandler(index)}
                            >
                            {menu.title}   
                            </li>
                        )
                    })}
                </ul>
            </div>{/* e: submenu */}

            <FaqAcco currentMenu={currentMenu}/>
        
        </div>
        </>
    )
}