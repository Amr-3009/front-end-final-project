import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const ViewUsersComp = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="viewMenuWrapper">
      <h1>Users</h1>
      <div className="responsiveTable">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsersComp;
