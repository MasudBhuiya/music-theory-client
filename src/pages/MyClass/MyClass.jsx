import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from '../../Providers/AuthProvider';

const MyClass = () => {
    const [myClass, setMyClass] = useState();
    const {user, loading} = useContext(AuthContext)

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
    // const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
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
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
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
        <div className="w-full">
            <div className="uppercase h-[60px] flex justify-evenly items-center">
                <h1 className="text-xl font-bold">Total Items: </h1>
                <h1 className="text-xl font-bold">Total Price:</h1>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto ">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="bg-slate-100">
                                <th>
                                    <th>#</th>
                                </th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
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
                                            <img className="w-12 h-12 rounded" src='' alt="Avatar Tailwind CSS Component" />
                                        </td>
                                        <td className="text-end">$</td>
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
    );
};

export default MyClass;