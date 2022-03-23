import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

function QuestionList() {
  const questions = useSelector((state) => state.questionReducer.questions);
  return (
    <div>
      <Table className="question-list-table">
        <thead>
          <tr>
            <th>No</th>
            <th>제 목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>

        <tbody>
          {questions.length > 0 ? (
            questions.map((question) => (
              <tr key={question.id}>
                <th scope="row" style={{ width: "10vw", lineHeight: "5vh" }}>
                  {question.id}
                </th>
                <Link
                  to={{
                    pathname: `/question/:${question.id}`,
                    state: {
                      title: question.title,
                      writer: question.writer,
                      content: question.content,
                      date: question.date,
                    },
                  }}
                >
                  <td style={{ width: "60vw" }}>{question.title}</td>
                </Link>
                <td style={{ width: "10vw", lineHeight: "5vh" }}>
                  {question.writer}
                </td>
                <td
                  className="question-date"
                  style={{
                    textAlign: "center",
                    width: "10vw",
                    lineHeight: "5vh",
                  }}
                >
                  {question.date}
                </td>
              </tr>
            ))
          ) : (
            <tr style={{ textAlign: "center" }}>
              <td></td>
              <td
                style={{
                  textAlign: "center",
                  height: "8vh",
                  lineHeight: "8vh",
                }}
              >
                등록된 문의가 없습니다.
              </td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
export default QuestionList;
