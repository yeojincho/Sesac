import React from "react";
import { Link } from "react-router-dom";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Customer from "./Customer";
import "./notice.css";
import QuestionList from "./QuestionList";
import WritingQuestion from "./WritingQuestion";

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
          <QuestionList />
          <div className="writeBtn">
            <Link to="/writing">
              <button>작성하기</button>
            </Link>
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
