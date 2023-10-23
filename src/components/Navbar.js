import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="top-nav">
        <div className="logo">
          <h1>
            <Link to="/">Shop Tendance</Link>
          </h1>
        </div>
        <input
          id="menu-toggle"
          type="checkbox"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li className="categorie">
            <Link to="/Hommes" onClick={toggleMenu}>
              Hommes
            </Link>
          </li>
          <li>
            <Link to="/Femmes" onChange={toggleMenu}>
              Femmes
            </Link>
          </li>
          <li>
            <Link to="/Enfants" onClick={toggleMenu}>
              Enfants
            </Link>
          </li>
          <li>
            <Link to="/Ados" onClick={toggleMenu}>
              Ados
            </Link>
          </li>
          <li>
            <Link to="/Bebes" onClick={toggleMenu}>
              Bebes
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
