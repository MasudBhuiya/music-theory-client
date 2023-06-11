
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import useTitle from "../../Shared/useTitle";

const Register = () => {
  const { register, handleSubmit, reset,  formState: { errors } } = useForm();
  const [error, setError]= useState(null);
    const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {signUp, updateUserProfile} = useContext(AuthContext)
  useTitle('SignUp')
  const onSubmit = data => {
    console.log(data);
    if(data.password !== data.confirmPassword){
      setError('Password is not match. Try again.');
      return ;
  }
  const from = location.state?.from?.pathname || '/';
    signUp(data.email, data.password)
    .then(result=>{
      const loggedUser = result.user;
      // console.log(loggedUser);
      navigate(from)
      updateUserProfile(data.name, data.image)
      .then(()=>{
        const saveUser = {name: loggedUser.name, email: loggedUser.email, image: loggedUser.photoURL};
        fetch('https://assignment-twelve-server-gilt.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then( data => {
          if(data.insertedId){
            reset()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully',
          showConfirmButton: false,
          timer: 1500
        })
          }
        } )
        
      })
      .catch(error => {
        setError(error.message)
      })
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
      <h1 className="text-5xl font-bold mb-7 text-center">Sign-Up now!</h1>
      <img src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&uid=R76180397&ga=GA1.1.110381157.1659454590&semt=ais' alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name is required!!!</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" {...register("image", { required: true })} name="image" placeholder="Image URL" className="input input-bordered" />
          {errors.image && <span className="text-red-600">Photo URL is required!!!</span>}
        </div>
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
          {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters!!!</span>}
          {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 characters!!!</span>}
          {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have 1 uppercase,  number and a special characters!!!</span>}
          <p className="mt-3" onClick={()=>setShow(!show)}>
                {
                    show ? <Link className='border rounded p-1'>Hide</Link>: <Link className='border rounded p-1'>Show</Link>
                }
            </p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type={show ? 'text':'password'} {...register("confirmPassword", { 
            required: true, 
            minLength: 6,
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
            })} placeholder="Confirm Password" className="input input-bordered" />
          {errors.password?.type === 'required' && <span className="text-red-600">Password is required!!!</span>}
          {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters!!!</span>}
          {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 characters!!!</span>}
          {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have 1 uppercase, number and a special characters!!!</span>}
          <p className="mt-3" onClick={()=>setShow(!show)}>
                {
                    show ? <Link className='border rounded p-1'>Hide</Link>: <Link className='border rounded p-1'>Show</Link>
                }
            </p>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value='Sign-Up' name="" id="" />
          <p className='text-red-500'>{error}</p>
        </div>
      </form>
      <p className='text-center mt-5 mb-5'>Already have an account?<Link to='/login' className='btn btn-link'>Please Login</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
</>
    );
};

export default Register;