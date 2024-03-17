import React, {useState } from "react";
import "./Css/Register.css";
import { Container, Form } from "react-bootstrap";
import { Link,useNavigate} from "react-router-dom";
import { url } from "../URL";
import axios from "axios";


const Register = () => {

  
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState();
  const [password_confirmation, setpassword_confirmation] = useState("");
  const formdata = new FormData();
  const [errors, setError] = useState({});

  const handilForm = (e) => {
    
    e.preventDefault();
   
    formdata.append("photo", photo);
    formdata.append("name", name);
    formdata.append("password", password);
    formdata.append("password_confirmation", password_confirmation);
    formdata.append("email", email);
    console.log(formdata.name);
    const validationError = {};

    
    if (!name.trim()) {
      validationError.name = " name is is Required";
    } else {
      validationError.name = "";
    }
    if (!password.trim()) {
      validationError.password = " password is Required";
    }
    if (password.length > 8) {
      validationError.password = "Password must be greater than 6 characters";
    }
    if (!password_confirmation.trim()) {
      validationError.password_confirmation =
        "password_confirmation is Required";
    }

    if (password_confirmation != password) {
      validationError.password_confirmation = "pssword is not defaind";
    }
    if (!email.trim()) {
      validationError.email = " email is Required ";
    } else if (!/\S+@\S\.\S+/.test(email)) {
      validationError.email = "Invalid Email Address";
    }

    setError(validationError);
    axios
      .post(`${url}/auth/register`, formdata)
      .then((res) => e.target.reset())
      .catch((err) => console.log(err));

      
  };


  return (
    <Container
      fluid
      className=" register-form py-4 justify-content-center align-items-center d-flex"
    >
      <div className="col-6">
        <Form>
          <div className="custom-file  m-auto text-center text-light">
            <input
              type="file"
              className="d-block m-auto my-4 p-1  col-3"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>

          <input
            type="text"
            placeholder="name "
            className="d-block m-auto my-4 col-md-7 col-sm-10 "
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <div className="text-center">
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <input
            type="email"
            placeholder="E-mail"
            className="d-block m-auto my-4  col-md-7 col-sm-10 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
          <div className="text-center">
            {errors.email && (
              <span className="  msg text-danger">{errors.email} </span>
            )}
          </div>
          <input
            type="password"
            placeholder="password"
            className="d-block m-auto my-4  col-md-7 col-sm-10"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="text-center">
            {errors.password && (
              <span className="  msg text-danger">{errors.password}</span>
            )}
          </div>

          <input
            type="password"
            placeholder="password_confirmation"
            className="d-block m-auto my-4  col-md-7 col-sm-10 "
            value={password_confirmation}
            onChange={(e) => setpassword_confirmation(e.target.value)}
            autoComplete="off"
          />
          <div className="text-center">
            {errors.password_confirmation && (
              <span className="  msg text-danger">
                {errors.password_confirmation}
              </span>
            )}
          </div>

          <Link
           
            onClick={handilForm} to='/login'
            className="btn d-block text-light fs-4 fw-bold m-auto my-2 col-md-7 col-sm-10"
       
         >
            Register
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
