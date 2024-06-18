import React from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import WebsiteLogoSVG from "../../Assets/Images/japanese-food.svg";
import "./Navbar.css";

const Navbar = () => {
  // const userToken = false;
  // const adminToken = false;
  const userToken = true;
  const adminToken = true;
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
            <NavLink className="hoverEff" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="hoverEff" to="/register">
              Register
            </NavLink>
          </li>
          {adminToken ? (
            <li>
              <NavLink className="hoverEff" to="/admin-panel">
                Admin Panel
              </NavLink>
            </li>
          ) : null}
          {userToken ? (
            <li>
              <NavLink className="hoverEff" to="/user-profile">
                Profile
              </NavLink>
            </li>
          ) : null}
        </ul>
        {userToken ? (
          <NavLink className="btn" to="/booking">
            Book A Table
          </NavLink>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
