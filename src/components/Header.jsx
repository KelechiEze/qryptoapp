import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Header.css";
import logoImage from "../assets/header-logo1.png"; // Update the path based on your folder structure

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Smart Mine Logo" className="logo-image" />
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About us
        </NavLink>
        <NavLink to="/market" className="nav-link" activeClassName="active">
          Market
        </NavLink>
        <NavLink to="/blog" className="nav-link" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">
          Contact us
        </NavLink>
      </nav>
      <button className="sign-in-button">Sign In</button>
    </header>
  );
};

export default Header;
