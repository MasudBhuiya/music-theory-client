// import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../Shared/useTitle";

const Update = () => {
    const data = useLoaderData();
    // console.log(data)
    const navigate = useNavigate();
    useTitle('Update')
    const {price, _id, image, name, totalSeats} = data;
    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const totalSeats = form.seats.value;
        
        fetch(`https://assignment-twelve-server-gilt.vercel.app/instructors/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({name, price: parseInt(price), image, totalSeats: parseInt(totalSeats)})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
              form.reset();
                Swal.fire({
                    title: 'success!',
                    text: 'Data Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate('/dashboard/myaddedclass')
            }

        })
    }
    return (
        <div className="w-[60%] mx-auto mb-10 mt-10">
          <h1 className="font-bold text-3xl text-center text-sky-500">Update Now!</h1>
            <form onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Class Name</span>
          </label>
          <input type="text" defaultValue={name} placeholder="Class Name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Class Image</span>
          </label>
          <input type="url" defaultValue={image} placeholder="Photo URL" name='image' className="input input-bordered" />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text font-bold">Price</span>
          </label>
          <input type="number" defaultValue={price} placeholder="Price" name='price' className="input input-bordered" />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text font-bold">Total Seats</span>
          </label>
          <input type="number" defaultValue={totalSeats} placeholder="Total Seats" name='seats' className="input input-bordered" />
        </div>

        <div className="form-control mt-6">
          <input className="btn bg-sky-500 border-sky-400 hover:bg-sky-700 text-white" type="submit" value='Update' name="" id="" />
        </div>
        </form>
        </div>
    );
};

export default Update;