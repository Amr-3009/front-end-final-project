import React from "react";
import "./AboutSection.css";
import homeImg from "../../Assets/Images/about-section-image.png";
import aboutImg from "../../Assets/Images/about-section-image-2.png";
import { HiOutlinePhone } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const AboutSection = ({ currentPage }) => {
  return (
    <>
      <div
        className="aboutSectionWrapper"
        style={
          currentPage === "home"
            ? { backgroundColor: "#f9f9f7" }
            : currentPage === "about"
            ? { backgroundColor: "#fff" }
            : null
        }
      >
        <div className="imageContainer">
          {currentPage === "home" ? (
            <img src={homeImg} alt="sandwich" />
          ) : currentPage === "about" ? (
            <img src={aboutImg} alt="sandwich" />
          ) : null}
          {/* <img src={mainImg} alt="sandwich" /> */}
          <div className="contactCard">
            <h3>Come and visit us</h3>
            <div className="row">
              <HiOutlinePhone className="contactIcon" />
              <p>(414) 857 - 0107</p>
            </div>
            <div className="row">
              <LuMail className="contactIcon" />
              <p>happytummy@restaurant.com</p>
            </div>
            <div className="row">
              <SlLocationPin size={40} />
              <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
            </div>
          </div>
        </div>
        <div className="textContainer">
          <h2>We provide healthy food for your family.</h2>
          <p>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          {currentPage === "home" ? (
            <Link className="ghostBtn" to="/about">
              More About Us
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AboutSection;
