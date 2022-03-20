import React from "react";
import HeadTitle from "./HeadTitle";
import SideMenu from "./SideMenu";
import "./regiConfirm.css";

const RegiConfirm = () => {
  const myRegiClass = [
    {
      title: "[집체교육] PRO 문제해결 과정",
      date: "2022.01.01~2022.01.02",
      numOfP: 10,
      cost: "570000",
      status: "대기",
      payment: "대기",
    },
    {
      title: "[LIVE] 메타버스와 로블록스 제작 과정",
      date: "2022.01.03~2022.01.04",
      numOfP: 12,
      cost: "640000",
      status: "대기",
      payment: "대기",
    },
  ];
  const addclass = () => {
    const cancelBtn = document.getElementById("popup-cancel");
  };
  return (
    <div className="regiConfirm-container">
      <div className="inner-box">
        <HeadTitle />
        <div className="flex-box">
          <SideMenu />
          <div className="classConfirm-contentBox">
            <h2 className="pageTitle">수강신청 확인/취소</h2>
            <table className="myclass-table">
              <colgroup>
                <col width={40} />
                <col width={40} />
                <col width={350} />
                <col width={200} />
                <col width={40} />
                <col width={150} />
                <col width={80} />
                <col width={80} />
              </colgroup>
              <tr id="confirm-under">
                <th scope="col">선택</th>
                <th scope="col">No</th>
                <th scope="col">교육과정</th>
                <th scope="col">교육일정</th>
                <th scope="col">인원</th>
                <th scope="col">교육비</th>
                <th scope="col">상태</th>
                <th scope="col" className="">
                  결제
                </th>
              </tr>

              {myRegiClass.map((list, idx) => (
                <tr key={idx}>
                  <td>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>{idx + 1}</td>
                  <td>{list.title}</td>
                  <td>{list.date}</td>
                  <td>{list.numOfP}</td>
                  <td>{list.cost} 원 </td>
                  <td>{list.status}</td>
                  <td>{list.payment}</td>
                </tr>
              ))}
            </table>
            <button id="cancelBtn" onClick={addclass}>
              취소하기
            </button>

            <div className="notice-noRegiClass">
              <h3>신청하신 교육과정이 없습니다.</h3>
              <p>
                문의사항이 있는 경우 문의하기 게시판이나 02-2152-3915~4으로 연락
                주십시오
              </p>
            </div>
            <div id="popup-cancel" className=" pop-cancel yes">
              <p>excacademy.co.kr 내용:</p>
              <p>선택 과정이 취소되었습니다.</p>
              <button type="button" className="cancel-btn">
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegiConfirm;
