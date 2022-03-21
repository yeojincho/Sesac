import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import styled from "styled-components";

function QuestionList({ active }) {
  const questions = useSelector((state) => state.questionReducer.questions);

  console.log(questions);
  return (
    <div>
      <Table striped className="question-list-table">
        <thead>
          <tr>
            <th>No</th>
            <th>제 목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr>
              <th scope="row">{question.id}</th>
              <td style={{ textAlign: "center" }}>{question.title}</td>
              <td>{question.writer}</td>
              <td className="question-date" style={{ textAlign: "center" }}>
                {question.date}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default QuestionList;
