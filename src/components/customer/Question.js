import React from "react";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Customer from "./Customer";
import "./question.css";

function Question() {
  return (
    <React.Fragment>
      <section className="container">
        <h1>Question 컴포넌트</h1>
        <h2>문의하기</h2>
        <h3>__무엇이든 물어보세요</h3>
        <Customer />
        <article className="table">
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
                <td>환불 언제 되나요???</td>
                <td>김망고</td>
                <td>2022.01.01</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>취업컨설팅 관련 문의드려요.</td>
                <td>박수박</td>
                <td>2022.03.03</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>궁금해요!!!!</td>
                <td>윤포도</td>
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

export default Question;
