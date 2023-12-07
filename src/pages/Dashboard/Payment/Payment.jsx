import React from 'react';
import useTitle from '../../../Shared/useTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
// import useClass from '../../../hooks/useClass';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);

const Payment = () => {
    const data = useLoaderData();
    // console.log(data)
    useTitle('Payment');

    // const [classe] = useClass();
    const price = data.price;
    console.log(price)
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl'>Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;