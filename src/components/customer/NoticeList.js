import React from "react";
import { Table } from "reactstrap";

function NoticeList() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth();
  const dd = date.getDate();
  const notices = [
    {
      id: 1,
      writer: "관리자",
      content: "공지사항 입니다.",
      date: `${yyyy}.${mm}.${dd}`,
    },
    {
      id: 2,
      writer: "관리자",
      content: "방역지침 안내",
      date: `${yyyy}.${mm}.${dd}`,
    },
    {
      id: 3,
      writer: "관리자",
      content: "3월 식대 제출 안내",
      date: `${yyyy}.${mm}.${dd}`,
    },
    {
      id: 4,
      writer: "관리자",
      content: "비대면수업 Zoom 주소 공지",
      date: `${yyyy}.${mm}.${dd}`,
    },
    {
      id: 5,
      writer: "관리자",
      content: "공지사항 입니다.",
      date: `${yyyy}.${mm}.${dd}`,
    },
  ];

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>제 목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        {notices.map((notice) => (
          <tbody>
            <tr>
              <th scope="row">{notice.id}</th>
              <td>{notice.content}</td>
              <td>{notice.writer}</td>
              <td>{notice.date}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
export default NoticeList;
