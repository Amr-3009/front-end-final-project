import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="textContainer">
          <div className="phoneNumber">
            <HiOutlinePhone className="headerIcon" />
            <p>(414) 857 - 0107</p>
          </div>
          <div className="emailAddress">
            <LuMail className="headerIcon" />
            <p>yummy@bistrobliss</p>
          </div>
        </div>
        <div className="socialsContainer">
          <div className="iconContainer">
            <TfiTwitterAlt className="twitterIcon" />
          </div>
          <div className="iconContainer">
            <TiSocialFacebook className="facebookIcon" />
          </div>
          <div className="iconContainer">
            <IoLogoInstagram className="instaIcon" />
          </div>
          <div className="iconContainer">
            <FaGithub className="githubIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
