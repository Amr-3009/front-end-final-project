import React from "react";
import LoginComp from "../Components/Signing/Login/LoginComp";
import Error from "./Error";

const Login = () => {
  const userId = localStorage.getItem("UserId");
  const adminId = localStorage.getItem("AdminId");
  return <>{adminId === null && userId === null ? <LoginComp /> : <Error />}</>;
};

export default Login;
