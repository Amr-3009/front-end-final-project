import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const userId = localStorage.getItem("UserId");
  const adminId = localStorage.getItem("AdminId");
  return (
    <>
      <div className="heroSection">
        <div className="heroText">
          <h1>Best food for your taste</h1>
          <p>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
        </div>
        <div className="btnContainer">
          <Link
            className="filled-btn"
            to={userId !== null ? "/booking" : "/login-please"}
          >
            Book A Table
          </Link>
          <Link className="ghost-btn" to="/menu">
            Explore Menu
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
