import React from "react";
import "./BookingComp.css";

const BookingComp = () => {
  return (
    <div className="body">
      <div className="filler"></div>
      <div className="bookingWrapper">
        <div className="bookingText">
          <h1>Book A Table</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="bookingForm">
          <form>
            <div className="row">
              <div className="rowElement">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  value={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="rowElement">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  value={new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                />
              </div>
            </div>
            <div className="row">
              <div className="rowElement">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="rowElement">
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder="xxx-xxxx-xxxx" />
              </div>
            </div>
            <div className="selectorRow">
              <label htmlFor="people">Number of People</label>
              <select>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
                <option value="9">9 People</option>
                <option value="10">10 People</option>
              </select>
            </div>
            <button className="filledBtn">Book A Table</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingComp;
