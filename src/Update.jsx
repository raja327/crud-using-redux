import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

export default function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUpdate(e) {
    e.preventDefault();
    console.log(uname);
    dispatch(updateUser({ 
        id: id,
         name: uname,
          email: uemail }));
    navigate("/");
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div
        className="w-50 border bg-secondary text-white p-5
      "
      >
        <h3>Add New User</h3>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter name"
              onChange={(e) => setUname(e.target.value)}
              value={uname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={uemail}
              onChange={(e) => setUemail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
