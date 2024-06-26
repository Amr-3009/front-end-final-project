import React from "react";
import BookingComp from "../Components/BookingPage/BookingComp";
import LoginPlease from "./LoginPlease";

const Booking = () => {
  const userId = localStorage.getItem("UserId");
  return <>{userId !== null ? <BookingComp /> : <LoginPlease />}</>;
};

export default Booking;
