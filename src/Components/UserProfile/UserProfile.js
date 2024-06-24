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
  return (
    <>
      <div className="filler"></div>
      <div className="sectionWrapper">
        <h1>Welcome {user.name}</h1>
        <p>Here you can view and edit your profile</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
