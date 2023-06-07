// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const ClassCart = ({clas}) => {
  const navigate = useNavigate()
  const location = useLocation()
    const { image, name, availableSeats, instructorName, price} = clas;
    const {user} = useContext(AuthContext);


    const handleSelect = (_id) =>{
      if(!user){
        navigate('/login', {state: {from: location}}, {replace:true})
        return;
      }
      const enroll = clas.enroll + 1;
      const availableSeats = clas.availableSeats - 1;
      const update = {enroll, availableSeats}
      fetch(`http://localhost:5000/classes/${_id}`,{
        method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(update)
      })
      .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
    }
    return (
            <div className="card  w-80 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="text-lg">Instructor Name: {instructorName}</p>
    <p>Abailable Seats: {availableSeats}</p>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleSelect(clas._id)} className="btn btn-primary bg-lime-600 hover:bg-lime-800 border-0">Select Now</button>
    </div>
  </div>
</div>
    );
};

export default ClassCart;