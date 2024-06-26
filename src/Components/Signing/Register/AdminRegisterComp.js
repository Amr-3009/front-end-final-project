import React from "react";
import "../signing.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminRegisterComp = () => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });
  const hanldeRegister = () => {
    axios
      .post("http://127.0.0.1:8000/api/admin-register", admin)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const preventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="filler"></div>
      <div className="sectionWrapper">
        <h1>Admin Register</h1>
        <form onSubmit={(e) => preventDefault(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={admin.name}
              onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={admin.email}
              onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={admin.password}
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            />
          </div>
          <button type="submit" onClick={hanldeRegister}>
            Admin Register
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminRegisterComp;
