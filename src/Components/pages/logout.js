import React from 'react';
import {Link} from 'react-router-dom';

function logout(props) {
    return (
        <div className="container text-center">
            <h1>You Are logged Out Successfully</h1>
            <button className="btn btn-dark"><Link to='/'>Login Again</Link></button>
        </div>
    )
}

export default logout
