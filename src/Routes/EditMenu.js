import React from "react";
import EditMenuComp from "../Components/EditMenuComp/EditMenuComp";
import Error from "./Error";

const EditMenu = () => {
  const adminId = localStorage.getItem("AdminId");
  return <>{adminId !== null ? <EditMenuComp /> : <Error />}</>;
};

export default EditMenu;
