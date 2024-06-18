import React from "react";
import kebabImage from "../../Assets/Images/kebab-set-table 1.png";
import birthdayImage from "../../Assets/Images/birthday-image.png";
import weddingImage from "../../Assets/Images/weddings-images.png";
import eventsImage from "../../Assets/Images/events-image.png";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <>
      <div className="servicesSectionWrapper">
        <h2>We aslo offer unique services for your events</h2>
        <div className="cardContainer">
          <div className="card">
            <img src={kebabImage} alt="kebab set" />
            <h3>Caterings</h3>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className="card">
          <img src={birthdayImage} alt="" />
          <h3>Birthdays</h3>
          <p>
            In the new era of technology we look in the future with certainty
            for life.
          </p>
        </div>
        <div className="card">
          <img src={weddingImage} alt="" />
          <h3>Weddings</h3>
          <p>
            In the new era of technology we look in the future with certainty
            for life.
          </p>
        </div>
        <div className="card">
          <img src={eventsImage} alt="" />
          <h3>Events</h3>
          <p>
            In the new era of technology we look in the future with certainty
            for life.
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
