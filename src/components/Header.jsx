import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../assets/header-logo1.png"; // Update the path as needed
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger and close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>

      {/* Regular Navigation Links */}
      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
      <button className="sign-in-button">Sign In</button>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <AiOutlineMenu size={24} />
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {/* Close Menu Icon */}
        <button className="close-menu" onClick={toggleMenu}>
          <AiOutlineClose size={24} />
        </button>

        <ul>
          <li><NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={toggleMenu}>About Us</NavLink></li>
          <li><NavLink to="/services" className="nav-link" onClick={toggleMenu}>Services</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
