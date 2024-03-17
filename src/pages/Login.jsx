import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Css/Login.css";
import { url } from "../URL";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { email, password };

  const handilForm = () => {
    axios.post(`${url}/auth/login`, data).then((res) => {
      console.log(res)
      window.localStorage.setItem("name", res.data.user.name);
      window.localStorage.setItem("token", res.data.access_token);
    });
  };


  
 
 
  return (
    <Container
      fluid
      className="  container-login justify-content-center d-flex align-items-center vh-100 "
    >
      <div className="form col-sm-12">
        <div className="text-center" >
        <h2 className="text-uppercase fw-bold">welcome back</h2>
        <h6 className="lead my-2">Log in to your restaurant</h6>
        <hr className="m-auto"/>
        </div>
        
        <Form className="">
          <input
            type="email"
            placeholder="E-mail"
            className="d-block m-auto my-4 col-lg-4 col-md-5 col-9 my-3\ "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            className="d-block col-lg-4 my-2 col-md-5  col-9 m-auto "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className=" col-4  m-auto p-2 lead">
          <Link to="" className=" forget-pass">
              forgot your password
            </Link>

          </div>
          <Link
            className="btn d-block my-3 m-auto text-light fw-bold fs-4 col-lg-4 my-5 col-md-5  col-9 "
            onClick={handilForm}
           
          >
            Login
          </Link>
          
        </Form>
      </div>
    </Container>
  );
};

export default Login;
