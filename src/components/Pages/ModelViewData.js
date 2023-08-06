import React from "react";
import { useSelector } from "react-redux";

const ModelViewData = ({ id, show, setShow }) => {
  const user = useSelector((state) => state.app.users);
  const SingleData = user.filter((item) => item.id === id);
  console.log(SingleData[0]);
  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              User Detail
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button>
          </div>
          <div className="modal-body">
            <p>User Name : {SingleData[0].name} </p>
            <p>User E-mail : {SingleData[0].email}</p>
            <p>User Age : {SingleData[0].age}</p>
            <p>User Gender : {SingleData[0].gender}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewData;
