import React, { useState } from "react";
import HeadTitle from "./HeadTitle";
import SideMenu from "./SideMenu";
import "./regiConfirm.css";
import CancelModal from "./CancelModal";

const RegiConfirm = () => {
  //클래스 리스트 더미 데이터
  const [myRegiClass, setRegiClass] = useState([
    {
      id: 1,
      title: "[집체교육] PRO 문제해결 과정",
      date: "2022.01.01~2022.01.02",
      numOfP: 10,
      cost: "570000",
      status: "대기",
      payment: "대기",
    },
    {
      id: 2,
      title: "[LIVE] 메타버스와 로블록스 제작 과정",
      date: "2022.01.03~2022.01.04",
      numOfP: 12,
      cost: "640000",
      status: "대기",
      payment: "대기",
    },
    {
      id: 3,
      title: "[집체교육] 엑셀 VBA 과정",
      date: "2022.01.06~2022.01.08",
      numOfP: 10,
      cost: "600000",
      status: "대기",
      payment: "대기",
    },
    {
      id: 4,
      title: "[집체교육] 소통하는 신입사원 과정",
      date: "2022.01.06~2022.01.07",
      numOfP: 11,
      cost: "290000",
      status: "대기",
      payment: "대기",
    },
  ]);

  //취소했거나 신청한 클래스가 없으면 true
  const [isClass, setIsClass] = useState(false);

  //신청취소하기 버튼 클릭시 모달 state(클릭하면 true로 변경되고 모달오픈)
  const [modalOpen, setModalOpen] = useState(false);

  const openMdelarr = () => {
    setModalOpen(true);
    let tableData = document.getElementById("classTable");
    let tableLeng = tableData.rows.length;

    for (let i = 0; i < tableLeng; i++) {
      let chkbox = tableData.rows[i].cells[0].childNodes[0].checked;

      if (chkbox) {
        tableData.deleteRow(i);
        i--;
      }
      if (tableLeng === 1) {
        setIsClass(true);
      }
    }
  };
  const closeM = () => {
    setModalOpen(false);
  };

  return (
    <div className="regiConfirm-container">
      <HeadTitle />
      <div className="inner-box">
        <ul class="cont-navi">
          <li>
            <a href="#none" class="nav-home">
              HOME
            </a>
          </li>
          <li>
            <span class="nav-sub">마이페이지</span>
          </li>
          <li>
            <span class="nav-sub">수강신청 확인/취소</span>
          </li>
        </ul>
        <div className="flex-box">
          <SideMenu />
          <div className="classConfirm-contentBox">
            <h2 className="pageTitle">수강신청 확인/취소</h2>

            {!isClass ? (
              <div>
                <div className="table-box">
                  <table className="myclass-table">
                    <colgroup>
                      <col width={40} />
                      <col width={40} />
                      <col width={330} />
                      <col width={200} />
                      <col width={40} />
                      <col width={150} />
                      <col width={80} />
                      <col width={80} />
                    </colgroup>
                    <thead>
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
                    </thead>
                    <tbody id="classTable">
                      <tr>
                        <td>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="chkbox"
                            value={myRegiClass[0].id}
                            id="flexCheckDefault"
                          />
                        </td>
                        <td>1</td>
                        <td>{myRegiClass[0].title}</td>
                        <td>{myRegiClass[0].date}</td>
                        <td>{myRegiClass[0].numOfP}</td>
                        <td>{myRegiClass[0].cost}</td>
                        <td>{myRegiClass[0].status}</td>
                        <td>{myRegiClass[0].payment}</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="chkbox"
                            value={myRegiClass[1].id}
                            id="flexCheckDefault"
                          />
                        </td>
                        <td>2</td>
                        <td>{myRegiClass[1].title}</td>
                        <td>{myRegiClass[1].date}</td>
                        <td>{myRegiClass[1].numOfP}</td>
                        <td>{myRegiClass[1].cost}</td>
                        <td>{myRegiClass[1].status}</td>
                        <td>{myRegiClass[1].payment}</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="chkbox"
                            value={myRegiClass[2].id}
                            id="flexCheckDefault"
                          />
                        </td>
                        <td>3</td>
                        <td>{myRegiClass[2].title}</td>
                        <td>{myRegiClass[2].date}</td>
                        <td>{myRegiClass[2].numOfP}</td>
                        <td>{myRegiClass[2].cost}</td>
                        <td>{myRegiClass[2].status}</td>
                        <td>{myRegiClass[2].payment}</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="chkbox"
                            value={myRegiClass[3].id}
                            id="flexCheckDefault"
                          />
                        </td>
                        <td>4</td>
                        <td>{myRegiClass[3].title}</td>
                        <td>{myRegiClass[3].date}</td>
                        <td>{myRegiClass[3].numOfP}</td>
                        <td>{myRegiClass[3].cost}</td>
                        <td>{myRegiClass[3].status}</td>
                        <td>{myRegiClass[3].payment}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button id="cancelBtn" onClick={openMdelarr}>
                  신청취소
                </button>
              </div>
            ) : null}

            <CancelModal open={modalOpen} close={closeM} />

            {isClass ? (
              <div className="notice-noRegiClass">
                <h3>신청하신 교육과정이 없습니다.</h3>
                <p>
                  문의사항이 있는 경우 문의하기 게시판이나 02-2152-3915~4으로
                  연락 주십시오
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegiConfirm;
