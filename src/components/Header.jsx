import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../assets/header-logo1.png"; // Update path as needed
import { AiOutlineMenu } from "react-icons/ai"; // Hamburger icon

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src={logoImage} alt="Logo" className="logo-image" height="40" />
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu size={24} className="text-dark" />
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/market">
                Market
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Sign In Button */}
          <a
            href="https://paycoin-dashboard.netlify.app/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary ms-3"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
