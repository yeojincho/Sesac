import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 1300px;
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
    <Section>
      <Wrapper>
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
    </Section>
  );
}

export default QuestionView;
