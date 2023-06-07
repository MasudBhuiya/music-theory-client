// import React from 'react';

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
// import image from '../../assets/73812-cloud-computing-security.mp4'

const SignUp = () => {
    const {signUp, updateUserProfile} = useContext(AuthContext);
    const [error, setError]= useState(null);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()
    const handleRegister =(e)=>{
        setError('')
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmpassword.value;
        if(password.length < 6 && confirmPassword.length < 6){
            setError('Password is less then 6 characters');
            return;
        }
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setError('please add at least a special charecter in your password');
            return;
        }
        else if(password !== confirmPassword){
            setError('Password is not match. Try again.');
            return ;
        }
        const from = location.state?.from?.pathname || '/';
        signUp(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            Swal.fire({
                title: 'User Created Successfully.',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            updateUserProfile( name, photo);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }
    
    return (
        <form onSubmit={handleRegister} className='p-4 text-center pt-20' >
            <h1 className='text-3xl font-semibold mb-5'>Please SignUp!!!</h1>
            <p className='text-xl'>Your Name:</p>
            <input type="text" placeholder="Your Name" name="name" className="input input-bordered border-lime-500 input-info w-full max-w-xs mb-4" required/>
            <p className='text-xl'>Photo URL:</p>
            <input type="url" placeholder="Image URL" name="photo" className="input input-bordered border-lime-500 input-info w-full max-w-xs mb-4" required/>
            <p className='text-xl'>Your Email:</p>
            <input type="email" placeholder="Enter email" name="email" className="input input-bordered border-lime-500 input-info w-full max-w-xs mb-4" required/>
            <p className='text-xl'>Password:</p>
            <input type={show ? "text" : "password"} placeholder="Enter password" name="password" className="input input-bordered border-lime-500 input-info w-full max-w-xs mb-4" required/>
            <p onClick={()=>setShow(!show)}>
                {
                    show ? <Link className='border rounded p-1'>Hide</Link>: <Link className='border rounded p-1'>Show</Link>
                }
            </p>
            <p className='text-xl mt-1'>Confirm Password:</p>
            <input type={show ? "text" : "password"} placeholder="Confirm password" name="confirmpassword" className="input input-bordered border-lime-500 input-info w-full max-w-xs mb-4" required/>
            <p onClick={()=>setShow(!show)}>
                {
                    show ? <Link className='border rounded p-1'>Hide</Link>: <Link className='border rounded p-1'>Show</Link>
                }
            </p>
            <br />
            <p>If you already sign out!!! go <Link to="/login" className="btn btn-active btn-link pl-0">Login</Link></p>
            <p className='text-red-500'>{error}</p>
            <br />
            <input className='bg-lime-600 hover:bg-lime-800 px-12 py-3 rounded font-bold text-white' type="submit" name="login" value="Register" id="" />
            <p className='text-semibold mb-2'>Else register with_</p>
            <SocialLogin></SocialLogin>
            <br />
            </form>
    );
};

export default SignUp;