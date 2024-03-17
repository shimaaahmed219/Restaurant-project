import React, { useEffect, useState } from "react";
import { url } from "../URL";
import axios from "axios";
import Nave from "../Components/Nave";
import { Container } from "react-bootstrap";
import './Css/menu.css'
const Menu = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${url}/product/all`).then((data) => setProduct(data.data.data));
  }, []);

  return (
    <div>
      <Nave />

      <Container fluid className=" row row-cols-lg-3 row-cols-md-2 my-5 py-5 justify-content-center ">
        {product.map((p) => (
          
            <div className="box  d-flex m-5 px-0" style={{height:'9rem'}}key={p.id}>
          
             <img src={p.photo}  alt="" style={{ width: "10rem" }} />
            <h5 className="mx-3 price text-success">{p.price}<span className="text-warning">$</span></h5>
             <div className="des ms-auto">
             <h5 className="name ms-auto p-2">{p.name.slice(0,15)}</h5>
             <div className="order">
                    <span className="dec m-2 text-center "><h6>-</h6></span>
                    <span className="length text-center"><h6>2</h6></span>
                    <span className="inc text-center m-2"><h6>+</h6></span>
                  </div> 
             </div>
              
            </div>
          
        ))}
      </Container>
    </div>
  );
};

export default Menu;
{/* <div className=" ms-auto px-3">
                <div className="col-12">
                <h5 className="name">{p.name}</h5>
                </div>
                <div className=" desc d-flex col-12">
                 
                  <div className="">
                    <span className="dec m-2 text-center "><h6>-</h6></span>
                    <span className="length text-center"><h6>2</h6></span>
                    <span className="inc text-center m-2"><h6>+</h6></span>
                  </div> */}