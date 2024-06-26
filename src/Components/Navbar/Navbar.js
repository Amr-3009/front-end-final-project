import React from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import WebsiteLogoSVG from "../../Assets/Images/japanese-food.svg";
import "./Navbar.css";

const Navbar = () => {
  const userId = localStorage.getItem("UserId");
  const adminId = localStorage.getItem("AdminId");
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
          {userId === null && adminId === null ? (
            <li>
              <NavLink className="hoverEff" to="/user-login">
                Login
              </NavLink>
            </li>
          ) : null}
          {userId === null ? (
            <li>
              <NavLink className="hoverEff" to="/user-register">
                Register
              </NavLink>
            </li>
          ) : null}
          {adminId !== null ? (
            <li>
              <NavLink className="hoverEff" to="/admin-panel">
                Admin Panel
              </NavLink>
            </li>
          ) : null}
          {userId !== null ? (
            <>
              <li>
                <NavLink className="hoverEff" to="/user-profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink className="hoverEff" to="/my-bookings">
                  My Bookings
                </NavLink>
              </li>
            </>
          ) : null}
          {userId !== null || adminId !== null ? (
            <li>
              <NavLink className="hoverEff" to="/logout">
                Log out
              </NavLink>
            </li>
          ) : null}
        </ul>
        <NavLink
          className="btn"
          to={userId !== null ? "/booking" : "/login-please"}
        >
          Book A Table
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
