import React from "react";
import AdminLogComp from "../Components/Signing/Login/AdminLogComp";
import Error from "./Error";

const AdminLogin = () => {
  const userId = localStorage.getItem("UserId");
  return <>{userId === null ? <AdminLogComp /> : <Error />}</>;
};

export default AdminLogin;
