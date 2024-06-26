import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const MyBookingsComp = () => {
  const userId = localStorage.getItem("UserId");
  const [bookings, setBookings] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user-bookings/${userId}`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);
  return (
    <div className="viewMenuWrapper">
      <h1>My Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.Number_of_people}</td>
              <td
                className={
                  booking.status === "Accepted"
                    ? "accepted"
                    : booking.status === "Rejected"
                    ? "rejected"
                    : null
                }
              >
                <p>{booking.status}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingsComp;
