import React from "react";
import "./AboutSection3.css";
import AboutSection3Image from "../../../Assets/Images/aboutSection3.png";

const AboutSection3 = () => {
  return (
    <>
      <div className="aboutSection3Wrapper">
        <div className="infoWrapper">
          <div className="infoText">
            <h2>A little information for our valuable guest</h2>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
          <div className="infoCards">
            <div className="card">
              <h3>3</h3>
              <p>Locations</p>
            </div>
            <div className="card">
              <h3>1995</h3>
              <p>Founded</p>
            </div>
            <div className="card">
              <h3>65+</h3>
              <p>Staff Members</p>
            </div>
            <div className="card">
              <h3>100%</h3>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div className="imageWrapper">
          <img src={AboutSection3Image} alt="about-section-3" />
        </div>
      </div>
    </>
  );
};

export default AboutSection3;
