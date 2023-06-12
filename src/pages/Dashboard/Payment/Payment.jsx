import React from 'react';
import useTitle from '../../../Shared/useTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

//TODO:
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);

const Payment = () => {
    useTitle('Payment')
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl'>Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;