import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Customer from "./Customer";
import NoticeList from "./NoticeList";
import "./notice.css";

function Notice() {
  return (
    <React.Fragment>
      <section className="notice-container">
        <section className="notice-title">
          <h1>고객센터</h1>
          <h2>— 엑스퍼트아카데미 공지사항 입니다</h2>
        </section>
        <Customer />
        <article className="notice-table">
          <NoticeList />
        </article>
        <section className="pagination">
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
