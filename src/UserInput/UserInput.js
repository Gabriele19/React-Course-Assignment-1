import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className='UserInput'>
            <input type="text" onChange={props.usernameChange} value={props.username}/>
        </div>
    );
}

export default UserInput;