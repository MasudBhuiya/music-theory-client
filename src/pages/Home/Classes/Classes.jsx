// import React from 'react';

import { useEffect, useState } from "react";
import ClassCart from "./ClassCart";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            setClasses(data)
        })
    },[])
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-lime-500 mb-10 mt-10">Top Rated Classes</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-5 mx-auto">
            {
                classes.map(cls => <ClassCart key={cls._id} clas={cls}></ClassCart>)
            }
            </div>
        </div>
    );
};

export default Classes;