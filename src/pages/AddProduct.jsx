import React, { useEffect, useState } from "react";
import Nave from '../Components/Nave'
import { url } from "../URL";
import axios from "axios";
import "./Css/AddProduct.css";
import { AiOutlineCamera, AiFillFire } from "react-icons/ai";
import { RiPriceTag3Line } from "react-icons/ri";
// import {Form} from "react-bootstrap";
const AddProduct = () => {
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [photo, setphoto] = useState();
  const [category_id, setcategory_id] = useState();
  const formdata = new FormData();

  function product(e) {
    e.preventDefault();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("photo", photo);
    formdata.append("category_id", category_id);

    axios
      .post(`${url}/product/add`, formdata, {
        headers: {
          // Accept: "application/json",
          // "Content-Type": "application/json",
          " Authorization": `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => e.target.reset())
      .catch((err) => console.log(err));
  }

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(`${url}/category/all`).then((cat) => setCategory(cat.data.data));
  }, []);
  console.log(category);

  return (
    <>
    <Nave/>
    <div className=" add-product my-5 justify-content-center d-flex align-items-center ">
      <form className="col-12 justify-content-center">
        <div className="  name d-flex  m-auto border-0  col-lg-4 col-md-6 col-sm-6">
          <AiFillFire className="input-icon mx-4" />
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="product name"
            value={name}
            className="  name d-block my-3 m-auto border-0 p-2 px-5 col-12"
          />
        </div>
        <div className="name d-flex my-3 m-auto border-0  col-lg-4 col-md-6 col-sm-6">
          <RiPriceTag3Line className="input-icon  mx-4" />
          <input
            type="text"
            onChange={(e) => setprice(e.target.value)}
            placeholder="product price"
            value={price}
            className=" m-auto my-3 border-0 p-2 px-5 col-12"
          />
        </div>

        <div className="product-file my-3 col-lg-4 col-md-6 col-sm-6 m-auto p-4">
          <h6 className="">
            {" "}
            <AiOutlineCamera className="camera" /> upload product image
          </h6>
          <input
            type="file"
            onChange={(e) => setphoto(e.target.files[0])}
            className="d-block "
          />
        </div>

        <select
          class="form-select"
          aria-label="Default select example"
          onClick={(e) => setcategory_id(e.target.value)}
          className="d-block m-auto border-0 my-3 p-2 col-lg-4 col-md-6 col-sm-6"
        >
          <option selected>chose category</option>
          {category.map((cat) => (
            <option value={cat.id}>{cat.name}</option>
          ))}
        </select>

        <button
          value={price}
          className=" add-btn fs-5 fw-bold text-light d-block m-auto border-0 p-2 col-lg-4 col-md-6 col-sm-6"
          onClick={product}
        >
          add product
        </button>
      </form>
    </div>
    </>
    
  );
};

export default AddProduct;
