import React from "react";
import AdminPanelComp from "../Components/AdminPanel/AdminPanelComp";
import Error from "./Error";

const AdminPanel = () => {
  const adminId = localStorage.getItem("AdminId");
  return <>{adminId !== null ? <AdminPanelComp /> : <Error />}</>;
};

export default AdminPanel;
