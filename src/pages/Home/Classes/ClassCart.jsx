// import React from 'react';

import { useContext} from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const ClassCart = ({clas, handleSelect , disables}) => {
  console.log(clas.availableSeats)
  const { image, name, availableSeats, instructorName, price} = clas;
  const {user} = useContext(AuthContext);
  
    return (
            <div className="card  w-80 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="text-lg">Instructor Name: {instructorName}</p>
    <p>Abailable Seats: {availableSeats}</p>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
          <button disabled={disables} onClick={()=>handleSelect(clas)} className="btn btn-primary ">Please Confirm</button>
    </div>
  </div>
</div>
    );
};

export default ClassCart;