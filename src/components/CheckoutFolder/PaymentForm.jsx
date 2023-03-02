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


const PaymentForm = ({ checkoutToken , backStep , shippingData , nextStep , onCaptureCheckout }) => {
  const handleSubmit = async (event,elements,stripe) =>  {
    event.preventDefault();

    if(!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'Primary', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  };

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