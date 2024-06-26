import React from "react";
import ViewBookingsComp from "../Components/ViewBookings/ViewBookingsComp";
import Error from "./Error";

const ViewBookings = () => {
  const adminId = localStorage.getItem("AdminId");
  return <>{adminId !== null ? <ViewBookingsComp /> : <Error />}</>;
};

export default ViewBookings;
