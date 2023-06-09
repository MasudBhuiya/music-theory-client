import { Link, useNavigate, useRouteError } from 'react-router-dom';
import useTitle from '../../Shared/useTitle';

const ErrorPage = () => {
        const navigate = useNavigate()
        const handleGoBack =()=>{
            navigate('/')
        }
        const {error, status} = useRouteError()
        useTitle('Error')
        // console.log(error?.message, status)
    return (
        <div className='flex items-center my-12 justify-center text-center'>
            
            <div>
            <h1 className='text-2xl font-bold '>{status|| 400}</h1>
            <img className='w-64 mx-auto' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&uid=R76180397&ga=GA1.1.110381157.1659454590&semt=sph" alt="" />
            <h1 className='text-2xl font-bold'>{error?.message}</h1>
            <Link><button className='bg-red-400 p-2 rounded text-white font-medium mt-8' onClick={handleGoBack}>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;