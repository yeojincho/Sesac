import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Customer from "./Customer";
import "./notice.css";
import QuestionList from "./QuestionList";

function Question() {
  return (
    <React.Fragment>
      <section className="container">
        <section className="title">
          <h1>고객센터</h1>
          <h2>__무엇이든 물어보세요</h2>
        </section>
        <Customer />
        <article className="tableContainer">
          <div>
            <QuestionList />
          </div>
        </article>
        <section className="pagiNation">
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
