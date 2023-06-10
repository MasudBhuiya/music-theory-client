import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Shared/useTitle';

const MyClass = () => {
    const [myClass, setMyClass] = useState();
    const {user} = useContext(AuthContext)
    useTitle('Dashboard | My Cards')
    useEffect(()=>{
        fetch(`http://localhost:5000/myclasses?email=${user?.email}`)
        .then(res  =>res.json())
        .then(data => {
            console.log(data);
            setMyClass(data);
        })
    },[])
    // const [cart, refetch] = useCart();
    // console.log(cart);
    //how does reduce work!!!
    // const total = myClass.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = _id => {
        fetch(`http://localhost:5000/usersclass/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
        })
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/usersclass/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <>
        <div className="w-full">
            
            <div className="uppercase h-[60px] flex justify-evenly items-center">
                <h1 className="text-xl font-bold">Total Items: </h1>
                <h1 className="text-xl font-bold">Total Price:{}</h1>
                <button className="btn btn-secondary btn-sm">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto ">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="bg-slate-100">
                                    <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClass?.map((item, index) =>
                                    <tr key={item._id}>
                                        <td className=" text-center">
                                            {index + 1}.
                                        </td>
                                        <td>
                                            <img className="w-12 h-12 rounded" src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </td>
                                        <td className='text-black'>{item.name}</td>
                                        <td className="">{item.instructorName}</td>
                                        <td className="">{item.price}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost  text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
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

export default MyClass;