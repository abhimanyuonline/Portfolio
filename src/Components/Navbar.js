import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }}></FaTimes>
        ) : (
          <FaBars size={20} style={{ color: "#fff" }}></FaBars>
        )}
      </div>
    </div>
  );
};

export default Navbar;
