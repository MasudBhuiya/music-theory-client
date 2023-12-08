import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../../Shared/useTitle';

const AddClass = () => {
    const {user} = useContext(AuthContext);
    useTitle('Add Class')
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const instructorName = form.instructorName.value;
        const email = form.email.value;
        const abailableSeats = form.seats.value;
        const price = form.price.value;
        const enroll = form.enroll.value;
        const totalSeats = form.total.value;

        fetch('https://assignment-twelve-server-gilt.vercel.app/class',{
       method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({name,  image, instructorName, email, availableSeats: parseInt(abailableSeats), price: parseInt(price), enroll: parseInt(enroll), totalSeats: parseInt(totalSeats)})
      })
      .then(res=> res.json())
        .then(() => {
            form.reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }

    return (
        <div >
            <h1 className='font-bold text-4xl text-sky-500 mb-10 text-center mt-6'>Add a New Class!!!</h1>
            <form className='w-[90%] mx-auto' onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 gap-6 '>
            <div>
            <p className='text-xl font-bold '>Class Name</p>
            <input type="text" className="w-full rounded h-14 ps-3  border-2 border-sky-400" placeholder='Enter Name' name="name" id="" required/>
            </div>
            <div>
            <p className='text-xl font-bold  '>Class Image</p>
            <input type="url" className="w-full rounded h-14 ps-3  border-2 border-sky-400" placeholder='Enter PhotoURL' name="image" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold '>Instructor Name</p>
            <input type="text" className="w-full rounded h-14 ps-3  border-2 border-sky-400" placeholder='Enter Instructor Name' value={user?.displayName} readOnly name="instructorName" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold '>Instructor Email</p>
            <input type="email" className="w-full rounded h-14 ps-3  border-2 border-sky-400" placeholder='Enter Instructor Email' readOnly value={user?.email} name="email" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold '>Abailable Seats</p>
            <input type="number" className="w-full rounded h-14 ps-3  border-2 border-sky-400" placeholder='Abailable Seats' name="seats" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold '>Total Seats</p>
            <input type="number" className="w-full rounded h-14 ps-3  border-2 border-sky-400" placeholder='Total Seats' name="total" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold '>Price</p> 
            <input type="number" className="w-full rounded h-14 ps-3  border-2 border-sky-400" placeholder='Enter Price' name="price" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold '>Enroll</p> 
            <input type="number" className="w-full rounded h-14 ps-3  border-2 border-sky-400" placeholder='Enroll' value={0} readOnly name="enroll" id=""  required/>
            </div>
            </div>
            <input type="submit" className='btn btn-block text-white bg-sky-500 hover:bg-sky-800 mt-5' value='Add Class' id="" />
        </form>
        </div>
    );
};

export default AddClass;