import React, { useContext} from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Shared/useTitle';
import useClass from '../../hooks/useClass';
import { Link } from 'react-router-dom';

const MyClass = () => {
    // const [myClass, setMyClass] = useState();
    const {user} = useContext(AuthContext);
    const [classe, refetch] = useClass();
    console.log(classe)
    useTitle('My Class')

    // useEffect(()=>{
    //     fetch(`https://assignment-twelve-server-gilt.vercel.app/myclasses?email=${user?.email}`)
    //     .then(res  =>res.json())
    //     .then(data => {
    //         console.log(data);
    //         setMyClass(data);
    //     })
    // },[])

    const handleDelete = item => {
        Swal.fire({
            title: `Are you sure? You want to delete '${item.name}'`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(typeof(item._id))
                fetch(`https://assignment-twelve-server-gilt.vercel.app/usersclass/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
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
    
    const total = classe.reduce((sum, item) => item.price + sum, 0);
    return (
        <>
        <div className="w-full">
            
            <div className="uppercase h-[60px] flex justify-evenly items-center">
                <h1 className="text-xl font-bold">Total Classes: {classe.length} </h1>
                <h1 className="text-xl font-bold">Total Price: ${total}</h1>
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
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classe?.map((item, index) =>
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
                                        <td><Link to={`/dashboard/payment/${item.classId}`}  className="btn bg-sky-500 hover:bg-sky-800 btn-sm text-white">PAY</Link></td>
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

export default MyClass;