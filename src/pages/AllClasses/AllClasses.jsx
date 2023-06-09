// import React from 'react';

import { useContext, useEffect, useState } from "react";
import ClassCart from "../Home/Classes/ClassCart";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AllClasses = () => {
    const [allClass, setAllClasses] = useState([]);
    const [disables, setDisable] = useState(false);
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch('http://localhost:5000/class')
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            setAllClasses(data)
        })
    },[])

    const handleSelect = clas =>{
        if(!user){
          navigate('/login', {state: {from: location}}, {replace:true})
          return;
        }
        console.log()
       if(clas.availableSeats === 0){
        setDisable(false);
        return;
      }
        const enroll = clas.enroll + 1;
        const availableSeats = clas.availableSeats - 1;
        const status = 'selected'
        const update = {enroll, availableSeats, status};
        
        fetch(`http://localhost:5000/class/${clas._id}`,{
          method: 'PUT',
              headers: {
                  'content-type' : 'application/json'
              },
              body: JSON.stringify(update)
        })
        .then(res=>res.json())
          .then(data=>{
            console.log(data);
              if(data.modifiedCount > 0){
                //update state
                fetch('http://localhost:5000/class',{
                  method: 'GET'
                })
                .then(res=>res.json())
          .then(data=>{
            console.log(data);
            setAllClasses(data);
          })
              }
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            }
          )
          const id = clas._id;
          const datas = {...clas, classId: id, email:user.email}
          fetch('http://localhost:5000/usersclass',{
         method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(datas)
        })
        .then(res=> res.json())
          .then(data => {
              console.log(data);
          })
      }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-lime-500 pt-24">All Classes</h1>
            <div className="divider mb-10 w-[60%] mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-5 mx-auto mb-10">
            {
                allClass.map(cls => <ClassCart key={cls._id} disables={disables} clas={cls} handleSelect={handleSelect}></ClassCart>)
            }
            </div>
        </div>
    );
};

export default AllClasses;