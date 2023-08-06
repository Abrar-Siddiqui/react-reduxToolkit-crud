import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../../features/userDetailSlice";
import ModelViewData from "./ModelViewData";
import { Link } from "react-router-dom";

const Read = () => {
  const [radioData, setRadioData] = useState("");
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [show, setShow] = useState(false);

  const { users, loading, searchUser } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
    if (loading) {
      console.log(loading);
    } else if (users) {
      console.log("All Users Data", users);
    }
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <h2>Filter By Gender</h2>
        <div className="d-flex px-2 ">
          <div class="form-check pe-4">
            <input
              class="form-check-input"
              type="radio"
              name="gander"
              id="flexRadioDefault1"
              value=""
              checked={radioData === ""}
              onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              All
            </label>
          </div>
          <div class="form-check pe-4">
            <input
              class="form-check-input"
              type="radio"
              name="gander"
              id="flexRadioDefault1"
              value="Male"
              checked={radioData === "Male"}
              onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gander"
              id="flexRadioDefault2"
              value="Female"
              onChange={(e) => setRadioData(e.target.value)}
              checked={radioData === "Female"}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
        {loading ? (
          <div className="text-center">Loadding Page..</div>
        ) : show && show ? (
          <ModelViewData id={id} show={show} setShow={setShow} />
        ) : (
          users &&
          users
            .filter((ele) => {
              if (searchUser.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchUser.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })
            .map((item, i) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-6 mx-auto py-3 "
                key={i}
              >
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title"> Name : {item.name}</h5>

                    <h6 className="card-subtitle mb-2 text-muted">
                      Email : {item.email}
                    </h6>

                    <h6 className="card-subtitle mb-2 text-muted">
                      Gender : {item.gender}
                    </h6>
                    <div className="mx-auto text-center">
                      <button
                        className="card-link btn text-black btn-outline-success rounded text-decoration-none"
                        onClick={() => [setId(item.id), setShow(true)]}
                      >
                        View
                      </button>
                      <Link
                        to={`/edit/${item.id}`}
                        className="card-link btn text-black btn-outline-warning rounded text-decoration-none"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => dispatch(deleteUser(item.id))}
                        className="card-link btn text-black btn-outline-danger rounded text-decoration-none"
                      >
                        Del
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Read;
