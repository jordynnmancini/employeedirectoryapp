import React from 'react';

function TableHeaders(props) {
    return (
            <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Hire Date
                    <button onClick={props.sortAsc}>Asc</button>
                    <button onClick={props.sortDesc}>Desc</button></th>
            </tr>
    )
}

export default TableHeaders;