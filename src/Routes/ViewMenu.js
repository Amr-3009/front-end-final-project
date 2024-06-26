import React from "react";
import ViewMenuComp from "../Components/ViewMenuComp/ViewMenuComp";
import Error from "./Error";

const ViewMenu = () => {
  const adminId = localStorage.getItem("AdminId");
  return <>{adminId !== null ? <ViewMenuComp /> : <Error />}</>;
};

export default ViewMenu;
