import React from "react";
import AdminRegisterComp from "../Components/Signing/Register/AdminRegisterComp";
import Error from "./Error";

const AdminRegister = () => {
  const adminId = localStorage.getItem("AdminId");
  return <>{adminId !== null ? (<AdminRegisterComp />) : (<Error/>)}</> 
};

export default AdminRegister;
