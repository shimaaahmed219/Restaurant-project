import axios from "axios";
import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import { url } from "../URL";
import { Link } from "react-router-dom";
import New from "./New";
import { AiFillHeart } from "react-icons/ai";
import "./css/NewProduct.css";
import './css/category.css'
const Category = () => {
  const l = "https://food-api.preview-ym.com";
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  // const [products, setProducts] = useState([]);
  const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    // category name

    axios.get(`${url}/category/all`).then((cat) => setCategory(cat.data.data));
    // product category
  }, []);
  // console.log(category);

  //
  // console.log(data);
  // new product
  const handelBtn = () => {
    axios
      .get(`${url}/product/new`, {
        headers: {
          Authorization: `Bearer${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };
  const handilCategory = (id) => {
    axios
      .get(`${url}/category/${id}`)
      .then((res) =>
        res.data.data.products ? setCategoryList(res.data.data.products) : ""
      );
  };

  // const productHandler =(products)=>{
  // if(products){
  //   setProducts(products)
  // }
  // }
  // console.log(products);

  console.log(CategoryList);
  return (
    <>
      {/* catigory list */}
      <div className=" category row row-cols-sm-6  justify-content-center ">
        {category.map((cat) => (
          <Link
            style={{ width: "12rem" }}
            className=" cat-btn text-decoration-none text-dark mx-3 fw-bold py-2  my-2 m-auto"
            key={cat.id}
            onClick={() => handilCategory(cat.id)}
            // onClick={()=>productHandler(cat.products)}
          >
            {cat.name}
          </Link>
        ))}
        {/* new products */}
        <Link
          style={{ width: "12rem" }}
          className="cat-btn  text-decoration-none text-dark fw-bold p-2 px-4 mx-3  my-2 m-auto"
          onClick={handelBtn}
        >
          new
        </Link>
      </div>
      <div className=" container-fluid  p-2 my-3   row row-cols-lg-3 row-cols-md-2 justify-content-center p-5 m-3">
        {data.map((data) => (
          <>
            <div
              className=" new-product col-4 d-flex  mx-5 text-light mx-2 p-3 my-5"
              style={{ height: "12rem" }}
              key={data.id}
            >
              <New data={data} />
            </div>
          </>
        ))}
        {/* category products */}
      </div>
      <div className=" container-fluid  p-2 my-3   row row-cols-lg-3 row-cols-md-2 justify-content-center p-5 m-3">
        {CategoryList.map((data) => (
          <div
            className=" new-product col-4 my-4 d-flex mx-5 text-light mx-2 p-3"
            style={{ height: "10rem" }}
            key={data.id}
          >
            <div className="des d-flex justify-content-between ">
              <span className="fev-icon text-center">
                <AiFillHeart className="fs-5" />
              </span>
              <h4>${data.price}</h4>
            </div>
            <div className="fev d-flex justify-content-between">
              <img
                src ={`https://food-api.preview-ym.com/${data.photo}`}
                className="ms-auto"
                style={{ width: "10rem" }}
              />
              <h4 className="">{data.name}</h4>
            </div>
          </div>
        ))}
      </div>{" "}
    
    </>
  );
};

export default Category;
