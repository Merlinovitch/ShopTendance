import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
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
  );
};

export default Navbar;
