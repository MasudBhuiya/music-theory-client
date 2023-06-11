import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';

const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [addedclass, setAddedclass] = useState([])


    useEffect(()=>{
            fetch(`http://localhost:5000/myaddedclass?email=${user?.email}`)
            .then(res  =>res.json())
            .then(data => {
                console.log(data);
                setAddedclass(data);
            })
        },[])
    return (
        <>
        <div className="w-full">
            
            <div className="uppercase h-[60px] flex justify-evenly items-center">
                <h1 className="text-xl font-bold">Total Classes: {addedclass.length} </h1>
            </div>
            <div>
                <div className="overflow-x-auto ">
                    <table className="table w-[90%] mx-auto">
                        {/* head */}
                        <thead>
                            <tr className="bg-sky-500">
                                    <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Total Enrolled Student</th>
                                <th>Price</th>
                                <th>Updete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedclass?.map((item, index) =>
                                    <tr key={item._id}>
                                        <td className=" text-center">
                                            {index + 1}.
                                        </td>
                                        <td>
                                            <img className="w-12 h-12 rounded" src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </td>
                                        <td className='text-black'>{item.name}</td>
                                        <td className="">{item.enroll}</td>
                                        <td className="">{item.price}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost  text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
};

export default MyClasses;