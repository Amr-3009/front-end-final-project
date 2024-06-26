import React from "react";
import RegisterComp from "../Components/Signing/Register/RegisterComp";
import Error from "./Error";

const Register = () => {
  const adminId = localStorage.getItem("AdminId");
  const userId = localStorage.getItem("UserId");
  return <>{adminId === null && userId === null ? <RegisterComp /> : <Error />}</>;
};

export default Register;
