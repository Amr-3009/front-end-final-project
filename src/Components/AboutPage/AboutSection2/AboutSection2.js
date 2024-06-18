import React from "react";
import "./AboutSection2.css";
import PlayIcon from "../../../Assets/svg/PlayIcon";
import MenuIcon from "../../../Assets/svg/MenuIcon";
import OvenIcon from "../../../Assets/svg/OvenIcon";
import TimerIcon from "../../../Assets/svg/TimerIcon";

const AboutSection2 = () => {
  return (
    <div className="aboutSection2Wrapper">
      <div className="mainContentWrapper">
        <div className="heroWrapper">
          <div className="iconWrapper">
            <PlayIcon />
          </div>
          <h2>Feel the authentic & original taste from us</h2>
        </div>
      </div>
      <div className="featuresWrapper">
        <div className="feature">
          <div className="IconWrapper">
            <MenuIcon />
          </div>
          <div className="featureContent">
            <h3>Multi Cuisine</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="IconWrapper">
            <OvenIcon />
          </div>
          <div className="featureContent">
            <h3>Easy To Order</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="IconWrapper">
            <TimerIcon />
          </div>
          <div className="featureContent">
            <h3>Fast Delivery</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
