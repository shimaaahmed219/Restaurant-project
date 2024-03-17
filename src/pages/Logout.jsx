import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../URL";
import { PiSignOutFill } from "react-icons/pi";
import { Form } from "react-bootstrap";

const Logout = () => {
  const navigate = useNavigate();
  if (localStorage.getItem === null) navigate("/register");

  const logout = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/auth/logout`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          " Authorization": `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        localStorage.clear();
        navigate("/register");
      })
      .catch((error) => console.log(error));
    localStorage.clear();
    navigate("/register");
  };

  return (
    <div className="sidebar-pages py-2">
      <Form onClick={logout}>
        <PiSignOutFill className=" text-light fs-4 mx-1" />
        <Link
          className=" text-light text-decoration-none"
          onClick={() => logout}
        >
          {" "}
          sing oute
        </Link>
      </Form>
    </div>
  );
};

export default Logout;
