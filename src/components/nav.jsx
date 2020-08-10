import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="jumbotron jumbotron-fluid" style={{ maxHeight: "250px" }}>
      <div className="container">
        <h1 className="display-4">Rainy Days in Athlone</h1>
        <p className="lead">
          Historical rainfall data for Athlone, obtained from gov.ie<br></br>
          <br></br>
          <Link to="/"> Home </Link>
          <Link to="/upload"> Upload </Link>
          <a href=""></a>
        </p>
      </div>
    </div>
  );
};

export default Nav;
