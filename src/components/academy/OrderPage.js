import React from "react";
import "./OrderPage.css";

function OrderPage(props) {
  return (
    <div className='orderPage-contents inner-box'>
      <div className='orderPage-left'>
        <h3 className='orderPage-h3'>
          <b>HR샵</b>
        </h3>
        <span className='orderPage-span'>
          __교육에 필요한 옵션 및 상품정보를 제공합니다.
        </span>

        <div className='orderPage-Box'></div>
        <ul className='orderPage-ul'>
          <li className='orderPage-miniBox'></li>
          <li className='orderPage-miniBox'></li>
          <li className='orderPage-miniBox'></li>
        </ul>
        <div className='orderPage-infoBtn'>
          <button className='orderPage-Btn'>반품/교환정보</button>
          <button className='orderPage-Btn'>상세정보</button>
        </div>
      </div>
      <div className='orderPage-right'>
        <div className='orderInfo'>
          <h2 className='orderPage-h2'>엑공박스 프리미엄</h2>
          <p className='orderPage-p'>`${}원`</p>
          <input
            className='orderPage-input'
            type='text'
            placeholder='요청을 입력하세요'
          ></input>
          <p className='orderPage-p'>배송여부</p>
          <select className='orderPage-select'>
            <option value=''>배송불가</option>
            <option value=''>배송가능</option>
          </select>
          <ul>
            <li>배송형태에 따라 추가비용이 발생할 수 있습니다.</li>
            <li>
              <button>+</button>0<button>-</button>
            </li>
          </ul>
          <ul>
            <li>`총 상품금액 ${}?`</li>
            <li>`총 수량 ${}개`</li>
            <li>`${}원`</li>
          </ul>
          <button> 문의하기 </button>
          <button> 주문하기 </button>
        </div>
      </div>
    </div>
  );
}
export default OrderPage;
