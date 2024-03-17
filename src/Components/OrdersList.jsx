import React from "react";
import { Form, Card, Row, Container, Col } from "react-bootstrap";
import "./css/OrderList.css";
import img1 from "../images/download.jfif";
const OrdersList = () => {
  return (
    <div className="order-list p-5">
      <Form className="col-10 m-auto ">
        <Form.Control
          type="search"
          placeholder="Search"
          className="form-control"
          aria-label="Search"
        />
      </Form>
      <div className=" my-4">
        <Container>
          <Card className="col-8 m-auto border-0 my-5 shadow">
            <Row>
              <Col className="col-5">
                <Card.Img
                  variant="top"
                  src={img1}
                  className="card-img"
                
                />
              </Col>
              <Col className="col-7">
                <Card.Body className="">
                  <p className="text-success fw-bold text-capitalize">
                    beef steake with sauce
                  </p>
                  <p className="text-uppercase text-secondary">
                    ma 20.2023 10:36 am
                  </p>
                  <Card.Text className="d-flex">
                    <div className="dil fs-5 text-capitalize">dilivered</div>
                    <div className="ms-auto fw-bold text-success">
                      200 <span className="text-warning">EGP</span>{" "}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default OrdersList;
