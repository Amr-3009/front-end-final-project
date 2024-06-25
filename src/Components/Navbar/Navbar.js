import React from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import WebsiteLogoSVG from "../../Assets/Images/japanese-food.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <Header />
      <nav>
        <span>
          <div className="websiteLogo">
            <img src={WebsiteLogoSVG} alt="logo" />
            <p>Bistro Bliss</p>
          </div>
        </span>
        <ul>
          <li>
            <NavLink className="hoverEff" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hoverEff" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="hoverEff" to="/menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="hoverEff" to="/user-login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="hoverEff" to="/user-register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className="hoverEff" to="/admin-panel">
              Admin Panel
            </NavLink>
          </li>
          <li>
            <NavLink className="hoverEff" to="/user-profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="hoverEff" to="/logout">
              Log out
            </NavLink>
          </li>
        </ul>
        <NavLink className="btn" to="/booking">
          Book A Table
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
