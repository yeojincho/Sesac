import React, { useRef, useState } from "react";
import InfoInput_table from './InfoInput_table';
import InfoInput_list from './InfoInput_list';
import InfoInput_data from './InfoInput_data';

import './infoinput.css';

const InfoInput_section = () => {
    const no = useRef(InfoInput_data.length + 1) // 고유 아이디가 될 변수: 아이디에 맞춰 삭제
    const [student, setStudent] = useState(InfoInput_data); //데이터 상태

    const onDel = (id) => {
        setStudent(student.filter(student => student.id !== id))
    }

    const onAdd=(form)=>{
        form.id = no.current++
        setStudent(student.concat(form))
    }

    return(
        <div>
            <div className="table_info">
                <InfoInput_table onAdd={onAdd}/>
            </div>
            <InfoInput_list student={student} onDel={onDel} />
            <h6 className="inputTotal">총 인원: {student.length}</h6>
        </div>
    )
}

export default InfoInput_section;