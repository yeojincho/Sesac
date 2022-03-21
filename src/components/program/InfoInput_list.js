import React from "react";
import InfoInput_item from './InfoInput_item';
import './infoinput.css';

const InfoInput_list = ({student, onDel}) => {
    return (
        <ul className="inputUlFlex">
            {
                student.map(item => <InfoInput_item key={item.id} item={item} onDel={onDel} />)
            }
        </ul>
    )
}

export default InfoInput_list;