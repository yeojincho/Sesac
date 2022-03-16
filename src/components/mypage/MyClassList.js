import React, { useState } from "react";
import "./myClassList.css";
import SideMenu from "./SideMenu";

const MyClassList = () => {
  let [notice, setNotice] = useState(false);
  return (
    <div className="myClassList-container">
      <SideMenu />
      <div className="inner-box">
        <div className="flexbox">
          <div className="myClassListPage">
            <h2 className="pageTitle">수강내역</h2>

            {notice === true ? (
              <table className="table">
                <colgroup>
                  <col width={40} />
                  <col width={350} />
                  <col width={200} />
                  <col width={40} />
                  <col width={150} />
                  <col width={80} />
                  <col width={90} />
                </colgroup>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">교육과정</th>
                  <th scope="col">교육일정</th>
                  <th scope="col">인원</th>
                  <th scope="col">교육비</th>
                  <th scope="col">상태</th>
                  <th scope="col" className="">
                    수료증
                  </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>사내강사 양성과정(강사가 되는 방법)</td>
                  <td>2022.01.01~2022.01.01</td>
                  <td>2</td>
                  <td>1,000,000원</td>
                  <td>수료</td>
                  <td>
                    <button className="down-btn">다운로드</button>
                  </td>
                </tr>
              </table>
            ) : (
              <Notice />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function Notice() {
  return (
    <div className="notice-noClass on">
      <h3>교육내역이 없습니다.</h3>
      <p>
        문의사항이 있는 경우 문의하기 게시판이나 02-2152-3915~4으로 연락
        주십시오.
      </p>
    </div>
  );
}
export default MyClassList;
