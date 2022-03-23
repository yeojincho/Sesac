import React from "react";
import Menu_title from "./Menu_title";
import "./TeacherInfo_detail.css";

export default function TeacherInfo_detail({ name, edu, src, expertise }) {
  return (
    <div className="t_infoContainer">
      <div className="t_img-box">
        <a href="https://www.youtube.com/watch?v=w-HAjo8PhVo" target="_blank">
          <img src={src} alt="강사이미지" className="t_img" />
        </a>
        <h2 className="t_name">{name}</h2>
        <button className="t_btn">강사인터뷰</button>
      </div>
      <div className="t_content-box">
        <div className="t_titleInfo">
          <div className="t_historyBox">
            <h3>학력 및 경력</h3>
            <p className="t_history">{edu.one}</p>
            <p className="t_history">{edu.two}</p>
            <p className="t_history">{edu.three}</p>
          </div>
          <p className="t_expertise">
            강의분야 : <span>{expertise}</span>
          </p>
        </div>
        <div className="t_lectureBox">
          <h3>대표강의</h3>
          <select name="lectureList" id="lectureList">
            <option value="">--------------- 일정선택 ---------------</option>
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">javascript</option>
            <option value="4">react</option>
          </select>
        </div>
      </div>
    </div>
  );
}
