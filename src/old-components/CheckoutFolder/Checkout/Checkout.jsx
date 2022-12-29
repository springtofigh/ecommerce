import React, {useState , useEffect} from 'react';
import { Paper , Stepper , Step , StepLabel , Typography , Divider , Button , CircularProgress} from '@material-ui/core';

// API
import { commerce } from '../../../lib/commerce';
// STYLES
import useStyles from './styles';
// COMPONENTS
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import Navbar from '../../Navbar/Navbar';



// CHECKOUT STEPS
const steps = ['Shipping Address' , 'Checkout Information'];


const Checkout = () => {
    const [activeStep , setActiveStep] = useState(0);
    const [ckeckoutToken , setCheckoutToken] = useState(null);
    const [shippingData , setShippingData] = useState({});

    const classes = useStyles();

    const Confirmation = () => {
        <div>
            Confirmation
        </div>
    }

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />


  return (
    <>
    <Navbar/>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">CHECKOUT</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form/>}
            </Paper>
        </main>
    </>
  )
}

export default Checkout