import React from "react";
import "./myClassList.css";

const MyClassList = () => {
  return (
    <div className="myClassList-container">
      <div className="inner-box">
        <div className="menuTitle-box">
          <h1>마이페이지</h1>
          <p>{}님 엑스퍼트아카데미에 오실걸 환영 합니다.</p>
        </div>
        <div className="flexbox">
          <div className="left-menu">
            <ul>
              <li className="user-info depth1">
                <a href="#">회원정보</a>
                <ul>
                  <li className="depth2">
                    <a href="#">회원정보관리</a>
                  </li>
                  <li className="depth2">
                    <a href="#">비밀번호변경</a>
                  </li>
                </ul>
              </li>
              <li className="class-info depth1">
                <a href="#">수강정보</a>
                <ul>
                  <li className="depth2">
                    <a href="#">수강신청 확인/취소</a>
                  </li>
                  <li className="depth2">
                    <a href="#" className="active">
                      수강내역
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="myClassListPage">
            <h2 className="pageTitle">수강내역</h2>
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
                  <button>다운로드</button>
                </td>
              </tr>
            </table>
            <div className="notice-noClass on">
              <h3>교육내역이 없습니다.</h3>
              <p>
                문의사항이 있는 경우 문의하기 게시판이나 02-2152-3915~4으로 연락
                주십시오.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyClassList;
