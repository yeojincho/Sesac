import React from "react";
import "./menu_title.css";

export default function Menu_title({ headTitle, subTitle }) {
  return (
    <div className='pageTitleBox'>
      <h1 className='headTitle'>{headTitle}</h1>
      <p className='titleDesc'>{subTitle}</p>
    </div>
  );
}
