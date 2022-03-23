import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 70vh;
  margin: 0 auto;
  padding-top: 100px;
`;
const Wrapper = styled.article`
  width: 60vw;
  height: 70%;
  margin: 0 auto;
`;

function QuestionView(question) {
  const state = question.location.state;

  return (
    <div>
      <section className="visitTitle">
        <div className="inner-box">
          <h1>고객센터</h1>
          <h2>— 질문 내용입니다.</h2>
        </div>
      </section>
      <Section>
        <Wrapper style={{ borderBottom: "1px solid #aaa" }}>
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #aaa",
              borderBottom: "1px solid #aaa",
            }}
          >
            <p
              style={{
                boxSizing: "border-box",
                paddingTop: "10px",
                fontSize: "18px",
                textIndent: "20px",
                marginBottom: "11px",
              }}
            >
              {state.title}
            </p>
          </div>
          <div
            style={{ display: "flex", justifyContent: "end", padding: "10px" }}
          >
            <span style={{ width: "6.5vh" }}>작성자</span>
            <p style={{ width: "6.5vh", borderRight: "1px solid #aaa" }}>
              {state.writer}
            </p>
            <span style={{ width: "6.5vh", marginLeft: "15px" }}>작성일</span>
            <p style={{ width: "6.5vh" }}>{state.date}</p>
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ textIndent: "20px" }}>{state.content}</p>
          </div>
        </Wrapper>
        <Link to="/question">
          <div className="question-btn-box" style={{ marginTop: "5vh" }}>
            <button className="question-submit-btn">목록</button>
          </div>
        </Link>
      </Section>
    </div>
  );
}

export default QuestionView;
