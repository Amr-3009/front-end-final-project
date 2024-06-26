import React from "react";
import BookingComp from "../Components/BookingPage/BookingComp";
import LoginPlease from "./LoginPlease";
import Error from "./Error";

const Booking = () => {
  const userId = localStorage.getItem("UserId");
  const adminId = localStorage.getItem("AdminId");
  return (
    <>
      {userId === null && adminId === null ? (
        <LoginPlease />
      ) : userId !== null ? (
        <BookingComp />
      ) : (
        <Error />
      )}
    </>
  );
};

export default Booking;
