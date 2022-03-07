import React from "react";
import './visit.css'

export default function Visit(){
    return(
        <div className="wrapper inner-box">
            <div className="title">
                <h2>고객센터</h2>
                <h3>__오시는 길</h3>
            </div>
        <div className="menu">
            <ul className="menuList">
                <li><a href="#">공지사항</a></li>
                <li><a href="#">문의하기</a></li>
                <li><a href="/faq">자주 묻는 질문</a></li>
                <li><a href="/visit">오시는 길</a></li>
            </ul>
        </div>{/* e:menu */}
        <div className="subMenu">
            <ul className="subMenuList">
                <li><a href="#">송파러닝센터</a></li>
                <li><a href="#">가락러닝센터</a></li>
                <li><a href="#">문정러닝센터</a></li>
            </ul>
        </div>
        <main className="visitInfo">
            <div className="address">
                <h3>주소 : 서울특별시 중대로 121 롯데캐슬파인힐 2층</h3>
                <a href="#" className="share">
                    <p>공유</p>
                </a>
            </div>
            <div className="mapBox">
                <div className="officeImg">
                    회사 전경 사진 영역
                </div>
                <div className="map">
                    지도 영역
                </div>
            </div>
            
        </main>
        <div className="transport">
            <div className="transportTitle">
                <h3>교통편</h3>
            </div>
            <div className="transportList">
                <div className="car">
                    <p className="transportListTitle carTitle">승용차</p>
                    <div className="transportListContents carContents">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, eget non scelerisque bibendum.
                    
                    </div>                  
                </div>
                <div className="subway">
                    <p className="transportListTitle subwayTitle">지하철</p>
                    <p className="transportListContents subwatContents">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, eget non scelerisque bibendum.</p>                    
                </div>
                <div className="bus">
                    <p className="transportListTitle busTitle">버스</p>
                    <p className="transportListContents busContents">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, eget non scelerisque bibendum.</p>                    
                </div>{/* e:transportList */}
            </div>{/* e:transport */}

        </div>
        </div>
    )
}
