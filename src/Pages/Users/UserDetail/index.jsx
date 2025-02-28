import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserDetail = () => {
  const [user, SetUser] = useState({});
  const url = "https://jsonplaceholder.typicode.com/users/";
  const { id } = useParams();
  useEffect(() => {
    axios.get(url + id).then(({ data }) => {
      SetUser(data);
    });
  }, []);
  return (
    <div className="cardDetail">
      <h3 className="cardName">{user?.name}</h3>
      <p className="cardUsername">@{user?.username}</p>
      <p className="cardEmail">{user?.email}</p>
    </div>
  );
};

export default UserDetail;
