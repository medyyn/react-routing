import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Users = () => {
  const [users, SetUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      SetUsers(data);
    });
  }, []);
  return (
    <div className="cards">
      {users.map(({ id, username }) => {
        return (
            <div key={id} className="card">
              <h3 className="card-username"><Link to={"/users/" + id}>{username}</Link></h3>
            </div>
        );
      })}
    </div>
  );
};

export default Users;
