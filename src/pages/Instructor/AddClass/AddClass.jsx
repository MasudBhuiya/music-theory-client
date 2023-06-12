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
            <h1 className='font-bold text-4xl text-sky-500 mb-10'>Add a New Class!!!</h1>
            <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 gap-10'>
            <div>
            <p className='text-xl font-bold mt-3'>Class Name</p>
            <input type="text" className="input input-bordered input-primary w-full max-w-xs" placeholder='Enter Name' name="name" id="" required/>
            </div>
            <div>
            <p className='text-xl font-bold  mt-3'>Class Image</p>
            <input type="url" className="input input-bordered input-primary w-full max-w-xs" placeholder='Enter PhotoURL' name="image" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold mt-3'>Instructor Name</p>
            <input type="text" className="input input-bordered input-primary w-full max-w-xs" placeholder='Enter Instructor Name' value={user?.displayName} readOnly name="instructorName" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold mt-3'>Instructor Email</p>
            <input type="email" className="input input-bordered input-primary w-full max-w-xs" placeholder='Enter Instructor Email' readOnly value={user?.email} name="email" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold mt-3'>Abailable Seats</p>
            <input type="number" className="input input-bordered input-primary w-full max-w-xs" placeholder='Abailable Seats' name="seats" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold mt-3'>Total Seats</p>
            <input type="number" className="input input-bordered input-primary w-full max-w-xs" placeholder='Total Seats' name="total" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold mt-3'>Price</p> 
            <input type="number" className="input input-bordered input-primary w-full max-w-xs" placeholder='Enter Price' name="price" id=""  required/>
            </div>
            <div>
            <p className='text-xl font-bold mt-3'>Enroll</p> 
            <input type="number" className="input input-bordered input-primary w-full max-w-xs" placeholder='Enroll' value={0} readOnly name="enroll" id=""  required/>
            </div>
            </div>
            <input type="submit" className='btn btn-block text-white bg-sky-500 hover:bg-sky-800 mt-5' value='Add Class' id="" />
        </form>
        </div>
    );
};

export default AddClass;