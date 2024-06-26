import React from "react";
import { NavLink } from "react-router-dom";
import WebsiteLogoSVG from "../../Assets/Images/japanese-food.svg";
import "./Navbar.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const userId = localStorage.getItem("UserId");
  const adminId = localStorage.getItem("AdminId");
  const [showMenu, setShowMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const NavCollapse = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
      setToggleMenu(!toggleMenu);
    }
  };
  return (
    <header>
      <nav>
        <span>
          <div className="websiteLogo">
            <img src={WebsiteLogoSVG} alt="logo" />
            <p>Bistro Bliss</p>
          </div>
        </span>
        <ul className={showMenu ? "bigMenu" : undefined}>
          <div className="links">
            {setShowMenu ? (
              <IoIosArrowUp
                size={40}
                onClick={() => {
                  setShowMenu(!showMenu);
                  setToggleMenu(!toggleMenu);
                }}
              />
            ) : null}
            <li>
              <NavLink className="hoverEff" to="/home" onClick={NavCollapse}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hoverEff" to="/about" onClick={NavCollapse}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="hoverEff" to="/menu" onClick={NavCollapse}>
                Menu
              </NavLink>
            </li>
            {userId === null && adminId === null ? (
              <li>
                <NavLink
                  className="hoverEff"
                  to="/user-login"
                  onClick={NavCollapse}
                >
                  Login
                </NavLink>
              </li>
            ) : null}
            {userId === null ? (
              <li>
                <NavLink
                  className="hoverEff"
                  to="/user-register"
                  onClick={NavCollapse}
                >
                  Register
                </NavLink>
              </li>
            ) : null}
            {adminId !== null ? (
              <li>
                <NavLink
                  className="hoverEff"
                  to="/admin-panel"
                  onClick={NavCollapse}
                >
                  Admin Panel
                </NavLink>
              </li>
            ) : null}
            {userId !== null ? (
              <>
                <li>
                  <NavLink
                    className="hoverEff"
                    to="/user-profile"
                    onClick={NavCollapse}
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hoverEff"
                    to="/my-bookings"
                    onClick={NavCollapse}
                  >
                    My Bookings
                  </NavLink>
                </li>
              </>
            ) : null}
            {userId !== null || adminId !== null ? (
              <li>
                <NavLink
                  className="hoverEff"
                  to="/logout"
                  onClick={NavCollapse}
                >
                  Log out
                </NavLink>
              </li>
            ) : null}
          </div>
          <div className="bookingLink">
            <li>
              <NavLink
                className="btn"
                to={userId !== null ? "/booking" : "/login-please"}
                onClick={NavCollapse}
              >
                Book A Table
              </NavLink>
            </li>
          </div>
        </ul>
        {toggleMenu ? null : (
          <IoIosArrowDown
            size={40}
            onClick={() => {
              setShowMenu(!showMenu);
              setToggleMenu(!toggleMenu);
            }}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
