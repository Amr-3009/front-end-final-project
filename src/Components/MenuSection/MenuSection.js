import React from "react";
import { Link } from "react-router-dom";
import MainDish from "../../Assets/svg/MainDish";
import BreakFast from "../../Assets/svg/BreakFast";
import DrinkVector from "../../Assets/svg/DrinkVector";
import DessertVector from "../../Assets/svg/DessertVector";
import "./MenuSection.css";

const MenuSection = () => {
  return (
    <>
      <div className="menuSectionWrapper">
        <h2>Browse Our Menu</h2>
        <div className="cardContainer">
          <div className="card">
            <div className="iconContainer">
              <BreakFast />
            </div>
            <div className="textContainer">
              <h3>Breakfast</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
            </div>
            <Link to="/menu">Explore Menu</Link>
          </div>
          <div className="card">
            <div className="iconContainer">
              <MainDish />
            </div>
            <div className="textContainer">
              <h3>Main Dishes</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
            </div>
            <Link to="/menu">Explore Menu</Link>
          </div>
          <div className="card">
            <div className="iconContainer">
              <DrinkVector />
            </div>
            <div className="textContainer">
              <h3>Drinks</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
            </div>
            <Link to="/menu">Explore Menu</Link>
          </div>
          <div className="card">
            <div className="iconContainer">
              <DessertVector />
            </div>
            <div className="textContainer">
              <h3>Dessert</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
            </div>
            <Link to="/menu">Explore Menu</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
