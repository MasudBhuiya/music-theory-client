// import React from 'react';

import { useContext, useEffect, useState } from "react";
import ClassCart from "./ClassCart";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useClass from "../../../hooks/useClass";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [disables, setDisable] = useState(false);
    const navigate = useNavigate()
  const location = useLocation()
    const {user} = useContext(AuthContext);
    const [, refetch] = useClass()
    // const [, refetch] = useCart();


    useEffect(()=>{
        fetch('https://assignment-twelve-server-gilt.vercel.app/class')
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            setClasses(data)
        })
    },[]);


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
      // const enroll = clas.enroll + 1;
      // const availableSeats = clas.availableSeats - 1;
      // const status = 'selected'
      // const update = {enroll, availableSeats, status};
      
      // fetch(`https://assignment-twelve-server-gilt.vercel.app/${clas._id}`,{
      //   method: 'PUT',
      //       headers: {
      //           'content-type' : 'application/json'
      //       },
      //       body: JSON.stringify(update)
      // })
      // .then(res=>res.json())
      //   .then(data=>{
      //     console.log(data);
      //       if(data.modifiedCount > 0){
      //         //update state
      //         fetch('https://assignment-twelve-server-gilt.vercel.app/class',{
      //           method: 'GET'
      //         })
      //         .then(res=>res.json())
      //   .then(data=>{
      //     console.log(data);
      //     setClasses(data);
      //   })
      //       }
      //       Swal.fire({
      //         position: 'top-end',
      //         icon: 'success',
      //         title: 'Your work has been saved',
      //         showConfirmButton: false,
      //         timer: 1500
      //       })
      //     }
      //   )
        const datas = {availableSeats: clas.availableSeats, enroll: clas.enroll, image: clas.image, instructorName: clas.instructorName, name: clas.name, price: clas.price, totalSeats: clas.totalSeats, classId:clas._id, email: user.email}
        fetch('https://assignment-twelve-server-gilt.vercel.app/usersclass',{
       method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(datas)
      })
      .then(res=> res.json())
        .then(data => {
          refetch();
            console.log(data);
            Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Your work has been saved',
                      showConfirmButton: false,
                      timer: 1500
                    })
        })
        
    }

    // const topClass = classes.filter(clss => clss.rate === 'top')
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-sky-500 mt-10">Top Rated Classes</h1>
            <div className="divider mb-10 w-[60%] mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-5 mx-auto mb-10">
            {
                classes.slice(0, 6).map(cls => <ClassCart key={cls._id} clas={cls} handleSelect={handleSelect} disables={disables}></ClassCart>)
            }
            </div>
        </div>
    );
};

export default Classes;