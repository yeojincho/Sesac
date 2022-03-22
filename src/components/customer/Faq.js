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
        {title: '환불규정', contetns:'accoRefund' },
        {title: '신청/취소', contetns:'accoApply' },
        {title: '기타', contetns:'accoEtc' },
    ]
    //서브메뉴 클릭시 색 변경
    const [currentMenu, setCurrentMenu] = useState(0)
    const clickHandler = (index)=>{
        setCurrentMenu(index)
    }


    return(
        <>
        <section className='fqaTitle'>
                <h1>고객센터</h1>
                <h2>— 자주 질문해 주시는 내용을 모아 보다 편리하게 궁금증을 해결하실 수 있습니다.</h2>
            </section>
        <div className="inner-box">
        
            
            <ul class="cont-navi">
        <li><a href="#none" class="nav-home">HOME</a></li>
        <li><a href="#none" class="nav-sub">고객센터</a></li>
        <li><span class="nav-sub">자주 묻는 질문</span></li>
      </ul>
                
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
        <div className='faqBottomBanner'>
            <img src="/images/academy/007.png" alt="배너이미지" />
        </div>
        </>
    )
}