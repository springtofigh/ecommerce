import React from 'react';
import { Typography , Button } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { Elements , CardElement , ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// COMPONENTS
import Review from './Review';

// API
const stripePromis = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken , backStep , nextStep , payTimeout , refreshCart }) => {
  const handleSubmit = async (event) =>  {
    event.preventDefault();
      payTimeout();
      refreshCart();
      nextStep();
    }

  return (
    <>
    <Review checkoutToken={checkoutToken}/>
    <Divider/>
    <Typography varient="h6" gutterBottom style={{margin:'20px 0'}}>اطلاعات پرداخت</Typography>
    <Elements stripe={stripePromis}>
      <ElementsConsumer>
        {
          ({elements , stripe}) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement/>
                <br/>
                <br/>
                <div style={{ display: 'flex' , justifyContent:'space-between'}}>
                  <Button type='submit' variant='contained' disabled={!stripe} color="primary">پرداخت</Button>
                  <Button variant='outlined' onClick={backStep}>بازگشت</Button>
                </div>
            </form>
          )
        }
      </ElementsConsumer>
    </Elements>
    </>
  )

  }

export default PaymentForm