import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../features/userDetailSlice";

const Update = () => {
  const navigate = useNavigate();
  const dispetch = useDispatch();
  const [updateData, setUpdateData] = useState();
  const { id } = useParams();
  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    if (loading) {
      console.log("Lodding Data");
    }
    if (id) {
      const singledata = users && users.filter((item) => item.id === id);
      setUpdateData(singledata && singledata[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handerSubmit = (e) => {
    e.preventDefault();
    console.log(updateData);
    dispetch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <div>
        <div className="contianer">
          <div className="col-lg-4 col-md-6 col-8 mx-auto my-5">
            <h3 className="text-center py-3">Update User Data</h3>
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
                  value={updateData && updateData.name}
                  aria-describedby="nameHelp"
                  onChange={newData}
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
                  value={updateData && updateData.email}
                  onChange={newData}
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
                  value={updateData && updateData.age}
                  aria-describedby="ageHelp"
                  onChange={newData}
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
                    checked={updateData && updateData.gender === "Male"}
                    onChange={newData}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={updateData && updateData.gender === "Female"}
                    onChange={newData}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
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
    </div>
  );
};

export default Update;
