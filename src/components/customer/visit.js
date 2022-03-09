import React,  { useState, useEffect } from "react";
import './visit.css'
import Customer from './Customer';

export default function Visit(){

    const [ currentClick, setcurrentClick ] = useState(null);
    const [ prevClick, setPrevClick ] = useState(null);

    const handleClick = (e) => {
        setcurrentClick(e.target.id);
    };

    useEffect(
        (e) => {
        if (currentClick !== null) {
            let current = document.getElementById(currentClick);
            current.classList.add('subOn');
        }
        if (prevClick !== null) {
            let prev = document.getElementById(prevClick);
            prev.classList.remove('subOn');
        }
        setPrevClick(currentClick);                  
        },[currentClick]); 

    const copyAddress = () => {
        const addressText = document.getElementById('addressText').textContent;
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
            <div className="wrapper inner-box">
                <div className='title'>
                    <h2>고객센터</h2>
                    <h3>__오시는 길</h3>
                </div>
                
            <Customer />            
                <div className="visitSubMenuBox">
                    <ul className="visitSubMenuList">
                        <li >
                            <button id = "subMenu1" onClick={ handleClick }>
                                송파러닝센터
                            </button>                
                        </li>
                        <li >
                            <button id = "subMenu2" onClick={ handleClick }>
                            가락러닝센터
                            </button>                
                        </li>
                        <li >
                            <button id = "subMenu3" onClick={ handleClick }>
                            문정러닝센터
                            </button>                
                        </li>
                    </ul>
                </div>{/* e: submenu */}
                <main className="visitInfo">
                    <div className="address">
                        <h3 id="addressText">주소 : 서울특별시 중대로 121 롯데캐슬파인힐 2층</h3>
                        <button className='share' onClick={copyAddress}>
                            공유
                        </button>
                    </div>
                    <div className="mapBox">
                        <div className="officeImg">
                            회사 전경 사진 영역
                        </div>
                        <div className="map">
                            지도 영역
                        </div>
                    </div>        
                </main>{/* e: visitInfo */}
                <div className="transport">
                        <h3>교통편</h3>
                    <div className="transportList">
                        <div className="car">
                            <p className="transportListTitle carTitle">승용차</p>
                            <p className="transportListContents carContents">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, eget non scelerisque bibendum.                    
                            </p>                  
                        </div>
                        <div className="subway">
                            <p className="transportListTitle subwayTitle">지하철</p>
                            <p className="transportListContents subwatContents">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, eget non scelerisque bibendum.</p>                    
                        </div>
                        <div className="bus">
                            <p className="transportListTitle busTitle">버스</p>
                            <p className="transportListContents busContents">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, eget non scelerisque bibendum.</p>                    
                        </div>
                    </div>{/* e:transportList */}
                </div>{/* e:transport */}
            </div>
        </>
    )
}
