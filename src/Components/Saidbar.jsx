
import { Container } from "react-bootstrap";
import "./css/ssaidbar.css";
import { Link } from "react-router-dom";
import { GiChest } from "react-icons/gi";
import { AiFillSetting, AiOutlineHeart } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import Logout from "../pages/Logout";
import UserData from "./UserData";

const Saidbar = () => {
  return (
    <Container
      fluid
      className="py-5 saidbar-container col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12   mx-0 "
    >

<UserData />
      <div className="my-4">
        <div className="sidebar-pages py-2">
          <GiChest className=" text-light fs-4 mx-1" />
          <Link className=" text-light text-decoration-none" to="/orderHestory">
            {" "}
            order hestory
          </Link>
        </div>

        <div className="sidebar-pages py-2">
          <MdPayment className=" text-light fs-4 mx-1" />
          <Link className=" text-light text-decoration-none">
            {" "}
            payment method
          </Link>
        </div>
        <div className="sidebar-pages py-2">
          <AiOutlineHeart className=" text-light fs-4 mx-1" />
          <Link className=" text-light text-decoration-none">
            {" "}
            my fasvorite
          </Link>
        </div>
      </div>
      <div className="py-5">
        <div className="sidebar-pages py-2">
          <AiFillSetting className=" text-light fs-4 mx-1" />
          <Link className=" text-light text-decoration-none" to="/orderHestory">
            {" "}
            settings
          </Link>
        </div>
        <Logout />
      </div>
    </Container>
  );
};

export default Saidbar;
