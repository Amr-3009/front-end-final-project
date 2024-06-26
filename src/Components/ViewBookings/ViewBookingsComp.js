import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewBookings.css";

const ViewBookingsComp = () => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/bookings")
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleAccept = (id) => {
    axios
      .put(`http://127.0.0.1:8000/api/accept-booking/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleReject = (id) => {
    axios
      .put(`http://127.0.0.1:8000/api/reject-booking/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="viewMenuWrapper">
      <h1>Bookings</h1>
      <div className="responsiveTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th colSpan={2}>Actions</th>
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
                    booking.status === "Pending"
                      ? "accept"
                      : booking.status === "Accepted"
                      ? "accepted"
                      : null
                  }
                >
                  {booking.status === "Pending" ? (
                    <button onClick={() => handleAccept(booking.id)}>
                      Accept
                    </button>
                  ) : booking.status === "Accepted" ? (
                    <p>Accepted</p>
                  ) : booking.status === "Rejected" ? (
                    <p>Accept</p>
                  ) : null}
                </td>
                <td
                  className={
                    booking.status === "Pending"
                      ? "reject"
                      : booking.status === "Rejected"
                      ? "rejected"
                      : null
                  }
                >
                  {booking.status === "Pending" ? (
                    <button onClick={() => handleReject(booking.id)}>
                      Reject
                    </button>
                  ) : booking.status === "Rejected" ? (
                    <p>Rejected</p>
                  ) : booking.status === "Accepted" ? (
                    <p>Reject</p>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBookingsComp;
