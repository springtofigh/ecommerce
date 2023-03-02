import React, {useState , useEffect} from 'react';
import { Paper , Stepper , Step , StepLabel , Typography , Divider , Button , CircularProgress} from '@material-ui/core';

// API
import { commerce } from '../../../lib/commerce';
// STYLES
import useStyles from './styles';
// COMPONENTS
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';


// CHECKOUT STEPS
// const steps = ['آدرس ارسال' , 'اطلاعات پرداخت'];

// const Checkout = ({ cart }) => {
//     const [activeStep , setActiveStep] = useState(0);
//     const [ckeckoutToken , setCheckoutToken] = useState(null);
//     const [shippingData , setShippingData] = useState({});

//     const classes = useStyles();

//     //Generating Token
//     useEffect(() => {
//       const generateToken = async () => {
//         try {
//           const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
//           console.log(token);
//           setCheckoutToken(token)
//         } catch (error) {
          
//         }
//       }
//       generateToken();
//     } , [cart]);

//     const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//     const next = (data) => {
//       setShippingData(data);
//       nextStep();
//     }

    // CONFIRMATION COMPONENT
//   const Confirmation = () => (
//     <>
//     <div>
//       تاییدیه
//     </div>
//     </>
    
//   )

//     const Form = () => activeStep === 0 ? 
//     <AddressForm ckeckoutToken={ckeckoutToken} next={next}/> : 
//     <PaymentForm shippingData={shippingData} ckeckoutToken={ckeckoutToken}/>
//   return (
//     <>
//     <div className={classes.toolbar} />
//     <main className={classes.layout}>
//         <Paper className={classes.paper}>
//             <Typography variant="h4" align="center">پرداخت</Typography>
//             <Stepper activeStep={activeStep} className={classes.stepper}>
//                 {steps.map((step) => (
//                     <Step key={step}>
//                       <StepLabel>
//                         {step}
//                       </StepLabel>
//                     </Step>
//               ))}
//             </Stepper>
//              LAST STEP 
//             {activeStep === steps.length ? <Confirmation /> : ckeckoutToken && <Form/>}
//         </Paper>
//     </main> 
//     </>
//   )
// }

// export default Checkout

const steps = ['آدرس ارسال' , 'اطلاعات پرداخت'];


const Checkout = ({ cart , order , onCaptureCheckout ,error }) => {
    const [activeStep , setActiveStep] = useState(0);
    const [checkoutToken , setCheckoutToken] = useState(null);
    const [shippingData , setShippingData] = useState({});

    const classes = useStyles();

    //Generating Token
    useEffect(() => {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
          console.log(token);
          setCheckoutToken(token)
        } catch (error) {
          
        }
      }
      generateToken();
    } , [cart]);

    // CHANGE STEP
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

        // CONFIRMATION COMPONENT
        const Confirmation = () => (
            <>
            <div>
                تاییدیه
            </div>
            </>
            
        )
        
            const Form = () => activeStep === 0 ? 
            <AddressForm checkoutToken={checkoutToken} next={next}/> :
            <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout}/>
    
  return (
    <>
    <div className={classes.toolbar} />
    <main className={classes.layout}>
    <Paper className={classes.paper}>
    <Typography variant="h4" align="center">پرداخت</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
               {steps.map((step) => (
                   <Step key={step}>
                    <StepLabel>
                            {step}
                    </StepLabel>
                   </Step>
                ))}
            </Stepper>
              {/* LAST STEP  */}
            {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
    </Paper>
    </main>
    </>
  )
}

export default Checkout;