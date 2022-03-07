import React, { useState } from "react";
import "./HrStore.css";
import Menu_title from "./Menu_title";
import HrItem from "./HrItem";

export default function HrStore() {
  const titles = [
    {
      title: "엑스퍼트 아카데미 강사소개",
      subTitle: "엑스퍼트 아카데미만의 강사님을 소개합니다.",
    },
    {
      title: "HR샵",
      subTitle: "__교육에 필요한 옵션 및 상품정보를 제공합니다.",
    },
  ];
  const itemInfo = [
    {
      src: "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg",
      item: "엑공박스 베이직",
      price: "10,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg",
      item: "엑공박스 프리미엄",
      price: "12,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg",
      item: "도시락 업그레이드",
      price: "5,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg",
      item: "아침제공 서비스",
      price: "10,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg",
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
    <div className="">
      <div className="inner-box">
        <Menu_title headTitle={titles[1].title} subTitle={titles[1].subTitle} />
        <div className="hrBox">
          <ul className="btnBox">
            {menu.map((el, idx) => {
              return (
                <li>
                  <button
                    key={el.content}
                    className={currentTab === idx ? "btn on" : "btn"}
                    onClick={() => handleMneu(idx)}
                    type="button"
                  >
                    {el.name}
                  </button>
                </li>
              );
            })}
          </ul>
          <ul className="hrItemList">{itemList}</ul>
        </div>
      </div>
    </div>
  );
}
