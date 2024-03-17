import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Css/Home.css";
const Main = () => {
  return (
    <Container
      fluid
      className="bunner justify-content-center d-flex align-items-center vh-100"
    >
      <div className="" style={{ width: "300px" }}>
        <h1 className="my-5 py-2 text-light text-center"> MASHAWY</h1>
        <Link
          to="/register"
          className="btn d-block my-3 text-light fw-bold fs-4"
        >
          Register
        </Link>
        <Link to="/login" className="btn d-block my-3 text-light fw-bold fs-4">
          Login
        </Link>
      </div>
    </Container>
  );
};

export default Main;
