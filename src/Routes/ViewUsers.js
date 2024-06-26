import React from "react";
import ViewUsersComp from "../Components/ViewUsersComp/ViewUsersComp";
import Error from "./Error";

const ViewUsers = () => {
  const adminId = localStorage.getItem("AdminId");
  return <>{adminId !== null ? <ViewUsersComp /> : <Error />}</>;
};

export default ViewUsers;
