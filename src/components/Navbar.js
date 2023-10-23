import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="top-nav">
        <div className="logo">
          <h1>
            <Link to="/">Shop Tendance</Link>
          </h1>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" for="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
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
      </section>
    </>
  );
};

export default Navbar;
