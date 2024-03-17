import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { url } from '../URL';

function UserData() {

    const [data, setData] = useState({});
    console.log(data);
    useEffect(() => {
      axios
        .get(`${url}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);
  return (
    <>
       <div className="text-center text-light">
        <div className="custom-file m-auto text-center text-light">
          <img style={{ width: "6rem" }} src={data.photo} />
        </div>
        <h5 className="my-2">{data.name}</h5>
        <p className="my-2">{data.email}</p>
      </div>

    </>
  )
}

export default UserData
