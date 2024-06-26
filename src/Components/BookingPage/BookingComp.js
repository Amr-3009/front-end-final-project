import React from "react";
import "./BookingComp.css";
import { useState } from "react";
import axios from "axios";

const BookingComp = () => {
  const userId = localStorage.getItem("UserId");
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    Number_of_people: "",
    user_id: userId,
  });
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    const bookingData = new FormData();
    bookingData.append("date", booking.date);
    bookingData.append("time", booking.time);
    bookingData.append("name", booking.name);
    bookingData.append("phone", booking.phone);
    bookingData.append("Number_of_people", booking.Number_of_people);
    bookingData.append("user_id", userId);

    for (let [key, value] of bookingData.entries()) {
      console.log(`${key}: ${value}`);
    }

    axios
      .post(`http://127.0.0.1:8000/api/booking`, bookingData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
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
          <form method="POST" onSubmit={(e) => formSubmit(e)}>
            <div className="row">
              <div className="rowElement">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={booking.date}
                  onChange={(e) =>
                    setBooking({ ...booking, date: e.target.value })
                  }
                />
              </div>
              <div className="rowElement">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={booking.time}
                  onChange={(e) =>
                    setBooking({ ...booking, time: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="rowElement">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={booking.name}
                  onChange={(e) =>
                    setBooking({ ...booking, name: e.target.value })
                  }
                />
              </div>
              <div className="rowElement">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="xxx-xxxx-xxxx"
                  name="phone"
                  id="phone"
                  value={booking.phone}
                  onChange={(e) =>
                    setBooking({ ...booking, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="selectorRow">
              <label htmlFor="people">Number of People</label>
              <select
                id="people"
                name="Number_of_people"
                value={booking.Number_of_people}
                onChange={(e) =>
                  setBooking({ ...booking, Number_of_people: e.target.value })
                }
              >
                <option value="0">Select Number of People</option>
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
            <button className="filledBtn" onClick={handleSubmit}>
              Book A Table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingComp;
