import React, { useRef, useState } from "react";
import InfoInput_section from './InfoInput_section';

import '../common/common.css';
import './infoinput.css';


function InfoInput_table({onAdd}) {
    const nameRef = useRef()

    //form에 새로 들어올 값 공간 마련
    const [form, setForm] = useState({
        name:'', birth:'', contact:'', email:'', company:'', depart:''
    })

    //여러개의 input 값을 받을 때는 아래와 같이 value와 name을 받아 넘긴다
    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault() //서브밋 후 함수 자동실행(새로고침) 방지
        if(!name && !birth && !contact && !email) return //필수 입력 항목들 -> 빈칸있으면 실행x
        onAdd(form)
        setForm({
            name:'', birth:'', contact:'', email:'', company:'', depart:''
        }) //입력한 값을 넘긴 뒤 form은 다시 reset
        nameRef.current.focus() //name란에 기본 focus
    }

    const {name, birth, contact, email, company, depart} = form;
    
    return(
        <form onSubmit={onSubmit}>
            <div className="C-btn-box inputAddBtn">
                <button className="btn-type1 small" onClick={onAdd} type="submit"><span>교육 인원 추가</span></button>
            </div>
            <table className='infoTable'>
                <tbody>
                    <tr>
                        <th>
                            <label for="inputName">성명 *</label>
                        </th>
                        <td>
                            <input type="text" id="inputName" onChange={changeInput} value={name} name="name" ref={nameRef} required/>
                        </td>
                        <th>
                            <label for="inputBirth">생년월일 &#40;ex.2020.01.01&#41; *</label>
                        </th>
                        <td>
                            <input type="text" id="inputBirth" onChange={changeInput} value={birth} name="birth" required/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="inputContact">연락처 &#40;ex.010-1111-1111&#41; *</label>
                        </th>
                        <td>
                            <input type="tel" id="inputContact" onChange={changeInput} value={contact} name="contact" required/>
                        </td>
                        <th>
                            <label for="inputEmail">E-mail *</label>
                        </th>
                        <td>
                            <input type="email" id="inputEmail" onChange={changeInput} value={email} name="email" required/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="inputCompany">회사명</label>
                        </th>
                        <td>
                            <input type="text" id="inputCompany" onChange={changeInput} value={company} name="company" />
                        </td>
                        <th>
                            <label for="inputDepart">부서명, 직위</label>
                        </th>
                        <td>
                            <input type="text" id="inputDepart" onChange={changeInput} value={depart} name="depart" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}


export default InfoInput_table;