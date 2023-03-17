
import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props){
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
             <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.Mode==='light'?'Enable':'Disable'} Dark mode</label>
          </div>
          </div>
 
        </div>
    </nav>
    </>
    )      
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Navbar'
};


export default Navbar;