import React, { useState } from "react";
import "./HrStore.css";
import Menu_title from "./Menu_title";
import HrItem from "./HrItem";
import { Link } from "react-router-dom";

export default function HrStore() {
  const titles = [
    {
      title: "엑스퍼트 아카데미 강사소개",
      subTitle: "엑스퍼트 아카데미만의 강사님을 소개합니다.",
    },
  ];
  const itemInfo = [
    {
      src: "/images/academy/expert.png",
      item: "엑공박스 베이직",
      price: "10,000",
    },
    {
      src: "/images/shopitem3.jpg",
      item: "엑공박스 프리미엄",
      price: "12,000",
    },
    {
      src: "/images/academy/expert.png",

      item: "도시락 업그레이드",
      price: "5,000",
    },
    {
      src: "/images/shopitem3.jpg",

      item: "아침제공 서비스",
      price: "10,000",
    },
    {
      src: "/images/academy/expert.png",
      item: "사내강사 과정 필수템 포인터",
      price: "10,000",
    },
    {
      src: "/images/shopitem3.jpg",

      item: "사내강사 과정 필수템 포인터",
      price: "10,000",
    },
    {
      src: "/images/academy/expert.png",
      item: "사내강사 과정 필수템 포인터",
      price: "10,000",
    },
    {
      src: "/images/shopitem3.jpg",
      item: "사내강사 과정 필수템 포인터",
      price: "10,000",
    },
    {
      src: "/images/academy/expert.png",

      item: "사내강사 과정 필수템 포인터",
      price: "10,000",
    },
    {
      src: "/images/shopitem3.jpg",
      item: "사내강사 과정 필수템 포인터",
      price: "10,000",
    },
  ];

  const itemList = itemInfo.map((i) => (
    <HrItem src={i.src} item={i.item} price={i.price} />
  ));

  const [currentTab, setCurrentTab] = useState(0);
  const menu = [
    { name: "업그레이드", content: "a" },
    { name: "기념품", content: "b" },
    { name: "문의하기", content: "c" },
  ];
  const handleMneu = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <div className=''>
      <div className='orderPage-bigTitle'>
        <h3 className='orderPage-h3'>
          <b>HR샵</b>
        </h3>
        <span className='orderPage-span'>
          __교육에 필요한 옵션 및 상품정보를 제공합니다.
        </span>
      </div>
      <div className='inner-box'>
        <ul class='cont-navi'>
          <li>
            <a href='#none' class='nav-home'>
              HOME
            </a>
          </li>
          <li>
            <span class='nav-sub'>아카데미</span>
          </li>
          <li>
            <span class='nav-sub'>HR샵</span>
          </li>
        </ul>
        <div className='hrBox'>
          <ul className='btnBox'>
            {menu.map((el, idx) => {
              return (
                <li>
                  <Link to='/detail'>
                    <button
                      key={el.content}
                      className={currentTab === idx ? "btn on" : "btn"}
                      onClick={() => handleMneu(idx)}
                      type='button'
                    >
                      {el.name}
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link to='/OrderPage'>
            <ul className='hrItemList'>{itemList}</ul>
          </Link>
        </div>
      </div>
      <div className='bottomBannerImg'>
        <img src='/images/academy/008.png' alt='' />
      </div>
    </div>
  );
}
