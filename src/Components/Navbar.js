import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => (

  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode === "light" ? "null" : "dark"}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.clicked} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color : props.mode === 'light' ? 'black':'white'}}>{props.mode === 'light' ? 'Enable Dark Mode':'Disable Dark Mode'}</label>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: "Set the title here",
}