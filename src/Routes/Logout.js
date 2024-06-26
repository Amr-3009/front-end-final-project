import React from "react";
import LogoutComp from "../Components/Signing/Logout/LogoutComp";
import LoginPlease from "./LoginPlease";

const Logout = () => {
  const userId = localStorage.getItem("UserId");
  const adminId = localStorage.getItem("AdminId");
  return <>{ userId !== null || adminId !== null ? <LogoutComp /> : <LoginPlease/>}</>;
};

export default Logout;
