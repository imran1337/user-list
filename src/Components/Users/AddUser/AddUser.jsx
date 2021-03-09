import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const AddUsers = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1337/users", user);
    history.push("/home");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              required
              autoComplete="off"
              value={user?.name}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              required
              autoComplete="off"
              value={user?.username}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              required
              autoComplete="off"
              value={user?.email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              required
              autoComplete="off"
              value={user?.phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              required
              autoComplete="off"
              value={user?.website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
