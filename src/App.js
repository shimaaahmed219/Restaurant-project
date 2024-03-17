import React from "react";

import {  Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Fev from "./pages/Fev";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";

import Profile from "./pages/Profile";
import OrderHestory from "./pages/OrderHestory";
import AddProduct from "./pages/AddProduct";



function App() {
  return (
    <>
    
     <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/fev" element={<Fev />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddProduct />} />
         
          <Route path="/orderHestory" element={<OrderHestory/>} />

          
        </Routes>
     
        
    
    </>
  );
}

export default App;
