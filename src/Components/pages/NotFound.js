import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <div className="container">
            <h1 className="text-center" style={{"color":"red"}}> Something is wrong</h1>
            <h2 className="text-center" style={{"color":"red"}}>Page you are looking for not found!</h2>
            <h3 className="text-center">You may not have registred </h3>
            <Link to="/" className="d-flex justify-content-center mt-3"><button className="btn btn-dark ">Register Here!</button></Link>
        </div>
    )
}

export default NotFound;
