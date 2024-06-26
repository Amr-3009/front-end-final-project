import React from "react";
import MyBookingsComp from "../Components/MyBookingsComp/MyBookingsComp";
import LoginPlease from "./LoginPlease";
import Error from "./Error";

const MyBookings = () => {
  const userId = localStorage.getItem("UserId");
  const adminId = localStorage.getItem("AdminId");
  return (
    <>
      {userId === null && adminId === null ? (
        <LoginPlease />
      ) : userId !== null ? (
        <MyBookingsComp />
      ) : (
        <Error />
      )}
    </>
  );
};

export default MyBookings;
