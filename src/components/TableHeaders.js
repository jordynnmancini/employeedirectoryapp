import React from 'react';

function TableHeaders(props) {
    return (
            <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Hire Date
                    <button onClick={props.sortAsc}><i class="fas fa-long-arrow-alt-up"></i></button>
                    <button onClick={props.sortDesc}><i class="fas fa-long-arrow-alt-down"></i></button></th>
            </tr>
    )
}

export default TableHeaders;