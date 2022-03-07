import React from "react";
import "./OrderPage.css";

function OrderPage(props) {
  return (
    <div className="contents inner-box">
      <div className="left">
        <h3>
          <b>HR샵</b>
        </h3>
        <span>__교육에 필요한 옵션 및 상품정보를 제공합니다.</span>

        <div className="Box"></div>
        <ul>
          <li className="miniBox"></li>
          <li className="miniBox"></li>
          <li className="miniBox"></li>
        </ul>
        <div className="infoBtn">
          <button>반품/교환정보</button>
          <button>상세정보</button>
        </div>
      </div>
      <div className="right">
        <div className="orderInfo">
          <h2>엑공박스 프리미엄</h2>
          <p>`${}원`</p>
          <input
            className="para"
            type="text"
            placeholder="요청을 입력하세요"
          ></input>
          <p>배송여부</p>
          <select>
            <option value="">배송불가</option>
            <option value="">배송가능</option>
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
