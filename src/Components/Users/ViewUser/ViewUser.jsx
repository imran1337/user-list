import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:1337/users/${userId}`);
    setUser(res.data);
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="container d-flex flex-column mt-5 align-items-center">
     <Link className="btn btn-primary align-self-start" to='/'>
         Go Back
     </Link>
     <h1 className="display-4">User Id: {userId}</h1>
     <hr/>
     <ul className="list-group w-50">
         <li className="list-group-item">name: {user?.name}</li>
         <li className="list-group-item">user name: {user?.username}</li>
         <li className="list-group-item">email: {user?.email}</li>
         <li className="list-group-item">phone: {user?.phone}</li>
         <li className="list-group-item">website: {user.website}</li>
     </ul>
    </div>
  );
};

export default ViewUser;
