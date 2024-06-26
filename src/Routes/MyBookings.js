import React from "react";
import MyBookingsComp from "../Components/MyBookingsComp/MyBookingsComp";
import LoginPlease from "./LoginPlease";

const MyBookings = () => {
  const userId = localStorage.getItem("UserId");
  return <>{userId !== null ? <MyBookingsComp /> : <LoginPlease />}</>;
};

export default MyBookings;
