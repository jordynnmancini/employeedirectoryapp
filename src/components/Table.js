import React from 'react';

function Table(props) {
    return (
        <table>
            <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Hire Date</th>
            </tr>
            <tr>
                <td><img src={props.thumbnail} /></td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.hiredate}</td>
            </tr>
        </table>
    )
}

export default Table;