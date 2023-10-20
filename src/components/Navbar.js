import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li>
          <h1>
            <Link to="/">Shop Tendance</Link>
          </h1>
        </li>
        <li>
          <Link to="/Hommes">Hommes</Link>
        </li>
        <li>
          <Link to="/Femmes">Femmes</Link>
        </li>
        <li>
          <Link to="/Enfants">Enfants</Link>
        </li>
        <li>
          <Link to="/Ados">Ados</Link>
        </li>
        <li>
          <Link to="/Bebes">Bebes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
