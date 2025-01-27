import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-header">
        <span className="account-login">ACCOUNT LOGIN</span>
        <h1 className="login-title">Login to PayCoin</h1>
      </div>
      <form className="login-form">
        <h2 className="form-heading">Login Your Account</h2>
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-input"
            required
          />
        </div>
        <div className="form-footer">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <NavLink to="/forgot-password" className="forgot-password">
            Forgot Password?
          </NavLink>
        </div>
        <button type="submit" className="submit-button">
          Login <span className="arrow">↗</span>
        </button>
        <p className="register-prompt">
          Not a Member?{" "}
          <NavLink to="/register" className="register-link">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
