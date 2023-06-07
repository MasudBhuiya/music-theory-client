// import React from 'react';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import image from '../../assets/73812-cloud-computing-security.mp4'

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError]= useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { login} = useContext(AuthContext)


    const from = location.state?.from?.pathname || '/';
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
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
      }
    return (
        <>
        <div className="hero min-h-screen bg-base-200 pt-20">
  <div className="hero-content flex-col md:flex-row justify-between">
    <div className="text-center  md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold mb-4">Login now!</h1>
      <video className="" src={image}></video>
    </div>
    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered border-lime-500"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show ? "text" : "password"} placeholder="Enter password" name="password" className="input input-bordered border-lime-500 input-info w-full max-w-xs mb-4" required/>
            <p onClick={()=>setShow(!show)}>
                {
                    show ? <Link className='border rounded p-1'>Hide </Link>: <Link className='border rounded p-1'>Show</Link>
                }
            </p>
          
        </div>
        <div className="form-control mt-6 ">
          <input className="btn btn-primary bg-lime-600 border-0 hover:bg-lime-800" type="submit" value="Login" name="" id="" />
        </div>
      </form>
      <p className='text-center mt-5 mb-5'>New Here?<Link to='/signup' className='btn btn-link'>Create an account</Link></p>
    <p className='text-red-500'>{error}</p>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;