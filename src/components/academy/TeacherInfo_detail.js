import React from "react";
import Menu_title from "./Menu_title";
import "./TeacherInfo_detail.css";

export default function TeacherInfo_detail({ name, edu, src, moto }) {
  return (
    <div className='t_infoContainer'>
      <button className='t_btn'>강사인터뷰</button>
      <a href='#' className='imgBox'>
        <img src={src} alt='강사이미지' className='t_img' />
      </a>
      <a href='#' className='t_titleInfo'>
        <h2>{name} 강사</h2>
        <p className='t_motto'>{moto}</p>
      </a>
      <div className='t_historyBox'>
        <p className='t_history'>{edu.one}</p>
        <p className='t_history'>{edu.two}</p>
        <p className='t_history'>{edu.three}</p>
      </div>
      <div className='t_lectureBox'>
        <h3>대표강의</h3>
        <select name='lectureList' id='lectureList'>
          <option value=''>-----일정선택-----</option>
          <option value='1'>HTML</option>
          <option value='2'>CSS</option>
          <option value='3'>javascript</option>
          <option value='4'>react</option>
        </select>
      </div>
    </div>
  );
}
