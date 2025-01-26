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
        <img src={logoImage} alt="Smart Mine Logo" className="logo-image" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <AiOutlineMenu size={24} />
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {/* Close Icon */}
        <button className="close-menu" onClick={toggleMenu}>
          <AiOutlineClose size={24} />
        </button>

        <ul>
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active" onClick={toggleMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/market" className="nav-link" activeClassName="active" onClick={toggleMenu}>
              Market
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav-link" activeClassName="active" onClick={toggleMenu}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button className="sign-in-button" onClick={toggleMenu}>
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
