import React from "react";
import SideMenu from "./sidebar/SideMenu";

const RegiConfirm = () => {
  return (
    <div className="regiConfirm-container">
      <div className="inner-box">
        <div className="flexbox">
          <SideMenu />
          <div className="classConfirmPage">
            <h2 className="pageTitle">수강신청 확인/취소</h2>
            <table className="table">
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
              <tr>
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
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td>사내강사 양성과정(강사가 되는 방법)</td>
                <td>2022.01.01~2022.01.01</td>
                <td>2</td>
                <td>1,000,000원</td>
                <td>대기</td>
                <td>대기</td>
              </tr>
            </table>

            <button className="cancelBtn">취소하기</button>
            <div className="notice-noClass">
              <h3>신청하신 교육과정이 없습니다.</h3>
              <p>
                문의사항이 있는 경우 문의하기 게시판이나 02-2152-3915~4으로 연락
                주십시오
              </p>
            </div>
            <div className="popup-cancel on">
              <p>excacademy.co.kr 내용:</p>
              <p>선택 과정이 취소되었습니다.</p>
              <button type="button" className="btn">
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
