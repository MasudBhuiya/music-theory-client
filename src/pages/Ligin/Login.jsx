// import React from 'react';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import image from '../../assets/73812-cloud-computing-security.mp4'
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const [error, setError]= useState(null);
    const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

  const {login} = useContext(AuthContext)

  const onSubmit = data => {
    console.log(data);
   
  const from = location.state?.from?.pathname || '/';
  login(data.email, data.password)
  .then(() => {
    Swal.fire({
      title: 'User Login Successful.',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    navigate(from, {replace: true})
  })
  .catch(error => {
    setError(error.message)
  })
  };
    return (
      <>
      <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row mt-24">
  <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold mb-8 text-center">Login now!</h1>
    <img src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&uid=R76180397&ga=GA1.1.110381157.1659454590&semt=ais' alt="" />
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
        {errors.email && <span className="text-red-600">Email is required!!!</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type={show ? "text" : "password"} {...register("password", { 
          required: true, 
          minLength: 6,
          maxLength: 20,
          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
          })} placeholder="password" className="input input-bordered" />
        {errors.password?.type === 'required' && <span className="text-red-600">Password is required!!!</span>}
        <p className="mt-3" onClick={()=>setShow(!show)}>
              {
                  show ? <Link className='border rounded p-1'>Hide</Link>: <Link className='border rounded p-1'>Show</Link>
              }
          </p>
      </div>
      <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value='Login' name="" id="" />
        <p className='text-red-500 mt-4'>{error}</p>
      </div>
    </form>
    <p className='text-center mt-5 mb-5'>New Here?<Link to='/register' className='btn btn-link'>Create an account</Link></p>
    <SocialLogin></SocialLogin>
  </div>
</div>
</div>
    </>
    )
};

export default Login;