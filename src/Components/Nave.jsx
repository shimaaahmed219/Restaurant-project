import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { GiChickenOven } from "react-icons/gi";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoRestaurant } from "react-icons/io5";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import "../pages/Css/Navbar.css";
 



const Nave = () => {
  return (
    
      <Navbar expand="lg" fixed="top" className=" brand col-12  ">
        <Container fluid>
          <Navbar.Brand href="#" className="mx-5 px-3">
            <GiChickenOven className="icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="meauto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="mx-5 text-center">
                <BiHomeAlt className="nav-icon" />
                <Nav.Link href="/home" className="text-light">
                  Home
                </Nav.Link>
              </div>

              <div className="mx-5 text-center">
                <AiOutlineHeart className="nav-icon" />
                <Nav.Link href="/fev" className="text-light text-captilize">
                  fevorit
                </Nav.Link>
              </div>

              <div className=" menu  p-2 mx-5 text-center">
                <div className="icon-style m-auto">
                  <IoRestaurant className="icon-menu m-auto my-2" />
                </div>

                <Nav.Link href="/menu" className="text-light">
                  menu
                </Nav.Link>
              </div>

              <div className="mx-5 text-center">
                <BsFillCartCheckFill className="nav-icon" />
                <Nav.Link href="/orders" className="text-light">
                  orders
                </Nav.Link>
              </div>

              <div className="mx-5 text-center">
                <CgProfile className="nav-icon" />
                <Nav.Link href="/profile" className="text-light">
                  profile
                </Nav.Link>
              </div>
            </Nav>
            <Form className=" me-auto mx-5 col-sm-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" Form-Control bg-light border-0 me-2 mx-5"
              aria-label="Search"
            />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default Nave;
