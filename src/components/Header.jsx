import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../assets/header-logo1.png"; // Update the path as needed
import { AiOutlineMenu } from "react-icons/ai"; // Hamburger and close icons

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
        <NavLink to="/market" className="nav-link">Market</NavLink>
        <NavLink to="/blog" className="nav-link">Blog</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
      <a href="https://mydazhboard.netlify.app/" target="_blank" rel="noopener noreferrer" className="sign-in-button">
  Sign In
</a>


      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <AiOutlineMenu size={24} />
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={toggleMenu}>About Us</NavLink></li>
          <li><NavLink to="/market" className="nav-link" onClick={toggleMenu}>Market</NavLink></li>
          <li><NavLink to="/blog" className="nav-link" onClick={toggleMenu}>Blog</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
