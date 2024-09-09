import React from "react";
import "./NavbarStyles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Sumedh Marathe</div>
      <div className="navLinks">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
