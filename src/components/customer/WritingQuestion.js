import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../redux/modules/Question";
import { useHistory } from "react-router-dom";
import Customer from "./Customer";
import "./question.css";

function WritingQuestion() {
  const history = useHistory();
  const [newWriter, setNewWriter] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newContent, setNewContent] = useState("");

  const dispatch = useDispatch();

  const writerInput = (e) => {
    setNewWriter(e.target.value);
  };

  const passwordInput = (e) => {
    setNewPassword(e.target.value);
  };
  const phoneInput = (e) => {
    setNewPhone(e.target.value);
  };
  const emailInput = (e) => {
    setNewEmail(e.target.value);
  };
  const contentInput = (e) => {
    setNewContent(e.target.value);
  };

  const createQuestion = () => {
    if (newContent.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }

    const payload = { newWriter, newPassword, newPhone, newEmail, newContent };
    dispatch(addQuestion(payload));

    history.push("/question");
  };

  return (
    <div>
      <div>
        <Customer />
      </div>
      <div className="question-form-wrap">
        <form id="question-writing-form">
          <fieldset id="question-fieldset">
            <div className="question-item-box">
              <p className="item-label-box">
                <label for="name" className="writing-question-title">
                  작성자
                </label>
              </p>
              <div className="item-input-box">
                <input
                  type="text"
                  id="question-name"
                  value={newWriter}
                  onChange={writerInput}
                />
              </div>
            </div>
            <div className="question-item-box">
              <p className="item-label-box">
                <label for="pw" className="writing-question-title">
                  비밀번호
                </label>
              </p>
              <div className="item-input-box">
                <input
                  type="password"
                  id="question-password"
                  value={newPassword}
                  onChange={passwordInput}
                />
              </div>
            </div>
            <div className="question-item-box">
              <p className="item-label-box">
                <label for="contact" className="writing-question-title req">
                  연락처
                </label>
              </p>
              <div className="item-input-box">
                <input
                  type=""
                  id="question-contact"
                  value={newPhone}
                  onChange={phoneInput}
                />
              </div>
            </div>
            <div className="question-item-box">
              <p className="item-label-box">
                <label for="mail" className="writing-question-title req">
                  E-mail
                </label>
              </p>
              <div className="item-input-box">
                <input
                  type="email"
                  id="question-email"
                  value={newEmail}
                  onChange={emailInput}
                />
              </div>
            </div>
            <div className="question-item-box">
              <p className="item-label-box">
                <label for="title" className="writing-question-title">
                  제목
                </label>
              </p>
              <div className="item-input-box">
                <input
                  id="question-title"
                  // value={newTitle}
                  // onChange={TitleInput}
                ></input>
              </div>
            </div>
            <div className="question-item-box">
              <p className="item-label-box">
                <label for="content" className="writing-question-title">
                  문의사항
                </label>
              </p>
              <div className="item-input-box">
                <div className="item-content-box">
                  <textarea
                    id="question-content"
                    value={newContent}
                    onChange={contentInput}
                  ></textarea>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        <div className="question-btn-box">
          <button className="question-submit-btn" onClick={createQuestion}>
            작성하기
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default WritingQuestion;
