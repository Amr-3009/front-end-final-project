import React from "react";
import "../signing.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterComp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const hanldeRegister = () => {
    axios
      .post("http://127.0.0.1:8000/api/user-register", user)
      .then((res) => {
        console.log(res.data);
        navigate("/user-login");
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
        <h1>Register</h1>
        <form onSubmit={(e) => preventDefault(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button type="submit" onClick={hanldeRegister}>
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterComp;
