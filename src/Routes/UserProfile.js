import React from "react";
import UserProfileComp from "../Components/UserProfile/UserProfileComp";
import LoginPlease from "./LoginPlease";
import Error from "./Error";

const UserProfile = () => {
  const userId = localStorage.getItem("UserId");
  const adminId = localStorage.getItem("AdminId");
  return (
    <>
      {userId === null && adminId === null ? (
        <LoginPlease />
      ) : userId !== null ? (
        <UserProfileComp />
      ) : (
        <Error />
      )}
    </>
  );
};

export default UserProfile;
