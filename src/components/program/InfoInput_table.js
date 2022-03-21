import React from "react";

import '../common/common.css';
import './infoinput.css';

// id="defaultTableItem"

function InfoInput_table() {
    return(
        <table className='infoTable'>
            <tbody>
                <tr>
                    <td rowSpan={4}>
                        <input type="checkbox" />
                    </td>
                    <th>
                        성명 *
                    </th>
                    <td>
                        
                    </td>
                    <th>
                        생년월일(ex.2020.01.01) *
                    </th>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <th>
                        연락처(ex.010-1111-1111) *
                    </th>
                    <td>
                        
                    </td>
                    <th>
                        E-mail *
                    </th>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <th>
                        회사명
                    </th>
                    <td colSpan={3}>
                        
                    </td>
                </tr>
                <tr>
                    <th>
                        부서명
                    </th>
                    <td>
                        
                    </td>
                    <th>
                        직위
                    </th>
                    <td>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


export default InfoInput_table;