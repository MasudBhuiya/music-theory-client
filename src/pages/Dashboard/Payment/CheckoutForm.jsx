import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';


const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements  = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useContext(AuthContext)

   

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card
        })

        if(error){
          console.log('error', error)
          setCardError( error.message)
        }
        else{
          setCardError('')
          console.log('payment Method',paymentMethod)
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'unknown',
              name: user?.displayName || 'unknown'
            },
          },
        }
      );
      if(confirmError){
        console.log(confirmError)
        setCardError(confirmError)
      }
      console.log(paymentIntent)
    }

   

    return (
        <>
        <form className='w-2/3 m-8 mx-auto' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary mt-7' type="submit" disabled={!stripe || !clientSecret }>
        Pay
      </button>
    </form>
    {cardError && <p className='text-red-500 w-2/3  mx-auto'>{cardError}</p>}
        </>
    );
};

export default CheckoutForm;