import React from 'react';
import {Link} from 'react-router-dom';


const Navbar=() => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                <div className="container">
                    <Link to="/"  className="navbar-brand text-white" href><i className="fas fa-users fa-lg m-1"/> Census Profling</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                        {/* <Link to="/" className="nav-item nav-link text-white mr-1"><span className="fa fa-sign-in fa-md m-1"></span> Login</Link> */}
                        <Link to="/about" className="nav-item nav-link text-white mr-1"><span className="fa fa-info fa-md m-1"></span> About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;