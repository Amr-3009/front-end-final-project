import React from "react";
import "../signing.css";
import { Link } from "react-router-dom";

const LoginComp = () => {
  return (
    <>
      <div className="filler"></div>
      <div className="sectionWrapper">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
          <p>
            Our admins kindly login <Link to="/admin-login">here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginComp;
