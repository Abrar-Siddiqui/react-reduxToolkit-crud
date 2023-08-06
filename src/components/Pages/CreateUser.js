import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { craeteUser } from "../../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispetch = useDispatch();
  const [users, setUsers] = useState({});
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handerSubmit = (e) => {
    e.preventDefault();
    console.log("User Data", users);
    dispetch(craeteUser(users));
    navigate("/read");
  };

  return (
    <div>
      <div className="contianer">
        <div className="col-lg-4 col-md-6 col-8 mx-auto my-5">
          <h3 className="text-center">Register User Data</h3>
          <form onSubmit={handerSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                name="name"
                aria-describedby="nameHelp"
                onChange={getUserData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
                onChange={getUserData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAge" className="form-label">
                User Age
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAge"
                name="age"
                aria-describedby="ageHelp"
                onChange={getUserData}
              />
            </div>
            <div className="d-flex p-2">
              <label htmlFor="exampleInputAge" className="form-label">
                Gender
              </label>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={getUserData}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={getUserData}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-primary form-control">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
