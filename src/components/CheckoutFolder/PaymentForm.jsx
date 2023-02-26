import React from 'react';
import { Typography , Button } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { Elements , CardElement , ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// COMPONENTS
import Review from './Review';

// API
const stripePromis = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const PaymentForm = ({ checkoutToken , shippingData, backStep , onCapturedCheckout , nextStep }) => {
//   return (
//     <>
//       <Review ckeckoutToken={checkoutToken}/>
//       <Divider/>
//       <Typography variant='h6' gutterBottom style={{margin: '20px 0'}}>روشهای پرداخت</Typography>
//     </>
//   )
// }

// export default PaymentForm