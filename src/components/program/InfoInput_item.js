import React from "react";
import './infoinput.css';

const InfoInput_item = ({item, onDel}) => {
    const {id, name, birth, contact, email, company, depart, position} = item

    return(
        <li className="mrgn-left infoItemDel">
            <button className="infoItemDelBtn" onClick={()=>onDel(id)}>삭제</button>
            <div>
                <h5 className="infoItemTit">신청 정보</h5>
                <ul>
                    <li><p className="manage-userinfo">이름: {name} </p></li>
                    <li><p className="manage-userinfo">생년월일: {birth} </p></li>
                    <li><p className="manage-userinfo">연락처: {contact} </p></li>
                    <li><p className="manage-userinfo">이메일: {email} </p></li>
                    <li><p className="manage-userinfo">회사명: {company} </p></li>
                    <li><p className="manage-userinfo">부서명: {depart} </p></li>
                    <li><p className="manage-userinfo">직위: {position} </p></li>
                </ul>
            </div>
        </li>
    )
}

export default InfoInput_item;