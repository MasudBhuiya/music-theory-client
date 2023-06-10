// import React from 'react';

import { useEffect, useState } from "react";
import InstructorCart from "./InstructorCart";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            setInstructors(data)
        })
    },[])

    // const topInstructor = instructors.filter(clss => clss.rate === 'popular')
    return (
        
        <div>
            <h1 className="text-3xl font-bold text-center text-sky-500 mt-20">Top Rated Instructors</h1>
            <div className="divider mb-10 w-[60%] mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-5 mx-auto mb-10">
            {
                instructors.slice(0, 6).map(inst => <InstructorCart key={inst._id} instructor={inst}></InstructorCart>)
            }
            </div>
        </div>
    );
};

export default Instructors;