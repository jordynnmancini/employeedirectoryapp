import React from 'react';

function TableData(props) {
    return (
            <tr>
                <td><img src={props.thumbnail} /></td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.hiredate}</td>
            </tr>
    )
}

export default TableData;