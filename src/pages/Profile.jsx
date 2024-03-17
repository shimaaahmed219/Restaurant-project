import React from 'react'
import Saidbar from '../Components/Saidbar'
import Nave from '../Components/Nave'
import OrdersList from '../Components/OrdersList'
import './Css/Profil.css'
import { Container } from "react-bootstrap";

const Profile = () => {
  return (
    <>
    <div className="nav">
      <Nave />
      </div>
    <div className='d-flex col-12'>
      <div className='col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12 '>
      <Saidbar/>
      </div>
      <div className='col-xl-9 col-lg-9 col-md-8 col-sm-8 '>
        <OrdersList/>
      </div>
    </div>




    </>

  )
}

export default Profile
