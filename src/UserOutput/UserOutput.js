import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My username: {props.username}</p>
            <p>Paragraph</p>
        </div>
    );
}

export default UserOutput;