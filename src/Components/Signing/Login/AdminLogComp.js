import React from "react";
import "../signing.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogComp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const hanldeLogin = () => {
    axios
      .post("http://127.0.0.1:8000/api/user-login", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        const userToken = res.data.UserToken;
        const userId = res.data.userID;
        localStorage.setItem("UserId", userId);
        localStorage.setItem("UserToken", userToken);
        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${res.data.UserToken}`;
        navigate("/home");
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };
  const preventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="filler"></div>
      <div className="sectionWrapper">
        <h1>Admin Login</h1>
        <form onSubmit={(e) => preventDefault(e)}>
          <div className="form-group">
            <label htmlFor="email">Admin Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Admin Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button type="submit" onClick={hanldeLogin}>
            Admin Login
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogComp;
