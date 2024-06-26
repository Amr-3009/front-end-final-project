import React from "react";
import "../signing.css";
import { Link, useNavigate } from "react-router-dom";

const LogoutComp = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("UserToken");
    localStorage.removeItem("AdminToken");
    localStorage.removeItem("UserId");
    localStorage.removeItem("AdminId");
    navigate("/home");
    window.location.reload();
  };
  return (
    <>
      <div className="filler"></div>
      <div className="sectionWrapper">
        <h1>We are sad to see you go</h1>
        <p>Hope to see you again soon</p>
        <div className="buttonWrapper">
          <p>Are you sure you want to log out?</p>
          <div className="buttons">
            <button className="ghostBtn" onClick={handleLogout}>
              Log out
            </button>
            <Link className="filledBtn" to="/home">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutComp;
