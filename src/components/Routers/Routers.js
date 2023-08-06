import React from "react";
import Navbar from "../Pages/Navbar";
import CreateUser from "../Pages/CreateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "../Pages/Read";
import Update from "../Pages/Update";

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CreateUser />} />
          <Route exact path="/read" element={<Read />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
