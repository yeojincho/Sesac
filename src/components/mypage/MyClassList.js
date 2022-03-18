import React, { useState } from "react";
import { List } from "reactstrap";
import HeadTitle from "./HeadTitle";
import "./myClassList.css";
import SideMenu from "./SideMenu";

const MyClassList = () => {
  let [notice, setNotice] = useState(true);
  return (
    <div className="myClassList-container">
      <div className="inner-box">
        <HeadTitle />
        <div className="flex-box">
          <SideMenu />
          <div className="myClassList-contentBox">
            <h2 className="pageTitle">수강내역</h2>

            {notice === true ? <ClassTable /> : <Notice />}
          </div>
        </div>
      </div>
    </div>
  );
};

function ClassTable() {
  const myclass = [
    {
      title: "[집체교육] 사내강사 양성과정",
      date: "2022.01.01~2022.01.02",
      numOfP: 10,
      cost: "570000",
      status: "수료",
    },
    {
      title: "[집체교육] 소통하는 신입사원 과정",
      date: "2022.01.03~2022.01.04",
      numOfP: 12,
      cost: "290000",
      status: "수강중",
    },
  ];
  return (
    <table className="myClassList-table">
      <colgroup>
        <col width={40} />
        <col width={350} />
        <col width={200} />
        <col width={40} />
        <col width={150} />
        <col width={80} />
        <col width={90} />
      </colgroup>
      <tr id="under">
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

      {myclass.map((list, idx) => (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{list.title}</td>
          <td>{list.date}</td>
          <td>{list.numOfP}</td>
          <td>{list.cost} 원</td>
          <td>{list.status}</td>
          <td>
            <button className="down-btn">다운로드</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
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
