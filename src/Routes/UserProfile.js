import React from "react";
import UserProfileComp from "../Components/UserProfile/UserProfileComp";
import LoginPlease from "./LoginPlease";

const UserProfile = () => {
  const userId = localStorage.getItem("UserId");
  return <>{userId !== null ? <UserProfileComp /> : <LoginPlease />}</>;
};

export default UserProfile;
