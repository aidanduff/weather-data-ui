import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div
      className="jumbotron jumbotron-fluid bg-dark text-white"
      style={{ maxHeight: "200px" }}
    >
      <div className="container">
        <h1 className="display-4">Rainy Days</h1>
        <p className="lead">
          Historical rainfall data for Athlone, obtained from gov.ie<br></br>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/upload">
                Upload
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
