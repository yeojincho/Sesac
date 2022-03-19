import React,  { useState, useEffect } from "react";
import './visit.css'
import Customer from './Customer';
import VisitMap from './VisitMap';

export default function Visit(){

    //서브메뉴 타이틀
    const subMenuArr = [
        {title: '송파러닝센터'},
        {title: '가락러닝센터'},
        {title: '문정러닝센터'},
    ]
    //서브메뉴 클릭시 색 변경
    const [currentMenu,setCurrentMenu] = useState(0)
    const clickHandler = (index)=>{
        setCurrentMenu(index)
    }

    //주소 복사하기
    const copyAddress = () => {
        const addressText = document.querySelector('#addressText span').textContent;
        const textArea = document.createElement('textArea');
        textArea.textContent = addressText;
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        alert('주소가 복사되었습니다.')
    }   
    


    return(
        <>
            <div className="inner-box">
                <section className='visitTitle'>
                    <h1>고객센터</h1>
                    <h2>— 오시는 길</h2>
                </section>
                
            <Customer />            
                <div className="visitSubMenuBox">
                    <ul className="visitSubMenuContainer">
                        {subMenuArr.map((menu,index)=>{
                            return(
                                <li
                                key={index}
                                className={currentMenu === index ? 'visitSubMenuList subOn' : 'visitSubMenuList'}
                                onClick={()=>clickHandler(index)}
                                >
                                {menu.title}    
                                </li>
                                
                            )
                        })}
                    </ul>
                </div>{/* e: submenu */}
                <main className="visitInfo">
                    <div className="address">
                        <h3 id="addressText">주소 : <span>서울특별시 중대로 121 롯데캐슬파인힐</span>2층</h3>
                        <button className='share' onClick={copyAddress}>
                            공유
                        </button>
                    </div>
                    <div className="mapBox">
                            <img src='/images/visit/office.png' className="officeImg"></img>
                        <VisitMap />
                    </div>        
                </main>{/* e: visitInfo */}
                <div className="transport">
                        <h3>교통편</h3>
                    <div className="transportList">
                        <div className="car">
                            <p className="transportListTitle carTitle">승용차</p>
                            <div className="transportListContents">
                                <p>※ 교육생들을 위한 주차장 시설이 제공되지<br/> 않습니다.</p>
                                <p>승용차 이용 시 주차장 비용을 부담하셔야 합니다.</p>
                                <p>(가락2 공영 주차장 / 1일 24,000원)</p>
                            </div>
                        </div>
                        <div className="subway">
                            <p className="transportListTitle subwayTitle">지하철</p>
                            <div className="transportListContents">
                                <p>- 가락시장역 4번 출구</p> 
                                <p>- 경찰병원역 1번 출구</p> 
                            </div>
                                            
                        </div>
                        <div className="bus">
                            <p className="transportListTitle busTitle">버스</p>
                            <div className="transportListContents">
                                <p>- 간선버스 : 301, 302, 303, 360, 362, 363</p>
                                <p>- 지선버스 : 2317, 3413, 3415, 3422</p>
                                <p>- 광역버스 : 9403</p>
                            </div>                  
                        </div>
                    </div>{/* e:transportList */}
                </div>{/* e:transport */}
            </div>
        </>
    )
}
