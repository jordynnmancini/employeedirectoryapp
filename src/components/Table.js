import React from 'react';

function Table(props) {
    return (
        <table>
            <tr>
                <th>Profile Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Hire Date</th>
            </tr>
            <tr>
                <td>
                    {props.thumbnail}
                </td>
                <td>{props.firstname} {props.lastname}</td>
                <td>{props.hiredate}</td>
            </tr>

        </table>
    )
}

export default Table; 