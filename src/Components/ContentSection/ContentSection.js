import React from "react";
import "./ContentSection.css";
import cookImage from "../../Assets/Images/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png";
import mealImage1 from "../../Assets/Images/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png";
import mealImage2 from "../../Assets/Images/sadj-iron-pot-with-various-salads 1.png";
import TimeIcon from "../../Assets/svg/TimeIcon";
import SalesIcon from "../../Assets/svg/SalesIcon";
import CartIcon from "../../Assets/svg/CartIcon";

const ContentSection = () => {
  return (
    <div className="contentSectionWrapper">
      <div className="imageContainer">
        <img className="mainImage" src={cookImage} alt="" />
        <div className="imageWrapper">
          <img src={mealImage1} alt="" />
          <img src={mealImage2} alt="" />
        </div>
      </div>
      <div className="textContainer">
        <div className="description">
          <h2>Fastest Food Delivery in City</h2>
          <p>
            Our visual designer lets you quickly and of drag a down your way to
            custom apps for both keep desktop.
          </p>
        </div>
        <div className="featuresContainer">
          <div className="row">
            <TimeIcon />
            <p>Delivery within 30 minutes</p>
          </div>
          <div className="row">
            <SalesIcon />
            <p>Best Offer & Prices</p>
          </div>
          <div className="row">
            <CartIcon />
            <p>Online Services Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
