import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const UserProfile = () => {
  const userId = localStorage.getItem("UserId");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user/${userId}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    const updatedData = new FormData();
    updatedData.append("name", user.name);
    updatedData.append("email", user.email);
    updatedData.append("password", user.password);

    for (let [key, value] of updatedData.entries()) {
      console.log(`${key}: ${value}`);
    }

    axios
      .post(
        `http://127.0.0.1:8000/api/user/${userId}?_method=PUT`,
        updatedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "X-HTTP-Method-Override": "PUT",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="filler"></div>
      <div className="sectionWrapper">
        <h1>Welcome {user.name}</h1>
        <p>Here you can view and edit your profile</p>
        <form method="POST" onSubmit={(e) => formSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              placeholder="New Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
