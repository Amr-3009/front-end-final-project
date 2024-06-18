import React from "react";
import "./OrderComponent.css";
import UberEatsIcon from "../../../Assets/svg/UberEats";
import GrubHub from "../../../Assets/svg/GrubHubIcon";
import PostmatesIcons from "../../../Assets/svg/PostmatesIcons";
import DoorDashIcon from "../../../Assets/svg/DoorDashIcon";
import FoodPanda from "../../../Assets/svg/FoodPanda";
import DeliverooIcon from "../../../Assets/svg/DeliverooIcon";
import InstaCartIcon from "../../../Assets/svg/InstaCartIcon";
import JustEat from "../../../Assets/svg/JustEat";
import DiDiIcon from "../../../Assets/svg/DiDiIcon";

const OrderComponent = () => {
  return (
    <div className="orderComponentWrapper">
      <div className="orderText">
        <h2>You can order through apps</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
          sed et aliquet aliquet risus tempor semper.
        </p>
      </div>
      <div className="orderLogos">
        <div className="row1">
          <div className="icon">
            <UberEatsIcon />
          </div>
          <div className="icon">
            <GrubHub />
          </div>
          <div className="icon">
            <PostmatesIcons />
          </div>
        </div>
        <div className="row2">
          <div className="icon">
            <DoorDashIcon />
          </div>
          <div className="icon">
            <FoodPanda />
          </div>
          <div className="icon">
            <DeliverooIcon />
          </div>
        </div>
        <div className="row3">
          <div className="icon">
            <InstaCartIcon />
          </div>
          <div className="icon">
            <JustEat />
          </div>
          <div className="icon">
            <DiDiIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
