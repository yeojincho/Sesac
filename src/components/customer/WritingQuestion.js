import React from "react";
import Customer from "./Customer";
import "./question.css";

function WritingQuestion(props) {
  return (
    <div>
      <div>
        <Customer />
      </div>
      <div className="question-container">
        <form id="question-writing-form">
          <div className="question-form-item">
            <div className="question-item-box">
              <label for="name" className="question-title">
                작성자
              </label>
              <input type="text" id="question-name" />
            </div>
            <div className="question-item-box">
              <label for="pw" className="question-title">
                비밀번호
              </label>
              <input type="password" id="question-password" />
            </div>
          </div>
          <div className="question-form-item">
            <div className="question-item-box">
              <label for="contact" className="question-title">
                연락처
              </label>
              <input type="" id="question-contact" />
            </div>
            <div className="question-item-box">
              <label for="mail" className="question-title">
                E-mail
              </label>
              <input type="email" id="question-email" />
            </div>
          </div>
          <div className="question-form-item cf">
            <div className="question-title-box">
              <label for="content" id="question-content-title">
                문의사항
              </label>
            </div>
            <div className="question-content-box">
              <textarea id="question-content"></textarea>
            </div>
          </div>
        </form>
        <div className="question-btn-box">
          <button className="question-submit-btn">작성하기</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default WritingQuestion;
