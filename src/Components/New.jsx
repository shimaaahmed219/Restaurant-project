import { AiFillHeart } from "react-icons/ai";
import "./css/NewProduct.css";
import Category from "./Category";

const New = (props) => {
  const { data } = props;

  return (
    <>
      <div className="des d-flex justify-content-between my-3 ">
        <span className="fev-icon text-center">
          <AiFillHeart className="fs-5" />
        </span>
        <h4>${data.price}</h4>
      </div>
      <div className="fev d-flex justify-content-between">
        <img src={data.photo} className="ms-auto" style={{ width: "10rem" }} />
        <h4 className="name">{data.name}</h4>
      </div>
    </>
  );
};

export default New;
