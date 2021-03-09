import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:1337/users");
      setUsers(result.data.reverse());
    } catch (error) {
      console.log("data not found from home", error);
    }
  };

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:1337/users/${id}`)
    loadUsers();
  }

  return (
    <div>
      <div className="container">
        <div className="py-4">
          
          <div className="d-flex justify-content-end mb-3">
          {/* <h1>Home Page</h1> */}
          <Link to="/user/add" className="btn btn-primary">Add User</Link>
          </div>

          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Eamil</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index.toString()}>
                  <th scope="row">{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>
                  <Link to={`/user/${user?.id}`} className="btn btn-dark mr-2">View</Link>
                  <Link to={`/user/edit/${user?.id}`} className="btn btn-outline-dark mr-2 my-2">Edit</Link>
                  <button onClick={() => deleteHandler(user?.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
