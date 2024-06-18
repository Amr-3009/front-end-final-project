import React from "react";
import "./TestimonialsSection.css";
import user1 from "../../Assets/Images/user-1.png";
import user2 from "../../Assets/Images/user-2.png";
import user3 from "../../Assets/Images/user-3.png";

const TestimonialsSection = () => {
  return (
    <div className="testimonialsSectionWrapper">
      <h2>What Our Customers Say</h2>
      <div className="cardsContainer">
        <div className="card">
          <p className="title">“The best restaurant”</p>
          <p className="content">
            Last night, we dined at place and were simply blown away. From the
            moment we stepped in, we were enveloped in an inviting atmosphere
            and greeted with warm smiles.
          </p>
            <hr className="divider"/>
          <div className="userCard">
            <div className="userImage">
              <img src={user1} alt="user1" />
            </div>
            <div className="userInfo">
              <p className="userName">Sophire Robson</p>
              <p className="userAddress">Los Angeles, CA</p>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="title">“Simply delicious”</p>
          <p className="content">
            Place exceeded my expectations on all fronts. The ambiance was cozy
            and relaxed, making it a perfect venue for our anniversary dinner.
            Each dish was prepared and beautifully presented.
          </p>
          <hr className="divider"/>
          <div className="userCard">
            <div className="userImage">
              <img src={user2} alt="user2" />
            </div>
            <div className="userInfo">
              <p className="userName">Matt Cannon</p>
              <p className="userAddress">San Diego, CA</p>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="title">“One of a kind restaurant”</p>
          <p className="content">
            The culinary experience at place is first to none. The atmosphere is
            vibrant, the food - nothing short of extraordinary. The food was the
            highlight of our evening. Highly recommended.
          </p>
          <hr className="divider"/>
          <div className="userCard">
            <div className="userImage">
              <img src={user3} alt="user3" />
            </div>
            <div className="userInfo">
              <p className="userName">Andy Smith</p>
              <p className="userAddress">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
