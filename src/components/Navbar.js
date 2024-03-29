import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* Use the require syntax to import the image */}
        <Link className="navbar-brand" to="/">
          <img src={require("../images/Logo.png")} width="40" className="d-inline-block align-top" alt="FITPUY Logo" />
          <span className="align-top" style={{ verticalAlign: 'middle', display: 'inline-block', marginTop: '5px' }}>FITPUY</span>
        </Link>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bmi-calculator">BMI Calculator</Link>
            </li>
          </ul>
        </div>

        {/* Profile Picture and Bell Icon (Aligned Right) */}
        <img src={require("../images/Profile.png")} alt="Profile Picture" className="profile-picture ml-auto" />
      </div>
    </nav>
  );
};

export default Navbar;
