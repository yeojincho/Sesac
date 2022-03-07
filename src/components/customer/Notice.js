import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Customer from "./Customer";
// import { tab } from "@testing-library/user-event/dist/tab";

function Notice() {
  return (
    <React.Fragment>
      <section className="container">
        <h1>Notice 컴포넌트</h1>
        <h2>고객센터</h2>
        <h3>__엑스퍼트아카데미 공지사항 입니다</h3>
        <Customer notice={Notice} />
        <article className="tableContainer">
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>제 목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>공지사항 입니다.</td>
                <td>관리자</td>
                <td>2022.01.03</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>공지사항 입니다.</td>
                <td>관리자</td>
                <td>2022.02.22</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>방역지침 안내입니다.</td>
                <td>관리자</td>
                <td>2022.02.28</td>
              </tr>
            </tbody>
          </Table>
        </article>
        <section className="pageNation">
          <Pagination aria-label="Page navigation" size="sm">
            <PaginationItem>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" previous />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" next />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" last />
            </PaginationItem>
          </Pagination>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Notice;
